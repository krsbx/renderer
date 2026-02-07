import type { UInt16 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class VirtualJoystickTouchpadDesc extends BaseStruct {
  public static override readonly BYTE_SIZE = 8;

  public get fingerCount() {
    return this.$view.getUint16(ByteOffset.nfingers, true) as UInt16;
  }

  public set fingerCount(value: UInt16) {
    this.$view.setUint16(ByteOffset.nfingers, value, true);
  }
}
