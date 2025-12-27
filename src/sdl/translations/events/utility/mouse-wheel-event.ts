import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  EventType,
  MouseWheelDirection,
} from '../../../ffi/events/constant';
import type { RawMouseWheelEvent } from '../types';

export class MouseWheelEvent implements RawMouseWheelEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public which: number;
  public x: number;
  public y: number;
  public direction: MouseWheelDirection;
  public mouse_x: number;
  public mouse_y: number;
  public integer_x: number;
  public integer_y: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawMouseWheelEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.which = options.which;
    this.x = options.x;
    this.y = options.y;
    this.direction = options.direction;
    this.mouse_x = options.mouse_x;
    this.mouse_y = options.mouse_y;
    this.integer_x = options.integer_x;
    this.integer_y = options.integer_y;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(56);
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setUint32(20, this.which, true);
    view.setFloat32(24, this.x, true);
    view.setFloat32(28, this.y, true);
    view.setInt32(32, this.direction, true);
    view.setFloat32(36, this.mouse_x, true);
    view.setFloat32(40, this.mouse_y, true);
    view.setInt32(44, this.integer_x, true);
    view.setInt32(48, this.integer_y, true);

    return buffer;
  }

  public fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      which: read.u32(pointer, 20),
      x: read.f32(pointer, 24),
      y: read.f32(pointer, 28),
      direction: read.i32(pointer, 32) as MouseWheelDirection,
      mouse_x: read.f32(pointer, 36),
      mouse_y: read.f32(pointer, 40),
      integer_x: read.i32(pointer, 44),
      integer_y: read.i32(pointer, 48),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawMouseWheelEvent;

    return new MouseWheelEvent(result);
  }

  public fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      which: view.getUint32(20, true),
      x: view.getFloat32(24, true),
      y: view.getFloat32(28, true),
      direction: view.getInt32(32) as MouseWheelDirection,
      mouse_x: view.getFloat32(36, true),
      mouse_y: view.getFloat32(40, true),
      integer_x: view.getInt32(44),
      integer_y: view.getInt32(48),
      free: null,
      address: null,
    } as RawMouseWheelEvent;

    return result;
  }
}
