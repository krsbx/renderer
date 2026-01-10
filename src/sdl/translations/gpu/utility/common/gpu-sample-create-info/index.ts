import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUCompareOp } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUSamplerCreateInfo {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUSamplerCreateInfo.BYTE_SIZE);
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

  public get min_filter() {
    return this.$view.getInt32(ByteOffset.min_filter, true);
  }

  public set min_filter(value: number) {
    this.$view.setInt32(ByteOffset.min_filter, value, true);
  }

  public get mag_filter() {
    return this.$view.getInt32(ByteOffset.mag_filter, true);
  }

  public set mag_filter(value: number) {
    this.$view.setInt32(ByteOffset.mag_filter, value, true);
  }

  public get mipmap_mode() {
    return this.$view.getInt32(ByteOffset.mipmap_mode, true);
  }

  public set mipmap_mode(value: number) {
    this.$view.setInt32(ByteOffset.mipmap_mode, value, true);
  }

  public get address_mode_u() {
    return this.$view.getInt32(ByteOffset.address_mode_u, true);
  }

  public set address_mode_u(value: number) {
    this.$view.setInt32(ByteOffset.address_mode_u, value, true);
  }

  public get address_mode_v() {
    return this.$view.getInt32(ByteOffset.address_mode_v, true);
  }

  public set address_mode_v(value: number) {
    this.$view.setInt32(ByteOffset.address_mode_v, value, true);
  }

  public get address_mode_w() {
    return this.$view.getInt32(ByteOffset.address_mode_w, true);
  }

  public set address_mode_w(value: number) {
    this.$view.setInt32(ByteOffset.address_mode_w, value, true);
  }

  public get mip_lod_bias() {
    return this.$view.getFloat32(ByteOffset.mip_lod_bias, true);
  }

  public set mip_lod_bias(value: number) {
    this.$view.setFloat32(ByteOffset.mip_lod_bias, value, true);
  }

  public get max_anisotropy() {
    return this.$view.getFloat32(ByteOffset.max_anisotropy, true);
  }

  public set max_anisotropy(value: number) {
    this.$view.setFloat32(ByteOffset.max_anisotropy, value, true);
  }

  public get compare_op() {
    return this.$view.getInt32(ByteOffset.compare_op, true) as GPUCompareOp;
  }

  public set compare_op(value: GPUCompareOp) {
    this.$view.setInt32(ByteOffset.compare_op, value, true);
  }

  public get min_lod() {
    return this.$view.getFloat32(ByteOffset.min_lod, true);
  }

  public set min_lod(value: number) {
    this.$view.setFloat32(ByteOffset.min_lod, value, true);
  }

  public get max_lod() {
    return this.$view.getFloat32(ByteOffset.max_lod, true);
  }

  public set max_lod(value: number) {
    this.$view.setFloat32(ByteOffset.max_lod, value, true);
  }

  public get enable_anisotropy() {
    return this.$view.getUint8(ByteOffset.enable_anisotropy) === 1;
  }

  public set enable_anisotropy(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_anisotropy, value ? 1 : 0);
  }

  public get enable_compare() {
    return this.$view.getUint8(ByteOffset.enable_compare) === 1;
  }

  public set enable_compare(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_compare, value ? 1 : 0);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
