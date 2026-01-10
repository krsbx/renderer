import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { NumericRange } from '../../../../../types/shared';
import { ByteOffset } from './constant';
import type { SensorEventType } from './types';

export class SensorEvent {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, SensorEvent.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
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

  public getData(index: NumericRange<0, 6>) {
    const offset = index + ByteOffset.data_1;

    return this.$view.getUint32(offset, true);
  }

  public setData(index: NumericRange<0, 6>, value: number) {
    const offset = index + ByteOffset.data_1;

    this.$view.setUint32(offset, value, true);
  }

  public get sensor_timestamp() {
    return this.$view.getBigUint64(ByteOffset.sensor_timestamp, true);
  }

  public set sensor_timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.sensor_timestamp, value, true);
  }
}
