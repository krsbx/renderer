import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { EventType } from '../../../../ffi/events/constant';
import type { RawPenButtonEvent } from '../types';

export class PenButtonEvent implements RawPenButtonEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public which: number;
  public pen_state: number;
  public x: number;
  public y: number;
  public button: number;
  public down: boolean;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawPenButtonEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.which = options.which;
    this.pen_state = options.pen_state;
    this.x = options.x;
    this.y = options.y;
    this.button = options.button;
    this.down = options.down;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(40);
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setUint32(20, this.which, true);
    view.setUint32(24, this.pen_state, true);
    view.setFloat32(28, this.x, true);
    view.setFloat32(32, this.y, true);
    view.setUint8(36, this.button);
    view.setUint8(37, this.down ? 1 : 0);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      which: read.u32(pointer, 20),
      pen_state: read.u32(pointer, 24),
      x: read.f32(pointer, 28),
      y: read.f32(pointer, 32),
      button: read.u8(pointer, 36),
      down: read.u8(pointer, 37) === 1,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPenButtonEvent;

    return new PenButtonEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      which: view.getUint32(20, true),
      pen_state: view.getUint32(24, true),
      x: view.getFloat32(28, true),
      y: view.getFloat32(32, true),
      button: view.getUint8(36),
      down: view.getUint8(37) === 1,
      free: null,
      address: null,
    } as RawPenButtonEvent;

    return new PenButtonEvent(result);
  }
}
