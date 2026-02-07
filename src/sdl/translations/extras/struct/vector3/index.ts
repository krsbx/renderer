import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Vector3 extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get x() {
    return this.$view.getInt32(ByteOffset.x, true) as Int32;
  }

  public set x(value: Int32) {
    this.$view.setInt32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getInt32(ByteOffset.y, true) as Int32;
  }

  public set y(value: Int32) {
    this.$view.setInt32(ByteOffset.y, value, true);
  }

  public get z() {
    return this.$view.getInt32(ByteOffset.z, true) as Int32;
  }

  public set z(value: Int32) {
    this.$view.setInt32(ByteOffset.z, value, true);
  }
}
