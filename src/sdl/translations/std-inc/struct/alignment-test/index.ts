import { BaseStruct } from '@basestruct';
import { type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AlignmentTest extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get a() {
    return this.$view.getUint8(ByteOffset.a);
  }

  public set a(value: number) {
    this.$view.setUint8(ByteOffset.a, value);
  }

  public get b() {
    const addr = this.$view.getBigUint64(ByteOffset.b, true);

    return Number(addr) as Pointer;
  }

  public set b(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.b, BigInt(value), true);
  }
}
