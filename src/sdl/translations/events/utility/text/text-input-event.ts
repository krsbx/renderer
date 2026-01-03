import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { RawTextInputEvent, TextInputEventType } from '../types';

export class TextInputEvent implements RawTextInputEvent {
  public static readonly BYTE_SIZE = 48;

  public type: TextInputEventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public text: string;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawTextInputEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.text = options.text;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = TextInputEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);

    view.setBigUint64(24, 0n, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const textAddr = read.ptr(pointer, 24);

    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      text: textAddr
        ? new CString(textAddr as unknown as Pointer).toString()
        : '',
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawTextInputEvent;

    return new TextInputEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const textAddr = view.getBigUint64(24, true);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      text:
        textAddr !== 0n
          ? new CString(textAddr as unknown as Pointer).toString()
          : '',
      free: null,
      address: null,
    } as RawTextInputEvent;

    return new TextInputEvent(result);
  }
}
