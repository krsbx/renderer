import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { GamepadSensorEventType } from './types';

export class GamepadSensorEvent {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  private $data: [number, number, number] | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GamepadSensorEvent.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.$data = null;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get type() {
    return this.$view.getUint32(
      ByteOffset.type,
      true
    ) as GamepadSensorEventType;
  }

  public set type(value: GamepadSensorEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true);
  }

  public set reserved(value: number) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true);
  }

  public set which(value: number) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get sensor() {
    return this.$view.getInt32(ByteOffset.sensor, true);
  }

  public set sensor(value: number) {
    this.$view.setInt32(ByteOffset.sensor, value, true);
  }

  public get data() {
    if (this.$data) return this.$data;

    const length = 3;

    this.$data = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // Allow access to standard array methods (map, forEach, etc)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];

          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return this.$view.getFloat32(ByteOffset.data1 + index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setFloat32(ByteOffset.data1 + index * 4, value, true);

        return true;
      },
    }) as never;

    return this.$data;
  }

  public get sensorTimestamp() {
    return this.$view.getBigUint64(ByteOffset.sensor_timestamp, true);
  }

  public set sensorTimestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.sensor_timestamp, value, true);
  }
}
