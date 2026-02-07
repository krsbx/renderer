import type { UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class UVector3 extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get x() {
    return this.$view.getUint32(ByteOffset.x, true) as UInt32;
  }

  public set x(value: UInt32) {
    this.$view.setUint32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getUint32(ByteOffset.y, true) as UInt32;
  }

  public set y(value: UInt32) {
    this.$view.setUint32(ByteOffset.y, value, true);
  }

  public get z() {
    return this.$view.getUint32(ByteOffset.z, true) as UInt32;
  }

  public set z(value: UInt32) {
    this.$view.setUint32(ByteOffset.z, value, true);
  }
}
