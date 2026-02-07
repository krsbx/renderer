import type { UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class AtomicU32 extends BaseStruct {
  public static override readonly BYTE_SIZE = 4;

  public get value() {
    return this.$view.getUint32(ByteOffset.value, true) as UInt32;
  }

  public set value(value: UInt32) {
    this.$view.setUint32(ByteOffset.value, value, true);
  }
}
