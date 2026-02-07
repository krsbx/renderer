import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUTexture } from '@/sdl/types/definition';
import { ByteOffset } from './constant';

export class GPUTextureRegion extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public get texture() {
    const addr = this.$view.getBigUint64(ByteOffset.texture, true);

    return Number(addr) as GPUTexture;
  }

  public set texture(value: GPUTexture) {
    this.$view.setBigUint64(ByteOffset.texture, BigInt(value), true);
  }

  public get mipLevel() {
    return this.$view.getUint32(ByteOffset.mip_level, true) as UInt32;
  }

  public set mipLevel(value: UInt32) {
    this.$view.setUint32(ByteOffset.mip_level, value, true);
  }

  public get layer() {
    return this.$view.getUint32(ByteOffset.layer, true) as UInt32;
  }

  public set layer(value: UInt32) {
    this.$view.setUint32(ByteOffset.layer, value, true);
  }

  public get x() {
    return this.$view.getUint32(ByteOffset.x, true) as UInt32;
  }

  public set x(value: UInt32) {
    this.$view.setUint32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getUint32(ByteOffset.y, true) as UInt32;
  }

  public set y(value: UInt32) {
    this.$view.setUint32(ByteOffset.y, value, true);
  }

  public get z() {
    return this.$view.getUint32(ByteOffset.z, true) as UInt32;
  }

  public set z(value: UInt32) {
    this.$view.setUint32(ByteOffset.z, value, true);
  }

  public get w() {
    return this.$view.getUint32(ByteOffset.w, true) as UInt32;
  }

  public set w(value: UInt32) {
    this.$view.setUint32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getUint32(ByteOffset.h, true) as UInt32;
  }

  public set h(value: UInt32) {
    this.$view.setUint32(ByteOffset.h, value, true);
  }

  public get d() {
    return this.$view.getUint32(ByteOffset.d, true) as UInt32;
  }

  public set d(value: UInt32) {
    this.$view.setUint32(ByteOffset.d, value, true);
  }
}
