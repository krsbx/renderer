import type { Float } from '@/types/primitive';
import type { Enumerate } from '@/types/shared';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Matrix3 extends BaseStruct {
  public static override readonly BYTE_SIZE = 36;

  public get m00() {
    return this.$view.getFloat32(ByteOffset.m00, true) as Float;
  }

  public set m00(value: Float) {
    this.$view.setFloat32(ByteOffset.m00, value, true);
  }

  public get m01() {
    return this.$view.getFloat32(ByteOffset.m01, true) as Float;
  }

  public set m01(value: Float) {
    this.$view.setFloat32(ByteOffset.m01, value, true);
  }

  public get m02() {
    return this.$view.getFloat32(ByteOffset.m02, true) as Float;
  }

  public set m02(value: Float) {
    this.$view.setFloat32(ByteOffset.m02, value, true);
  }

  public get m10() {
    return this.$view.getFloat32(ByteOffset.m10, true) as Float;
  }

  public set m10(value: Float) {
    this.$view.setFloat32(ByteOffset.m10, value, true);
  }

  public get m11() {
    return this.$view.getFloat32(ByteOffset.m11, true) as Float;
  }

  public set m11(value: Float) {
    this.$view.setFloat32(ByteOffset.m11, value, true);
  }

  public get m12() {
    return this.$view.getFloat32(ByteOffset.m12, true) as Float;
  }

  public set m12(value: Float) {
    this.$view.setFloat32(ByteOffset.m12, value, true);
  }

  public get m20() {
    return this.$view.getFloat32(ByteOffset.m20, true) as Float;
  }

  public set m20(value: Float) {
    this.$view.setFloat32(ByteOffset.m20, value, true);
  }

  public get m21() {
    return this.$view.getFloat32(ByteOffset.m21, true) as Float;
  }

  public set m21(value: Float) {
    this.$view.setFloat32(ByteOffset.m21, value, true);
  }

  public get m22() {
    return this.$view.getFloat32(ByteOffset.m22, true) as Float;
  }

  public set m22(value: Float) {
    this.$view.setFloat32(ByteOffset.m22, value, true);
  }

  public col(n: Enumerate<3>): [Float, Float, Float] {
    const base = n * 12;

    return [
      this.$view.getFloat32(base, true) as Float,
      this.$view.getFloat32(base + 4, true) as Float,
      this.$view.getFloat32(base + 8, true) as Float,
    ];
  }

  public row(n: Enumerate<3>): [Float, Float, Float] {
    const offset = n * 4;

    return [
      this.$view.getFloat32(offset, true) as Float,
      this.$view.getFloat32(offset + 12, true) as Float,
      this.$view.getFloat32(offset + 24, true) as Float,
    ];
  }
}
