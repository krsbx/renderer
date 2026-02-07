import type { GPUTexture } from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class GPUBlitRegion extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

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

  public get layerOrDepthPlane() {
    return this.$view.getUint32(
      ByteOffset.layer_or_depth_plane,
      true
    ) as UInt32;
  }

  public set layerOrDepthPlane(value: UInt32) {
    this.$view.setUint32(ByteOffset.layer_or_depth_plane, value, true);
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
}
