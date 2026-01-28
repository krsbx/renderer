import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class FPoint extends BaseStruct {
  public static override readonly BYTE_SIZE = 8;

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
}
