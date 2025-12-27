import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { RawUserEvent, UserEventType } from '../types';

export class UserEvent implements RawUserEvent {
  public type: UserEventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public code: number;
  public data1: bigint;
  public data2: bigint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawUserEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.code = options.code;
    this.data1 = options.data1;
    this.data2 = options.data2;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = UserEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setInt32(20, this.code, true);
    view.setBigUint64(24, this.data1 ?? 0n, true);
    view.setBigUint64(32, this.data2 ?? 0n, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(40);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      code: read.i32(pointer, 20),
      data1: read.u64(pointer, 24),
      data2: read.u64(pointer, 32),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawUserEvent;

    return new UserEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      code: view.getInt32(20, true),
      data1: view.getBigUint64(24, true),
      data2: view.getBigUint64(32, true),
      free: null,
      address: null,
    } as RawUserEvent;

    return new UserEvent(result);
  }
}
