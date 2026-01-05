import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUBlendFactor, GPUBlendOp } from '../../../ffi/gpu/constant';
import type { RawGPUColorTargetBlendState } from './types';

export class GPUColorTargetBlendState implements RawGPUColorTargetBlendState {
  public static readonly BYTE_SIZE = 32;

  public src_color_blendfactor: GPUBlendFactor;
  public dst_color_blendfactor: GPUBlendFactor;
  public color_blend_op: GPUBlendOp;
  public src_alpha_blendfactor: GPUBlendFactor;
  public dst_alpha_blendfactor: GPUBlendFactor;
  public alpha_blend_op: GPUBlendOp;
  public color_write_mask: number;
  public enable_blend: boolean;
  public enable_color_write_mask: boolean;
  public padding1: number;
  public padding2: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUColorTargetBlendState) {
    this.src_color_blendfactor = options.src_color_blendfactor;
    this.dst_color_blendfactor = options.dst_color_blendfactor;
    this.color_blend_op = options.color_blend_op;
    this.src_alpha_blendfactor = options.src_alpha_blendfactor;
    this.dst_alpha_blendfactor = options.dst_alpha_blendfactor;
    this.alpha_blend_op = options.alpha_blend_op;
    this.color_write_mask = options.color_write_mask;
    this.enable_blend = options.enable_blend;
    this.enable_color_write_mask = options.enable_color_write_mask;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUColorTargetBlendState.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.src_color_blendfactor, true);
    view.setInt32(4, this.dst_color_blendfactor, true);
    view.setInt32(8, this.color_blend_op, true);
    view.setInt32(12, this.src_alpha_blendfactor, true);
    view.setInt32(16, this.dst_alpha_blendfactor, true);
    view.setInt32(20, this.alpha_blend_op, true);
    view.setInt32(24, this.color_write_mask, true);
    view.setUint8(28, this.enable_blend ? 1 : 0);
    view.setUint8(29, this.enable_color_write_mask ? 1 : 0);
    view.setUint8(30, this.padding1);
    view.setUint8(31, this.padding2);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      src_color_blendfactor: read.i32(pointer, 0),
      dst_color_blendfactor: read.i32(pointer, 4),
      color_blend_op: read.i32(pointer, 8),
      src_alpha_blendfactor: read.i32(pointer, 12),
      dst_alpha_blendfactor: read.i32(pointer, 16),
      alpha_blend_op: read.i32(pointer, 20),
      color_write_mask: read.i32(pointer, 24),
      enable_blend: read.u8(pointer, 28) === 1,
      enable_color_write_mask: read.u8(pointer, 29) === 1,
      padding1: read.u8(pointer, 30),
      padding2: read.u8(pointer, 31),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUColorTargetBlendState;

    return new GPUColorTargetBlendState(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      src_color_blendfactor: view.getInt32(0, true),
      dst_color_blendfactor: view.getInt32(4, true),
      color_blend_op: view.getInt32(8, true),
      src_alpha_blendfactor: view.getInt32(12, true),
      dst_alpha_blendfactor: view.getInt32(16, true),
      alpha_blend_op: view.getInt32(20, true),
      color_write_mask: view.getInt32(24, true),
      enable_blend: view.getUint8(28) === 1,
      enable_color_write_mask: view.getUint8(29) === 1,
      padding1: view.getUint8(30),
      padding2: view.getUint8(31),
      free: null,
      address: null,
    } as RawGPUColorTargetBlendState;

    return new GPUColorTargetBlendState(result);
  }
}
