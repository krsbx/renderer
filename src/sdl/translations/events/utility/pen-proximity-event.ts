import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { EventType } from '../../../ffi/events/constant';
import type { RawPenProximityEvent } from '../types';

export class PenProximityEvent implements RawPenProximityEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public which: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawPenProximityEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.which = options.which;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(24);
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setUint32(20, this.which, true);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      which: read.u32(pointer, 20),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPenProximityEvent;

    return new PenProximityEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      which: view.getUint32(20, true),
      free: null,
      address: null,
    } as RawPenProximityEvent;

    return new PenProximityEvent(result);
  }
}
