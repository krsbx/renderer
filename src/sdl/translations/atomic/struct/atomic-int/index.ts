import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class AtomicInt extends BaseStruct {
  public static override readonly BYTE_SIZE = 4;

  public get value() {
    return this.$view.getInt32(ByteOffset.value, true) as Int32;
  }

  public set value(value: Int32) {
    this.$view.setInt32(ByteOffset.value, value, true);
  }
}

export { AtomicInt as TLSID };
