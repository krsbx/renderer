import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUBlitRegion {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUBlitRegion.BYTE_SIZE);
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

  public get layerOrDepthPlane() {
    return this.$view.getUint32(ByteOffset.layer_or_depth_plane, true);
  }

  public set layerOrDepthPlane(value: number) {
    this.$view.setUint32(ByteOffset.layer_or_depth_plane, value, true);
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
}
