import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type {
  GPUCullMode,
  GPUFillMode,
  GPUFrontFace,
} from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPURasterizerState {
  public static readonly BYTE_SIZE = 28;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPURasterizerState.BYTE_SIZE);
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

  public get fill_mode() {
    return this.$view.getInt32(ByteOffset.fill_mode, true) as GPUFillMode;
  }

  public set fill_mode(value: GPUFillMode) {
    this.$view.setInt32(ByteOffset.fill_mode, value, true);
  }

  public get cull_mode() {
    return this.$view.getInt32(ByteOffset.cull_mode, true) as GPUCullMode;
  }

  public set cull_mode(value: GPUCullMode) {
    this.$view.setInt32(ByteOffset.cull_mode, value, true);
  }

  public get front_face() {
    return this.$view.getInt32(ByteOffset.front_face, true) as GPUFrontFace;
  }

  public set front_face(value: GPUFrontFace) {
    this.$view.setInt32(ByteOffset.front_face, value, true);
  }

  public get depth_bias_constant_factor() {
    return this.$view.getFloat32(ByteOffset.depth_bias_constant_factor, true);
  }

  public set depth_bias_constant_factor(value: number) {
    this.$view.setFloat32(ByteOffset.depth_bias_constant_factor, value, true);
  }

  public get depth_bias_clamp() {
    return this.$view.getFloat32(ByteOffset.depth_bias_clamp, true);
  }

  public set depth_bias_clamp(value: number) {
    this.$view.setFloat32(ByteOffset.depth_bias_clamp, value, true);
  }

  public get depth_bias_slope_factor() {
    return this.$view.getFloat32(ByteOffset.depth_bias_slope_factor, true);
  }

  public set depth_bias_slope_factor(value: number) {
    this.$view.setFloat32(ByteOffset.depth_bias_slope_factor, value, true);
  }

  public get enable_depth_bias() {
    return this.$view.getUint8(ByteOffset.enable_depth_bias) === 1;
  }

  public set enable_depth_bias(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_bias, value ? 1 : 0);
  }

  public get enable_depth_clip() {
    return this.$view.getUint8(ByteOffset.enable_depth_clip) === 1;
  }

  public set enable_depth_clip(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_clip, value ? 1 : 0);
  }
}
