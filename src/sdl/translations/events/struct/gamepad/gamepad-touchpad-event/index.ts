import type { JoystickID } from '@/sdl/types/definition';
import type { Float, Int32, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { GamepadTouchpadEventType } from './types';

export class GamepadTouchpadEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  public get type() {
    return this.$view.getUint32(
      ByteOffset.type,
      true
    ) as GamepadTouchpadEventType;
  }

  public set type(value: GamepadTouchpadEventType) {
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

  public get touchpad() {
    return this.$view.getInt32(ByteOffset.touchpad, true) as Int32;
  }

  public set touchpad(value: Int32) {
    this.$view.setInt32(ByteOffset.touchpad, value, true);
  }

  public get finger() {
    return this.$view.getInt32(ByteOffset.finger, true) as Int32;
  }

  public set finger(value: Int32) {
    this.$view.setInt32(ByteOffset.finger, value, true);
  }

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true) as Float;
  }

  public set x(value: Float) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true) as Float;
  }

  public set y(value: Float) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get pressure() {
    return this.$view.getFloat32(ByteOffset.pressure, true) as Float;
  }

  public set pressure(value: Float) {
    this.$view.setFloat32(ByteOffset.pressure, value, true);
  }
}
