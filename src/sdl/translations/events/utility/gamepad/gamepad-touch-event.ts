import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { EventType } from '../../../../ffi/events/constant';
import type { RawGamepadTouchpadEvent } from '../types';

export class GamepadTouchpadEvent implements RawGamepadTouchpadEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public touchpad: number;
  public finger: number;
  public x: number;
  public y: number;
  public pressure: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGamepadTouchpadEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.touchpad = options.touchpad;
    this.finger = options.finger;
    this.x = options.x;
    this.y = options.y;
    this.pressure = options.pressure;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GamepadTouchpadEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.which, true);
    view.setInt32(20, this.touchpad);
    view.setInt32(24, this.finger);
    view.setFloat32(28, this.x);
    view.setFloat32(32, this.y);
    view.setFloat32(36, this.pressure);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(48);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      which: read.u32(pointer, 16),
      touchpad: read.i32(pointer, 20),
      finger: read.i32(pointer, 24),
      x: read.f32(pointer, 28),
      y: read.f32(pointer, 32),
      pressure: read.f32(pointer, 36),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGamepadTouchpadEvent;

    return new GamepadTouchpadEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      touchpad: view.getInt32(20, true),
      finger: view.getInt32(24, true),
      x: view.getFloat32(28, true),
      y: view.getFloat32(32, true),
      pressure: view.getFloat32(36, true),
      free: null,
      address: null,
    } as RawGamepadTouchpadEvent;

    return new GamepadTouchpadEvent(result);
  }
}
