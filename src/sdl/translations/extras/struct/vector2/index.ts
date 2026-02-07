import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Vector2 extends BaseStruct {
  public static override readonly BYTE_SIZE = 8;

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
}
