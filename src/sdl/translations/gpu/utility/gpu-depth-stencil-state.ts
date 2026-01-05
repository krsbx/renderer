import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUCompareOp } from '../../../ffi/gpu/constant';
import { GPUStencilOpState } from './gpu-stencil-op-state';
import type { RawGPUDepthStencilState } from './types';

export class GPUDepthStencilState implements RawGPUDepthStencilState {
  public static readonly BYTE_SIZE = 36;

  public compare_op: GPUCompareOp;
  public back_stencil_state: GPUStencilOpState;
  public front_stencil_state: GPUStencilOpState;
  public compare_mask: number;
  public write_mask: number;
  public enable_depth_test: boolean;
  public enable_depth_write: boolean;
  public enable_stencil_test: boolean;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  constructor(options: RawGPUDepthStencilState) {
    this.compare_op = options.compare_op;
    this.back_stencil_state = options.back_stencil_state;
    this.front_stencil_state = options.front_stencil_state;
    this.compare_mask = options.compare_mask;
    this.write_mask = options.write_mask;
    this.enable_depth_test = options.enable_depth_test;
    this.enable_depth_write = options.enable_depth_write;
    this.enable_stencil_test = options.enable_stencil_test;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(GPUDepthStencilState.BYTE_SIZE);
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.compare_op, true);

    buffer.set(this.back_stencil_state.toMemory(), 4);
    buffer.set(this.front_stencil_state.toMemory(), 16);

    view.setUint8(28, this.compare_mask);
    view.setUint8(29, this.write_mask);
    view.setUint8(30, this.enable_depth_test ? 1 : 0);
    view.setUint8(31, this.enable_depth_write ? 1 : 0);
    view.setUint8(32, this.enable_stencil_test ? 1 : 0);
    view.setUint8(33, this.padding1);
    view.setUint8(34, this.padding2);
    view.setUint8(35, this.padding3);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      compare_op: read.i32(pointer, 0),
      back_stencil_state: GPUStencilOpState.fromPointer(
        (BigInt(pointer) + 4n) as unknown as Pointer,
        sdl
      ),
      front_stencil_state: GPUStencilOpState.fromPointer(
        (BigInt(pointer) + 16n) as unknown as Pointer,
        sdl
      ),
      compare_mask: read.u8(pointer, 28),
      write_mask: read.u8(pointer, 29),
      enable_depth_test: read.u8(pointer, 30) === 1,
      enable_depth_write: read.u8(pointer, 31) === 1,
      enable_stencil_test: read.u8(pointer, 32) === 1,
      padding1: read.u8(pointer, 33),
      padding2: read.u8(pointer, 34),
      padding3: read.u8(pointer, 35),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUDepthStencilState;

    return new GPUDepthStencilState(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      compare_op: view.getInt32(0, true),
      back_stencil_state: GPUStencilOpState.fromMemory(data.slice(4, 16)),
      front_stencil_state: GPUStencilOpState.fromMemory(data.slice(16, 28)),
      compare_mask: view.getUint8(28),
      write_mask: view.getUint8(29),
      enable_depth_test: view.getUint8(30) === 1,
      enable_depth_write: view.getUint8(31) === 1,
      enable_stencil_test: view.getUint8(32) === 1,
      padding1: view.getUint8(33),
      padding2: view.getUint8(34),
      padding3: view.getUint8(35),
      free: null,
      address: null,
    } as RawGPUDepthStencilState;

    return new GPUDepthStencilState(result);
  }
}
