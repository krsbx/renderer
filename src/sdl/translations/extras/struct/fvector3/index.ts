import type { Float } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class FVector3 extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true) as Float;
  }

  public set x(value: Float) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true) as Float;
  }

  public set y(value: Float) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get z() {
    return this.$view.getFloat32(ByteOffset.z, true) as Float;
  }

  public set z(value: Float) {
    this.$view.setFloat32(ByteOffset.z, value, true);
  }
}
