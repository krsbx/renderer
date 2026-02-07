import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Rect extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

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

  public get w() {
    return this.$view.getInt32(ByteOffset.w, true) as Int32;
  }

  public set w(value: Int32) {
    this.$view.setInt32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getInt32(ByteOffset.h, true) as Int32;
  }

  public set h(value: Int32) {
    this.$view.setInt32(ByteOffset.h, value, true);
  }
}
