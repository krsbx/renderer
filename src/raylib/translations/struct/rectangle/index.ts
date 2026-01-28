import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class Rectangle extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get width() {
    return this.$view.getFloat32(ByteOffset.width, true);
  }

  public set width(value: number) {
    this.$view.setFloat32(ByteOffset.width, value, true);
  }

  public get height() {
    return this.$view.getFloat32(ByteOffset.height, true);
  }

  public set height(value: number) {
    this.$view.setFloat32(ByteOffset.height, value, true);
  }
}
