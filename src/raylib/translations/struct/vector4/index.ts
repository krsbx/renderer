import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class Vector4 extends BaseStruct {
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

  public get z() {
    return this.$view.getFloat32(ByteOffset.z, true);
  }

  public set z(value: number) {
    this.$view.setFloat32(ByteOffset.z, value, true);
  }

  public get w() {
    return this.$view.getFloat32(ByteOffset.w, true);
  }

  public set w(value: number) {
    this.$view.setFloat32(ByteOffset.w, value, true);
  }
}

export { Vector4 as Quaternion };
