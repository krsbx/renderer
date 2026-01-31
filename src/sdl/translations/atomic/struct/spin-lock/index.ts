import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class SpinLock extends BaseStruct {
  public static override readonly BYTE_SIZE = 4;

  public get lock() {
    return this.$view.getInt32(ByteOffset.lock, true);
  }

  public set lock(value: number) {
    this.$view.setInt32(ByteOffset.lock, value, true);
  }
}
