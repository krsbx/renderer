import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPULoadOp, GPUStoreOp } from '../../../ffi/gpu/constant';
import type { RawGPUDepthStencilTargetInfo } from './types';

export class GPUDepthStencilTargetInfo implements RawGPUDepthStencilTargetInfo {
  public static readonly BYTE_SIZE = 32;

  public texture: Pointer;
  public clear_depth: number;
  public load_op: GPULoadOp;
  public store_op: GPUStoreOp;
  public stencil_load_op: GPULoadOp;
  public stencil_store_op: GPUStoreOp;
  public cycle: boolean;
  public clear_stencil: number;
  public mip_level: number;
  public layer: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUDepthStencilTargetInfo) {
    this.texture = options.texture;
    this.clear_depth = options.clear_depth;
    this.load_op = options.load_op;
    this.store_op = options.store_op;
    this.stencil_load_op = options.stencil_load_op;
    this.stencil_store_op = options.stencil_store_op;
    this.cycle = options.cycle;
    this.clear_stencil = options.clear_stencil;
    this.mip_level = options.mip_level;
    this.layer = options.layer;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUDepthStencilTargetInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.texture), true);
    view.setFloat32(8, this.clear_depth, true);
    view.setInt32(12, this.load_op, true);
    view.setInt32(16, this.store_op, true);
    view.setInt32(20, this.stencil_load_op, true);
    view.setInt32(24, this.stencil_store_op, true);
    view.setUint8(28, this.cycle ? 1 : 0);
    view.setUint8(29, this.clear_stencil);
    view.setUint8(30, this.mip_level);
    view.setUint8(31, this.layer);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      texture: read.ptr(pointer, 0),
      clear_depth: read.f32(pointer, 8),
      load_op: read.i32(pointer, 12),
      store_op: read.i32(pointer, 16),
      stencil_load_op: read.i32(pointer, 20),
      stencil_store_op: read.i32(pointer, 24),
      cycle: read.u8(pointer, 28) === 1,
      clear_stencil: read.u8(pointer, 29),
      mip_level: read.u8(pointer, 30),
      layer: read.u8(pointer, 31),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUDepthStencilTargetInfo;

    return new GPUDepthStencilTargetInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      texture: view.getBigUint64(0, true) as unknown as Pointer,
      clear_depth: view.getFloat32(8, true),
      load_op: view.getInt32(12, true) as GPULoadOp,
      store_op: view.getInt32(16, true) as GPUStoreOp,
      stencil_load_op: view.getInt32(20, true) as GPULoadOp,
      stencil_store_op: view.getInt32(24, true) as GPUStoreOp,
      cycle: view.getUint8(28) === 1,
      clear_stencil: view.getUint8(29),
      mip_level: view.getUint8(30),
      layer: view.getUint8(31),
      free: null,
      address: null,
    } as RawGPUDepthStencilTargetInfo;

    return new GPUDepthStencilTargetInfo(result);
  }
}
