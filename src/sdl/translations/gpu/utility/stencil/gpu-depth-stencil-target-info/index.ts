import { BaseStruct } from '@/utility/base-struct';
import type { Pointer } from 'bun:ffi';
import type { GPULoadOp, GPUStoreOp } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUDepthStencilTargetInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get texture() {
    const addr = this.$view.getBigUint64(ByteOffset.texture, true);

    return Number(addr) as Pointer;
  }

  public set texture(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.texture, BigInt(value), true);
  }

  public get clearDepth() {
    return this.$view.getFloat32(ByteOffset.clear_depth, true);
  }

  public set clearDepth(value: number) {
    this.$view.setFloat32(ByteOffset.clear_depth, value, true);
  }

  public get loadOp() {
    return this.$view.getInt32(ByteOffset.load_op, true) as GPULoadOp;
  }

  public set loadOp(value: GPULoadOp) {
    this.$view.setInt32(ByteOffset.load_op, value, true);
  }

  public get storeOp() {
    return this.$view.getInt32(ByteOffset.store_op, true) as GPUStoreOp;
  }

  public set storeOp(value: GPUStoreOp) {
    this.$view.setInt32(ByteOffset.store_op, value, true);
  }

  public get stencilLoadOp() {
    return this.$view.getInt32(ByteOffset.stencil_load_op, true) as GPULoadOp;
  }

  public set stencilLoadOp(value: GPULoadOp) {
    this.$view.setInt32(ByteOffset.stencil_load_op, value, true);
  }

  public get stencilStoreOp() {
    return this.$view.getInt32(ByteOffset.stencil_store_op, true) as GPUStoreOp;
  }

  public set stencilStoreOp(value: GPUStoreOp) {
    this.$view.setInt32(ByteOffset.stencil_store_op, value, true);
  }

  public get cycle() {
    return this.$view.getUint8(ByteOffset.cycle) === 1;
  }

  public set cycle(value: boolean) {
    this.$view.setUint8(ByteOffset.cycle, value ? 1 : 0);
  }

  public get clearStencil() {
    return this.$view.getUint8(ByteOffset.clear_stencil);
  }

  public set clearStencil(value: number) {
    this.$view.setUint8(ByteOffset.clear_stencil, value);
  }

  public get mipLevel() {
    return this.$view.getUint8(ByteOffset.mip_level);
  }

  public set mipLevel(value: number) {
    this.$view.setUint8(ByteOffset.mip_level, value);
  }

  public get layer() {
    return this.$view.getUint8(ByteOffset.layer);
  }

  public set layer(value: number) {
    this.$view.setUint8(ByteOffset.layer, value);
  }
}
