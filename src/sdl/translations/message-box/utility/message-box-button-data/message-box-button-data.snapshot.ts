import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { MessageBoxButtonFlags } from '../../../../ffi/message-box/constant';
import { convertStringToFfi } from '../../../../utility/common';
import { ByteOffset } from './constant';
import type { RawMessageBoxButtonData } from './types';

export class MessageBoxButtonData implements RawMessageBoxButtonData {
  public static readonly BYTE_SIZE = 16;

  public flags: MessageBoxButtonFlags;
  public buttonID: number;
  public text: string;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawMessageBoxButtonData) {
    this.flags = options.flags;
    this.buttonID = options.buttonID;
    this.text = options.text;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = MessageBoxButtonData.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(ByteOffset.flags, this.flags, true);
    view.setInt32(ByteOffset.buttonID, this.buttonID, true);

    const textPtr = convertStringToFfi(this.text);
    view.setBigUint64(ByteOffset.text, BigInt(textPtr.reference), true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const textPtr = read.ptr(pointer, ByteOffset.text) as Pointer;

    const result = {
      flags: read.u32(pointer, ByteOffset.flags),
      buttonID: read.i32(pointer, ByteOffset.buttonID),
      text: new CString(textPtr).toString(),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawMessageBoxButtonData;

    return new MessageBoxButtonData(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const textPtr = view.getBigUint64(ByteOffset.text) as unknown as Pointer;

    const result = {
      flags: view.getUint32(ByteOffset.flags, true),
      buttonID: view.getInt32(ByteOffset.buttonID, true),
      text: new CString(textPtr).toString(),
      free: null,
      address: null,
    } as RawMessageBoxButtonData;

    return new MessageBoxButtonData(result);
  }
}
