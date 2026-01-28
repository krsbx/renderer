import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { ByteOffset } from './constant';
import type { SensorEventType } from './types';

export class SensorEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 56;

  private $data: [number, number, number, number, number, number] | null;

  public constructor(data: BaseStructOptions) {
    super(data);
    this.$data = null;
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as SensorEventType;
  }

  public set type(value: SensorEventType) {
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

  public get data() {
    if (this.$data) return this.$data;

    const length = 6;

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

        return this.$view.getUint32(ByteOffset.data1 + index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setUint32(ByteOffset.data1 + index * 4, value, true);

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
