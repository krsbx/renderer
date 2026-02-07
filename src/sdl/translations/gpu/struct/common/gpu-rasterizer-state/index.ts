import { BaseStruct } from '@basestruct';
import type { Float } from '@/types/primitive';
import type {
  GPUCullMode,
  GPUFillMode,
  GPUFrontFace,
} from '@sdl/ffi/constant/gpu';
import { ByteOffset } from './constant';

export class GPURasterizerState extends BaseStruct {
  public static override readonly BYTE_SIZE = 28;

  public get fillMode() {
    return this.$view.getInt32(ByteOffset.fill_mode, true) as GPUFillMode;
  }

  public set fillMode(value: GPUFillMode) {
    this.$view.setInt32(ByteOffset.fill_mode, value, true);
  }

  public get cullMode() {
    return this.$view.getInt32(ByteOffset.cull_mode, true) as GPUCullMode;
  }

  public set cullMode(value: GPUCullMode) {
    this.$view.setInt32(ByteOffset.cull_mode, value, true);
  }

  public get frontFace() {
    return this.$view.getInt32(ByteOffset.front_face, true) as GPUFrontFace;
  }

  public set frontFace(value: GPUFrontFace) {
    this.$view.setInt32(ByteOffset.front_face, value, true);
  }

  public get depthBiasConstantFactor() {
    return this.$view.getFloat32(
      ByteOffset.depth_bias_constant_factor,
      true
    ) as Float;
  }

  public set depthBiasConstantFactor(value: Float) {
    this.$view.setFloat32(ByteOffset.depth_bias_constant_factor, value, true);
  }

  public get depthBiasClamp() {
    return this.$view.getFloat32(ByteOffset.depth_bias_clamp, true) as Float;
  }

  public set depthBiasClamp(value: Float) {
    this.$view.setFloat32(ByteOffset.depth_bias_clamp, value, true);
  }

  public get depthBiasSlopeFactor() {
    return this.$view.getFloat32(
      ByteOffset.depth_bias_slope_factor,
      true
    ) as Float;
  }

  public set depthBiasSlopeFactor(value: Float) {
    this.$view.setFloat32(ByteOffset.depth_bias_slope_factor, value, true);
  }

  public get enableDepthBias() {
    return this.$view.getUint8(ByteOffset.enable_depth_bias) === 1;
  }

  public set enableDepthBias(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_bias, value ? 1 : 0);
  }

  public get enableDepthClip() {
    return this.$view.getUint8(ByteOffset.enable_depth_clip) === 1;
  }

  public set enableDepthClip(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_clip, value ? 1 : 0);
  }
}
