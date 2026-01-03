import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { PenTouchEventType, RawPenTouchEvent } from '../types';

export class PenTouchEvent implements RawPenTouchEvent {
  public static readonly BYTE_SIZE = 48;

  public type: PenTouchEventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public which: number;
  public pen_state: number;
  public x: number;
  public y: number;
  public pressure: number;
  public eraser: boolean;
  public down: boolean;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawPenTouchEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.which = options.which;
    this.pen_state = options.pen_state;
    this.x = options.x;
    this.y = options.y;
    this.pressure = options.pressure;
    this.eraser = options.eraser;
    this.down = options.down;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = PenTouchEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setUint32(20, this.which, true);
    view.setUint32(24, this.pen_state, true);
    view.setFloat32(28, this.x, true);
    view.setFloat32(32, this.y, true);
    view.setFloat32(36, this.pressure, true);
    view.setInt8(40, this.eraser ? 1 : 0);
    view.setInt8(44, this.down ? 1 : 0);

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
      windowID: read.u32(pointer, 16),
      which: read.u32(pointer, 20),
      pen_state: read.u32(pointer, 24),
      x: read.f32(pointer, 28),
      y: read.f32(pointer, 32),
      pressure: read.f32(pointer, 36),
      eraser: read.i8(pointer, 40) === 1,
      down: read.i8(pointer, 44) === 1,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPenTouchEvent;

    return new PenTouchEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      which: view.getUint32(20, true),
      pen_state: view.getUint32(24, true),
      x: view.getFloat32(28, true),
      y: view.getFloat32(32, true),
      pressure: view.getFloat32(36, true),
      eraser: view.getInt8(40) === 1,
      down: view.getInt8(44) === 1,
      free: null,
      address: null,
    } as RawPenTouchEvent;

    return new PenTouchEvent(result);
  }
}
