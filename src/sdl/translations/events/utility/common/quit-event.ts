import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { QuitEventType, RawQuitEvent } from '../types';

export class QuitEvent implements RawQuitEvent {
  public type: QuitEventType;
  public reserved: number;
  public timestamp: bigint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawQuitEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = QuitEvent.allocMemory();
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
    } as RawQuitEvent;

    return new QuitEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      free: null,
      address: null,
    } as RawQuitEvent;

    return new QuitEvent(result);
  }
}
