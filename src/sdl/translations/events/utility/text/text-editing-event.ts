import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { RawTextEditingEvent, TextEditingEventType } from '../types';

export class TextEditingEvent implements RawTextEditingEvent {
  public type: TextEditingEventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public text: string;
  public start: number;
  public length: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawTextEditingEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.text = options.text;
    this.start = options.start;
    this.length = options.length;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = TextEditingEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);

    view.setBigUint64(24, 0n, true);

    view.setUint32(32, this.start, true);
    view.setUint32(36, this.length, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(48);

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
      start: read.u32(pointer, 32),
      length: read.u32(pointer, 36),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawTextEditingEvent;

    return new TextEditingEvent(result);
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
      start: view.getUint32(32, true),
      length: view.getUint32(36, true),
      free: null,
      address: null,
    } as RawTextEditingEvent;

    return new TextEditingEvent(result);
  }
}
