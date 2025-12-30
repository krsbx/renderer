import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { CommonEventType, RawCommonEvent } from '../types';

export class CommonEvent implements RawCommonEvent {
  public type: CommonEventType;
  public reserved: number;
  public timestamp: bigint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawCommonEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = CommonEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawCommonEvent;

    return new CommonEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      free: null,
      address: null,
    } as RawCommonEvent;

    return new CommonEvent(result);
  }
}
