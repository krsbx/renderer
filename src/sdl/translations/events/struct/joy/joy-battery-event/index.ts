import type { JoystickID } from '@/sdl/types/definition';
import type { Int32, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import type { PowerState } from '@sdl/ffi/constant/power';
import { ByteOffset } from './constant';
import type { JoyBatteryEventType } from './types';

export class JoyBatteryEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as JoyBatteryEventType;
  }

  public set type(value: JoyBatteryEventType) {
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
    return this.$view.getUint32(ByteOffset.which, true) as JoystickID;
  }

  public set which(value: JoystickID) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get state() {
    return this.$view.getInt32(ByteOffset.state, true) as PowerState;
  }

  public set state(value: PowerState) {
    this.$view.setInt32(ByteOffset.state, value, true);
  }

  public get percent() {
    return this.$view.getInt32(ByteOffset.percent, true) as Int32;
  }

  public set percent(value: Int32) {
    this.$view.setInt32(ByteOffset.percent, value, true);
  }
}
