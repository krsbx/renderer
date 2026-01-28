import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class Rect extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get x() {
    return this.$view.getInt32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setInt32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getInt32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setInt32(ByteOffset.y, value, true);
  }

  public get w() {
    return this.$view.getInt32(ByteOffset.w, true);
  }

  public set w(value: number) {
    this.$view.setInt32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getInt32(ByteOffset.h, true);
  }

  public set h(value: number) {
    this.$view.setInt32(ByteOffset.h, value, true);
  }
}
