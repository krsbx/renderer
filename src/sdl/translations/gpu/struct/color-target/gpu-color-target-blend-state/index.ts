import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class GPUColorTargetBlendState extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

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
