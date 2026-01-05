import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  GPUCullMode,
  GPUFillMode,
  GPUFrontFace,
} from '../../../ffi/gpu/constant';
import type { RawGPURasterizerState } from './types';

export class GPURasterizerState implements RawGPURasterizerState {
  public static readonly BYTE_SIZE = 28;

  public fill_mode: GPUFillMode;
  public cull_mode: GPUCullMode;
  public front_face: GPUFrontFace;
  public depth_bias_constant_factor: number;
  public depth_bias_clamp: number;
  public depth_bias_slope_factor: number;
  public enable_depth_bias: boolean;
  public enable_depth_clip: boolean;
  public padding1: number;
  public padding2: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPURasterizerState) {
    this.fill_mode = options.fill_mode;
    this.cull_mode = options.cull_mode;
    this.front_face = options.front_face;
    this.depth_bias_constant_factor = options.depth_bias_constant_factor;
    this.depth_bias_clamp = options.depth_bias_clamp;
    this.depth_bias_slope_factor = options.depth_bias_slope_factor;
    this.enable_depth_bias = options.enable_depth_bias;
    this.enable_depth_clip = options.enable_depth_clip;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPURasterizerState.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.fill_mode, true);
    view.setInt32(4, this.cull_mode, true);
    view.setInt32(8, this.front_face, true);
    view.setFloat32(12, this.depth_bias_constant_factor, true);
    view.setFloat32(16, this.depth_bias_clamp, true);
    view.setFloat32(20, this.depth_bias_slope_factor, true);
    view.setUint8(24, this.enable_depth_bias ? 1 : 0);
    view.setUint8(25, this.enable_depth_clip ? 1 : 0);
    view.setUint8(26, this.padding1);
    view.setUint8(27, this.padding2);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      fill_mode: read.i32(pointer, 0),
      cull_mode: read.i32(pointer, 4),
      front_face: read.i32(pointer, 8),
      depth_bias_constant_factor: read.f32(pointer, 12),
      depth_bias_clamp: read.f32(pointer, 16),
      depth_bias_slope_factor: read.f32(pointer, 20),
      enable_depth_bias: read.u8(pointer, 24) === 1,
      enable_depth_clip: read.u8(pointer, 25) === 1,
      padding1: read.u8(pointer, 26),
      padding2: read.u8(pointer, 27),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPURasterizerState;

    return new GPURasterizerState(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      fill_mode: view.getInt32(0, true),
      cull_mode: view.getInt32(4, true),
      front_face: view.getInt32(8, true),
      depth_bias_constant_factor: view.getFloat32(12, true),
      depth_bias_clamp: view.getFloat32(16, true),
      depth_bias_slope_factor: view.getFloat32(20, true),
      enable_depth_bias: view.getUint8(24) === 1,
      enable_depth_clip: view.getUint8(25) === 1,
      padding1: view.getUint8(26),
      padding2: view.getUint8(27),
      free: null,
      address: null,
    } as RawGPURasterizerState;

    return new GPURasterizerState(result);
  }
}
