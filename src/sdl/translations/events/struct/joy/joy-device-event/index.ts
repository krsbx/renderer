import type { JoystickID } from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { JoyDeviceEventType } from './types';

export class JoyDeviceEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as JoyDeviceEventType;
  }

  public set type(value: JoyDeviceEventType) {
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
}
