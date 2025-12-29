import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { MessageBoxButtonFlags } from '../../../ffi/message-box/constant';
import { convertStringToFfi } from '../../../utility/comon';
import type { RawMessageBoxButtonData } from './types';

export class MessageBoxButtonData implements RawMessageBoxButtonData {
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

    view.setUint32(0, this.flags, true);
    view.setInt32(4, this.buttonID, true);

    const textPtr = convertStringToFfi(this.text);
    view.setBigUint64(8, BigInt(textPtr.reference), true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const textPtr = read.ptr(pointer, 8) as Pointer;

    const result = {
      flags: read.u32(pointer, 0),
      buttonID: read.i32(pointer, 4),
      text: new CString(textPtr).toString(),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawMessageBoxButtonData;

    return new MessageBoxButtonData(result);
  }

  public static fromMemory(messageBoxButtonData: Uint8Array) {
    const view = new DataView(
      messageBoxButtonData.buffer,
      messageBoxButtonData.byteOffset,
      messageBoxButtonData.byteLength
    );

    const textPtr = view.getBigUint64(8) as unknown as Pointer;

    const result = {
      flags: view.getUint32(0, true),
      buttonID: view.getInt32(4, true),
      text: new CString(textPtr).toString(),
      free: null,
      address: null,
    } as RawMessageBoxButtonData;

    return new MessageBoxButtonData(result);
  }
}
