import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { EventType } from '../../../ffi/events/constant';
import type { RawGamepadSensorEvent } from '../types';

export class GamepadSensorEvent implements RawGamepadSensorEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public sensor: number;
  public data: [x_gravity: number, y_pitch: number, z_roll: number];
  public sensor_timestamp: bigint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGamepadSensorEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.sensor = options.sensor;
    this.data = options.data;
    this.sensor_timestamp = options.sensor_timestamp;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(48);
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.which, true);
    view.setInt32(20, this.sensor);
    view.setFloat32(24, this.data[0], true);
    view.setFloat32(28, this.data[1], true);
    view.setFloat32(32, this.data[2], true);
    view.setBigUint64(40, this.sensor_timestamp, true);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      which: read.u32(pointer, 16),
      sensor: read.i32(pointer, 20),
      data: [
        read.f32(pointer, 24),
        read.f32(pointer, 28),
        read.f32(pointer, 32),
      ],
      sensor_timestamp: read.u64(pointer, 40),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGamepadSensorEvent;

    return new GamepadSensorEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      sensor: view.getInt32(20, true),
      data: [
        view.getFloat32(24, true),
        view.getFloat32(28, true),
        view.getFloat32(32, true),
      ],
      sensor_timestamp: view.getBigUint64(40, true),
      free: null,
      address: null,
    } as RawGamepadSensorEvent;

    return new GamepadSensorEvent(result);
  }
}
