import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { RawSensorEvent, SensorEventType } from '../types';

export class SensorEvent implements RawSensorEvent {
  public static readonly BYTE_SIZE = 56;

  public type: SensorEventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public data: [
    sensor_1: number,
    sensor_2: number,
    sensor_3: number,
    sensor_4: number,
    sensor_5: number,
    sensor_6: number,
  ];
  public sensor_timestamp: bigint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawSensorEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.data = options.data;
    this.sensor_timestamp = options.sensor_timestamp;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = SensorEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.which, true);
    view.setFloat32(20, this.data[0], true);
    view.setFloat32(24, this.data[1], true);
    view.setFloat32(28, this.data[2], true);
    view.setFloat32(32, this.data[3], true);
    view.setFloat32(36, this.data[4], true);
    view.setFloat32(40, this.data[5], true);
    view.setBigUint64(48, this.sensor_timestamp, true);

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
      which: read.u32(pointer, 16),
      data: [
        read.f32(pointer, 20),
        read.f32(pointer, 24),
        read.f32(pointer, 28),
        read.f32(pointer, 32),
        read.f32(pointer, 36),
        read.f32(pointer, 40),
      ],
      sensor_timestamp: read.u64(pointer, 48),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawSensorEvent;

    return new SensorEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      data: [
        view.getFloat32(20, true),
        view.getFloat32(24, true),
        view.getFloat32(28, true),
        view.getFloat32(32, true),
        view.getFloat32(36, true),
        view.getFloat32(40, true),
      ],
      sensor_timestamp: view.getBigUint64(48, true),
      free: null,
      address: null,
    } as RawSensorEvent;

    return new SensorEvent(result);
  }
}
