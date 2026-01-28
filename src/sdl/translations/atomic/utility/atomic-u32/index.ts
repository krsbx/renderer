import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class AtomicU32 extends BaseStruct {
  public static override readonly BYTE_SIZE = 4;

  public get value() {
    return this.$view.getUint32(ByteOffset.value, true);
  }

  public set value(value: number) {
    this.$view.setUint32(ByteOffset.value, value, true);
  }
}
