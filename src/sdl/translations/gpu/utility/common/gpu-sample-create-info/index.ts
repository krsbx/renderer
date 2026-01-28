import { BaseStruct } from '@/utility/base-struct';
import type { GPUCompareOp } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUSamplerCreateInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 56;

  public get minFilter() {
    return this.$view.getInt32(ByteOffset.min_filter, true);
  }

  public set minFilter(value: number) {
    this.$view.setInt32(ByteOffset.min_filter, value, true);
  }

  public get magFilter() {
    return this.$view.getInt32(ByteOffset.mag_filter, true);
  }

  public set magFilter(value: number) {
    this.$view.setInt32(ByteOffset.mag_filter, value, true);
  }

  public get mipmapMode() {
    return this.$view.getInt32(ByteOffset.mipmap_mode, true);
  }

  public set mipmapMode(value: number) {
    this.$view.setInt32(ByteOffset.mipmap_mode, value, true);
  }

  public get addressModeU() {
    return this.$view.getInt32(ByteOffset.address_mode_u, true);
  }

  public set addressModeU(value: number) {
    this.$view.setInt32(ByteOffset.address_mode_u, value, true);
  }

  public get addressModeV() {
    return this.$view.getInt32(ByteOffset.address_mode_v, true);
  }

  public set addressModeV(value: number) {
    this.$view.setInt32(ByteOffset.address_mode_v, value, true);
  }

  public get addressModeW() {
    return this.$view.getInt32(ByteOffset.address_mode_w, true);
  }

  public set addressModeW(value: number) {
    this.$view.setInt32(ByteOffset.address_mode_w, value, true);
  }

  public get mipLodBias() {
    return this.$view.getFloat32(ByteOffset.mip_lod_bias, true);
  }

  public set mipLodBias(value: number) {
    this.$view.setFloat32(ByteOffset.mip_lod_bias, value, true);
  }

  public get maxAnisotropy() {
    return this.$view.getFloat32(ByteOffset.max_anisotropy, true);
  }

  public set maxAnisotropy(value: number) {
    this.$view.setFloat32(ByteOffset.max_anisotropy, value, true);
  }

  public get compareOp() {
    return this.$view.getInt32(ByteOffset.compare_op, true) as GPUCompareOp;
  }

  public set compareOp(value: GPUCompareOp) {
    this.$view.setInt32(ByteOffset.compare_op, value, true);
  }

  public get minLod() {
    return this.$view.getFloat32(ByteOffset.min_lod, true);
  }

  public set minLod(value: number) {
    this.$view.setFloat32(ByteOffset.min_lod, value, true);
  }

  public get maxLod() {
    return this.$view.getFloat32(ByteOffset.max_lod, true);
  }

  public set maxLod(value: number) {
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
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
