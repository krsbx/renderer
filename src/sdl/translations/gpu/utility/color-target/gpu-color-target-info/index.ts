import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPULoadOp, GPUStoreOp } from '../../../../../ffi/gpu/constant';
import { FColor } from '../../../../pixels/utility/fcolor';
import { ByteOffset } from './constant';

export class GPUColorTargetInfo {
  public static readonly BYTE_SIZE = 64;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly clear_color: FColor;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUColorTargetInfo.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.clear_color = new FColor(
      this.$memory.subarray(
        ByteOffset.clear_color,
        ByteOffset.clear_color + FColor.BYTE_SIZE
      )
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

  public get mip_level() {
    return this.$view.getUint32(ByteOffset.mip_level, true);
  }

  public set mip_level(value: number) {
    this.$view.setUint32(ByteOffset.mip_level, value, true);
  }

  public get layer_or_depth_plane() {
    return this.$view.getUint32(ByteOffset.layer_or_depth_plane, true);
  }

  public set layer_or_depth_plane(value: number) {
    this.$view.setUint32(ByteOffset.layer_or_depth_plane, value, true);
  }

  public get load_op() {
    return this.$view.getInt32(ByteOffset.load_op, true) as GPULoadOp;
  }

  public set load_op(value: GPULoadOp) {
    this.$view.setInt32(ByteOffset.load_op, value, true);
  }

  public get store_op() {
    return this.$view.getInt32(ByteOffset.store_op, true) as GPUStoreOp;
  }

  public set store_op(value: GPUStoreOp) {
    this.$view.setInt32(ByteOffset.store_op, value, true);
  }

  public get resolve_texture() {
    const addr = this.$view.getBigUint64(ByteOffset.resolve_texture, true);

    return Number(addr) as Pointer;
  }

  public set resolve_texture(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.resolve_texture, BigInt(value), true);
  }

  public get resolve_mip_level() {
    return this.$view.getUint32(ByteOffset.resolve_mip_level, true);
  }

  public set resolve_mip_level(value: number) {
    this.$view.setUint32(ByteOffset.resolve_mip_level, value, true);
  }

  public get resolve_layer() {
    return this.$view.getUint32(ByteOffset.resolve_layer, true);
  }

  public set resolve_layer(value: number) {
    this.$view.setUint32(ByteOffset.resolve_layer, value, true);
  }

  public get cycle() {
    return this.$view.getUint8(ByteOffset.cycle) === 1;
  }

  public set cycle(value: boolean) {
    this.$view.setUint8(ByteOffset.cycle, value ? 1 : 0);
  }

  public get cycle_resolve_texture() {
    return this.$view.getUint8(ByteOffset.cycle_resolve_texture) === 1;
  }

  public set cycle_resolve_texture(value: boolean) {
    this.$view.setUint8(ByteOffset.cycle_resolve_texture, value ? 1 : 0);
  }
}
