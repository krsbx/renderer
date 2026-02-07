import { BaseStruct } from '@basestruct';
import type { PropertiesID } from '@/sdl/types/definition';
import type { Float, Int32 } from '@/types/primitive';
import type { GPUCompareOp } from '@sdl/ffi/constant/gpu';
import { ByteOffset } from './constant';

export class GPUSamplerCreateInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 56;

  public get minFilter() {
    return this.$view.getInt32(ByteOffset.min_filter, true) as Int32;
  }

  public set minFilter(value: Int32) {
    this.$view.setInt32(ByteOffset.min_filter, value, true);
  }

  public get magFilter() {
    return this.$view.getInt32(ByteOffset.mag_filter, true) as Int32;
  }

  public set magFilter(value: Int32) {
    this.$view.setInt32(ByteOffset.mag_filter, value, true);
  }

  public get mipmapMode() {
    return this.$view.getInt32(ByteOffset.mipmap_mode, true) as Int32;
  }

  public set mipmapMode(value: Int32) {
    this.$view.setInt32(ByteOffset.mipmap_mode, value, true);
  }

  public get addressModeU() {
    return this.$view.getInt32(ByteOffset.address_mode_u, true) as Int32;
  }

  public set addressModeU(value: Int32) {
    this.$view.setInt32(ByteOffset.address_mode_u, value, true);
  }

  public get addressModeV() {
    return this.$view.getInt32(ByteOffset.address_mode_v, true) as Int32;
  }

  public set addressModeV(value: Int32) {
    this.$view.setInt32(ByteOffset.address_mode_v, value, true);
  }

  public get addressModeW() {
    return this.$view.getInt32(ByteOffset.address_mode_w, true) as Int32;
  }

  public set addressModeW(value: Int32) {
    this.$view.setInt32(ByteOffset.address_mode_w, value, true);
  }

  public get mipLodBias() {
    return this.$view.getFloat32(ByteOffset.mip_lod_bias, true) as Float;
  }

  public set mipLodBias(value: Float) {
    this.$view.setFloat32(ByteOffset.mip_lod_bias, value, true);
  }

  public get maxAnisotropy() {
    return this.$view.getFloat32(ByteOffset.max_anisotropy, true) as Float;
  }

  public set maxAnisotropy(value: Float) {
    this.$view.setFloat32(ByteOffset.max_anisotropy, value, true);
  }

  public get compareOp() {
    return this.$view.getInt32(ByteOffset.compare_op, true) as GPUCompareOp;
  }

  public set compareOp(value: GPUCompareOp) {
    this.$view.setInt32(ByteOffset.compare_op, value, true);
  }

  public get minLod() {
    return this.$view.getFloat32(ByteOffset.min_lod, true) as Float;
  }

  public set minLod(value: Float) {
    this.$view.setFloat32(ByteOffset.min_lod, value, true);
  }

  public get maxLod() {
    return this.$view.getFloat32(ByteOffset.max_lod, true) as Float;
  }

  public set maxLod(value: Float) {
    this.$view.setFloat32(ByteOffset.max_lod, value, true);
  }

  public get enableAnisotropy() {
    return this.$view.getUint8(ByteOffset.enable_anisotropy) === 1;
  }

  public set enableAnisotropy(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_anisotropy, value ? 1 : 0);
  }

  public get enableCompare() {
    return this.$view.getUint8(ByteOffset.enable_compare) === 1;
  }

  public set enableCompare(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_compare, value ? 1 : 0);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true) as PropertiesID;
  }

  public set props(value: PropertiesID) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
