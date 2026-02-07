import type { JoystickID } from '@/sdl/types/definition';
import type { Int16, UInt32, UInt8 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { GamepadAxisEventType } from './types';

export class GamepadAxisEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as GamepadAxisEventType;
  }

  public set type(value: GamepadAxisEventType) {
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

  public get axis() {
    return this.$view.getUint8(ByteOffset.axis) as UInt8;
  }

  public set axis(value: UInt8) {
    this.$view.setUint8(ByteOffset.axis, value);
  }

  public get value() {
    return this.$view.getInt16(ByteOffset.value, true) as Int16;
  }

  public set value(value: Int16) {
    this.$view.setInt16(ByteOffset.value, value, true);
  }
}
