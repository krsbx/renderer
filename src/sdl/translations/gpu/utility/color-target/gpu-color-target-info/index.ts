import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import type { Pointer } from 'bun:ffi';
import type { GPULoadOp, GPUStoreOp } from '../../../../../ffi/gpu/constant';
import { FColor } from '../../../../pixels/utility';
import { ByteOffset } from './constant';

export class GPUColorTargetInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 64;

  public readonly clearColor: FColor;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.clearColor = new FColor(
      this.$memory.subarray(
        ByteOffset.clear_color,
        ByteOffset.clear_color + FColor.BYTE_SIZE
      )
    );
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

  public get resolveTexture() {
    const addr = this.$view.getBigUint64(ByteOffset.resolve_texture, true);

    return Number(addr) as Pointer;
  }

  public set resolveTexture(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.resolve_texture, BigInt(value), true);
  }

  public get resolveMipLevel() {
    return this.$view.getUint32(ByteOffset.resolve_mip_level, true);
  }

  public set resolveMipLevel(value: number) {
    this.$view.setUint32(ByteOffset.resolve_mip_level, value, true);
  }

  public get resolveLayer() {
    return this.$view.getUint32(ByteOffset.resolve_layer, true);
  }

  public set resolveLayer(value: number) {
    this.$view.setUint32(ByteOffset.resolve_layer, value, true);
  }

  public get cycle() {
    return this.$view.getUint8(ByteOffset.cycle) === 1;
  }

  public set cycle(value: boolean) {
    this.$view.setUint8(ByteOffset.cycle, value ? 1 : 0);
  }

  public get cycleResolveTexture() {
    return this.$view.getUint8(ByteOffset.cycle_resolve_texture) === 1;
  }

  public set cycleResolveTexture(value: boolean) {
    this.$view.setUint8(ByteOffset.cycle_resolve_texture, value ? 1 : 0);
  }
}
