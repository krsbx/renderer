import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class SpinLock extends BaseStruct {
  public static override readonly BYTE_SIZE = 4;

  public get lock() {
    return this.$view.getInt32(ByteOffset.lock, true) as Int32;
  }

  public set lock(value: Int32) {
    this.$view.setInt32(ByteOffset.lock, value, true);
  }
}
