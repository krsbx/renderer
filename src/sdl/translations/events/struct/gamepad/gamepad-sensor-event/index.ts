import type { Int32, UInt32 } from '@/types/primitive';
import type { BuildTuple } from '@/types/shared';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { GamepadSensorEventType } from './types';

export class GamepadSensorEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  private $data: BuildTuple<3, number> | null = null;

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
    return this.$view.getUint32(ByteOffset.reserved, true) as UInt32;
  }

  public set reserved(value: UInt32) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true) as UInt32;
  }

  public set which(value: UInt32) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get sensor() {
    return this.$view.getInt32(ByteOffset.sensor, true) as Int32;
  }

  public set sensor(value: Int32) {
    this.$view.setInt32(ByteOffset.sensor, value, true);
  }

  public get data() {
    if (this.$data) return this.$data;

    this.$data = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.data1,
      3
    ) as never;

    return this.$data;
  }

  public get sensorTimestamp() {
    return this.$view.getBigUint64(ByteOffset.sensor_timestamp, true);
  }

  public set sensorTimestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.sensor_timestamp, value, true);
  }
}
