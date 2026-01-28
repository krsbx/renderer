import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class BoneInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 36;

  public get name() {
    const bytes = this.$memory.subarray(ByteOffset.name, ByteOffset.name + 32);
    const nullIndex = bytes.indexOf(0);
    const validBytes = nullIndex === -1 ? bytes : bytes.subarray(0, nullIndex);
    return new TextDecoder().decode(validBytes);
  }

  public set name(value: string) {
    const bytes = new TextEncoder().encode(value);
    const dest = this.$memory.subarray(ByteOffset.name, ByteOffset.name + 32);

    dest.fill(0);
    dest.set(bytes.subarray(0, Math.min(bytes.length, 31)));
  }

  public get parent() {
    return this.$view.getInt32(ByteOffset.parent, true);
  }

  public set parent(value: number) {
    this.$view.setInt32(ByteOffset.parent, value, true);
  }
}
