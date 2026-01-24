import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUTextureRegion {
  public static readonly BYTE_SIZE = 40;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GPUTextureRegion.BYTE_SIZE);
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

  public get texture() {
    const addr = this.$view.getBigUint64(ByteOffset.texture, true);

    return Number(addr) as Pointer;
  }

  public set texture(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.texture, BigInt(value), true);
  }

  public get mipLevel() {
    return this.$view.getUint32(ByteOffset.mip_level, true);
  }

  public set mipLevel(value: number) {
    this.$view.setUint32(ByteOffset.mip_level, value, true);
  }

  public get layer() {
    return this.$view.getUint32(ByteOffset.layer, true);
  }

  public set layer(value: number) {
    this.$view.setUint32(ByteOffset.layer, value, true);
  }

  public get x() {
    return this.$view.getUint32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setUint32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getUint32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setUint32(ByteOffset.y, value, true);
  }

  public get z() {
    return this.$view.getUint32(ByteOffset.z, true);
  }

  public set z(value: number) {
    this.$view.setUint32(ByteOffset.z, value, true);
  }

  public get w() {
    return this.$view.getUint32(ByteOffset.w, true);
  }

  public set w(value: number) {
    this.$view.setUint32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getUint32(ByteOffset.h, true);
  }

  public set h(value: number) {
    this.$view.setUint32(ByteOffset.h, value, true);
  }

  public get d() {
    return this.$view.getUint32(ByteOffset.d, true);
  }

  public set d(value: number) {
    this.$view.setUint32(ByteOffset.d, value, true);
  }
}
