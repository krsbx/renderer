import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { RawWindowEvent, WindowEventType } from '../types';

export class WindowEvent implements RawWindowEvent {
  public static readonly BYTE_SIZE = 32;

  public type: WindowEventType;
  public reserved: number;
  public timestamp: bigint;
  public displayID: number;
  public data1: number;
  public data2: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawWindowEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.displayID = options.displayID;
    this.data1 = options.data1;
    this.data2 = options.data2;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = WindowEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.displayID, true);
    view.setInt32(20, this.data1, true);
    view.setInt32(24, this.data2, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      displayID: read.u32(pointer, 16),
      data1: read.i32(pointer, 20),
      data2: read.i32(pointer, 24),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawWindowEvent;

    return new WindowEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      displayID: view.getUint32(16, true),
      data1: view.getInt32(20, true),
      data2: view.getInt32(24, true),
      free: null,
      address: null,
    } as RawWindowEvent;

    return new WindowEvent(result);
  }
}
