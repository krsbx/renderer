import type { Float } from '@/types/primitive';
import type { Enumerate } from '@/types/shared';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Matrix4 extends BaseStruct {
  public static override readonly BYTE_SIZE = 64;

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

  public get m03() {
    return this.$view.getFloat32(ByteOffset.m03, true) as Float;
  }

  public set m03(value: Float) {
    this.$view.setFloat32(ByteOffset.m03, value, true);
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

  public get m13() {
    return this.$view.getFloat32(ByteOffset.m13, true) as Float;
  }

  public set m13(value: Float) {
    this.$view.setFloat32(ByteOffset.m13, value, true);
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

  public get m23() {
    return this.$view.getFloat32(ByteOffset.m23, true) as Float;
  }

  public set m23(value: Float) {
    this.$view.setFloat32(ByteOffset.m23, value, true);
  }

  public get m30() {
    return this.$view.getFloat32(ByteOffset.m30, true) as Float;
  }

  public set m30(value: Float) {
    this.$view.setFloat32(ByteOffset.m30, value, true);
  }

  public get m31() {
    return this.$view.getFloat32(ByteOffset.m31, true) as Float;
  }

  public set m31(value: Float) {
    this.$view.setFloat32(ByteOffset.m31, value, true);
  }

  public get m32() {
    return this.$view.getFloat32(ByteOffset.m32, true) as Float;
  }

  public set m32(value: Float) {
    this.$view.setFloat32(ByteOffset.m32, value, true);
  }

  public get m33() {
    return this.$view.getFloat32(ByteOffset.m33, true) as Float;
  }

  public set m33(value: Float) {
    this.$view.setFloat32(ByteOffset.m33, value, true);
  }

  public col(n: Enumerate<4>): [Float, Float, Float, Float] {
    const base = n * 16;

    return [
      this.$view.getFloat32(base, true) as Float,
      this.$view.getFloat32(base + 4, true) as Float,
      this.$view.getFloat32(base + 8, true) as Float,
      this.$view.getFloat32(base + 12, true) as Float,
    ];
  }

  public row(n: Enumerate<4>): [Float, Float, Float, Float] {
    const offset = n * 4;

    return [
      this.$view.getFloat32(offset, true) as Float,
      this.$view.getFloat32(offset + 16, true) as Float,
      this.$view.getFloat32(offset + 32, true) as Float,
      this.$view.getFloat32(offset + 48, true) as Float,
    ];
  }
}
