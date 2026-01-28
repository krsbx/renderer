import { BaseStruct } from '@/utility/base-struct';

export class GUID extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get data() {
    return this.$memory;
  }

  public override toString() {
    return Array.from(this.$memory)
      .map((v) => v.toString(16).padStart(2, '0'))
      .join('');
  }
}
