import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class VirtualJoystickTouchpadDesc extends BaseStruct {
  public static override readonly BYTE_SIZE = 8;

  public get fingerCount() {
    return this.$view.getInt16(ByteOffset.nfingers, true);
  }

  public set fingerCount(value: number) {
    this.$view.setInt16(ByteOffset.nfingers, value, true);
  }
}
