import type { UInt8 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class MessageBoxColor extends BaseStruct {
  public static override readonly BYTE_SIZE = 3;

  public get r() {
    return this.$view.getUint8(ByteOffset.r) as UInt8;
  }

  public set r(value: UInt8) {
    this.$view.setUint8(ByteOffset.r, value);
  }

  public get g() {
    return this.$view.getUint8(ByteOffset.g) as UInt8;
  }

  public set g(value: UInt8) {
    this.$view.setUint8(ByteOffset.g, value);
  }

  public get b() {
    return this.$view.getUint8(ByteOffset.b) as UInt8;
  }

  public set b(value: UInt8) {
    this.$view.setUint8(ByteOffset.b, value);
  }
}
