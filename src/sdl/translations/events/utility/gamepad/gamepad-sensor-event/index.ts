import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { NumericRange } from '../../../../../types/shared';
import { ByteOffset } from './constant';
import type { GamepadSensorEventType } from './types';

export class GamepadSensorEvent {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
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

  public getData(index: NumericRange<0, 3>) {
    const offset = index * 4 + ByteOffset.data_1;

    return this.$view.getFloat32(offset, true);
  }

  public setData(index: NumericRange<0, 3>, value: number) {
    const offset = index * 4 + ByteOffset.data_1;

    this.$view.setFloat32(offset, value, true);
  }

  public get sensor_timestamp() {
    return this.$view.getBigUint64(ByteOffset.sensor_timestamp, true);
  }

  public set sensor_timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.sensor_timestamp, value, true);
  }
}
