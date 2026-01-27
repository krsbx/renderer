import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUColorTargetBlendState {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GPUColorTargetBlendState.BYTE_SIZE);
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

  public static create(data?: StructInit<GPUColorTargetBlendState>) {
    const instance = new GPUColorTargetBlendState(
      GPUColorTargetBlendState.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get srcColorBlendFactor() {
    return this.$view.getInt32(ByteOffset.src_color_blendfactor, true);
  }

  public set srcColorBlendFactor(value: number) {
    this.$view.setInt32(ByteOffset.src_color_blendfactor, value, true);
  }

  public get dstColorBlendFactor() {
    return this.$view.getInt32(ByteOffset.dst_color_blendfactor, true);
  }

  public set dstColorBlendFactor(value: number) {
    this.$view.setInt32(ByteOffset.dst_color_blendfactor, value, true);
  }

  public get colorBlendOp() {
    return this.$view.getInt32(ByteOffset.color_blend_op, true);
  }

  public set colorBlendOp(value: number) {
    this.$view.setInt32(ByteOffset.color_blend_op, value, true);
  }

  public get srcAlphaBlendFactor() {
    return this.$view.getInt32(ByteOffset.src_alpha_blendfactor, true);
  }

  public set srcAlphaBlendFactor(value: number) {
    this.$view.setInt32(ByteOffset.src_alpha_blendfactor, value, true);
  }

  public get dstAlphaBlendFactor() {
    return this.$view.getInt32(ByteOffset.dst_alpha_blendfactor, true);
  }

  public set dstAlphaBlendFactor(value: number) {
    this.$view.setInt32(ByteOffset.dst_alpha_blendfactor, value, true);
  }

  public get alphaBlendOp() {
    return this.$view.getInt32(ByteOffset.alpha_blend_op, true);
  }

  public set alphaBlendOp(value: number) {
    this.$view.setInt32(ByteOffset.alpha_blend_op, value, true);
  }

  public get colorWriteMask() {
    return this.$view.getInt32(ByteOffset.color_write_mask, true);
  }

  public set colorWriteMask(value: number) {
    this.$view.setInt32(ByteOffset.color_write_mask, value, true);
  }

  public get enableBlend() {
    return this.$view.getUint8(ByteOffset.enable_blend) === 1;
  }

  public set enableBlend(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_blend, value ? 1 : 0);
  }

  public get enableColorWriteMask() {
    return this.$view.getUint8(ByteOffset.enable_color_write_mask) === 1;
  }

  public set enableColorWriteMask(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_color_write_mask, value ? 1 : 0);
  }
}
