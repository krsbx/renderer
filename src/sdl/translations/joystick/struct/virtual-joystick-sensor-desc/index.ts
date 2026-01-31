import { BaseStruct } from '@basestruct';
import type { SensorType } from '@sdl/ffi/constant/sensor';
import { ByteOffset } from './constant';

export class VirtualJoystickSensorDesc extends BaseStruct {
  public static override readonly BYTE_SIZE = 8;

  public get type() {
    return this.$view.getInt32(ByteOffset.type, true) as SensorType;
  }

  public set type(value: SensorType) {
    this.$view.setInt32(ByteOffset.type, value, true);
  }

  public get rate() {
    return this.$view.getFloat32(ByteOffset.rate, true);
  }

  public set rate(value: number) {
    this.$view.setFloat32(ByteOffset.rate, value, true);
  }
}
