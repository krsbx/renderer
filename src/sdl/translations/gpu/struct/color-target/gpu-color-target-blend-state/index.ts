import { BaseStruct } from '@basestruct';
import type { Int32 } from '@/types/primitive';
import { ByteOffset } from './constant';

export class GPUColorTargetBlendState extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get srcColorBlendFactor() {
    return this.$view.getInt32(ByteOffset.src_color_blendfactor, true) as Int32;
  }

  public set srcColorBlendFactor(value: Int32) {
    this.$view.setInt32(ByteOffset.src_color_blendfactor, value, true);
  }

  public get dstColorBlendFactor() {
    return this.$view.getInt32(ByteOffset.dst_color_blendfactor, true) as Int32;
  }

  public set dstColorBlendFactor(value: Int32) {
    this.$view.setInt32(ByteOffset.dst_color_blendfactor, value, true);
  }

  public get colorBlendOp() {
    return this.$view.getInt32(ByteOffset.color_blend_op, true) as Int32;
  }

  public set colorBlendOp(value: Int32) {
    this.$view.setInt32(ByteOffset.color_blend_op, value, true);
  }

  public get srcAlphaBlendFactor() {
    return this.$view.getInt32(ByteOffset.src_alpha_blendfactor, true) as Int32;
  }

  public set srcAlphaBlendFactor(value: Int32) {
    this.$view.setInt32(ByteOffset.src_alpha_blendfactor, value, true);
  }

  public get dstAlphaBlendFactor() {
    return this.$view.getInt32(ByteOffset.dst_alpha_blendfactor, true) as Int32;
  }

  public set dstAlphaBlendFactor(value: Int32) {
    this.$view.setInt32(ByteOffset.dst_alpha_blendfactor, value, true);
  }

  public get alphaBlendOp() {
    return this.$view.getInt32(ByteOffset.alpha_blend_op, true) as Int32;
  }

  public set alphaBlendOp(value: Int32) {
    this.$view.setInt32(ByteOffset.alpha_blend_op, value, true);
  }

  public get colorWriteMask() {
    return this.$view.getInt32(ByteOffset.color_write_mask, true) as Int32;
  }

  public set colorWriteMask(value: Int32) {
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
