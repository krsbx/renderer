import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class AtomicInt extends BaseStruct {
  public static override readonly BYTE_SIZE = 4;

  public get value() {
    return this.$view.getInt32(ByteOffset.value, true);
  }

  public set value(value: number) {
    this.$view.setInt32(ByteOffset.value, value, true);
  }
}
