import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Matrix {
  public static readonly BYTE_SIZE = 64;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, Matrix.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  // Row 1
  public get m0() {
    return this.$view.getFloat32(ByteOffset.m0, true);
  }

  public set m0(v: number) {
    this.$view.setFloat32(ByteOffset.m0, v, true);
  }

  public get m4() {
    return this.$view.getFloat32(ByteOffset.m4, true);
  }

  public set m4(v: number) {
    this.$view.setFloat32(ByteOffset.m4, v, true);
  }

  public get m8() {
    return this.$view.getFloat32(ByteOffset.m8, true);
  }

  public set m8(v: number) {
    this.$view.setFloat32(ByteOffset.m8, v, true);
  }

  public get m12() {
    return this.$view.getFloat32(ByteOffset.m12, true);
  }

  public set m12(v: number) {
    this.$view.setFloat32(ByteOffset.m12, v, true);
  }

  // Row 2
  public get m1() {
    return this.$view.getFloat32(ByteOffset.m1, true);
  }

  public set m1(v: number) {
    this.$view.setFloat32(ByteOffset.m1, v, true);
  }

  public get m5() {
    return this.$view.getFloat32(ByteOffset.m5, true);
  }

  public set m5(v: number) {
    this.$view.setFloat32(ByteOffset.m5, v, true);
  }

  public get m9() {
    return this.$view.getFloat32(ByteOffset.m9, true);
  }

  public set m9(v: number) {
    this.$view.setFloat32(ByteOffset.m9, v, true);
  }

  public get m13() {
    return this.$view.getFloat32(ByteOffset.m13, true);
  }

  public set m13(v: number) {
    this.$view.setFloat32(ByteOffset.m13, v, true);
  }

  // Row 3
  public get m2() {
    return this.$view.getFloat32(ByteOffset.m2, true);
  }

  public set m2(v: number) {
    this.$view.setFloat32(ByteOffset.m2, v, true);
  }

  public get m6() {
    return this.$view.getFloat32(ByteOffset.m6, true);
  }

  public set m6(v: number) {
    this.$view.setFloat32(ByteOffset.m6, v, true);
  }

  public get m10() {
    return this.$view.getFloat32(ByteOffset.m10, true);
  }

  public set m10(v: number) {
    this.$view.setFloat32(ByteOffset.m10, v, true);
  }

  public get m14() {
    return this.$view.getFloat32(ByteOffset.m14, true);
  }

  public set m14(v: number) {
    this.$view.setFloat32(ByteOffset.m14, v, true);
  }

  // Row 4
  public get m3() {
    return this.$view.getFloat32(ByteOffset.m3, true);
  }

  public set m3(v: number) {
    this.$view.setFloat32(ByteOffset.m3, v, true);
  }

  public get m7() {
    return this.$view.getFloat32(ByteOffset.m7, true);
  }

  public set m7(v: number) {
    this.$view.setFloat32(ByteOffset.m7, v, true);
  }

  public get m11() {
    return this.$view.getFloat32(ByteOffset.m11, true);
  }

  public set m11(v: number) {
    this.$view.setFloat32(ByteOffset.m11, v, true);
  }

  public get m15() {
    return this.$view.getFloat32(ByteOffset.m15, true);
  }

  public set m15(v: number) {
    this.$view.setFloat32(ByteOffset.m15, v, true);
  }

  public row(row: number) {
    return [
      this.$view.getFloat32(row * 4, true),
      this.$view.getFloat32(row * 4 + 4, true),
      this.$view.getFloat32(row * 4 + 8, true),
      this.$view.getFloat32(row * 4 + 12, true),
    ];
  }

  public col(col: number) {
    return [
      this.$view.getFloat32(col * 4, true),
      this.$view.getFloat32(col * 4 + 16, true),
      this.$view.getFloat32(col * 4 + 32, true),
      this.$view.getFloat32(col * 4 + 48, true),
    ];
  }
}
