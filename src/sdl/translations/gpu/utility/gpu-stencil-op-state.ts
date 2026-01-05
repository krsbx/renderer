import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUStencilOp } from '../../../ffi/gpu/constant';
import type { RawGPUStencilOpState } from './types';

export class GPUStencilOpState implements RawGPUStencilOpState {
  public static readonly BYTE_SIZE = 16;

  public fail_op: GPUStencilOp;
  public pass_op: GPUStencilOp;
  public depth_fail_op: GPUStencilOp;
  public compare_op: GPUStencilOp;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUStencilOpState) {
    this.fail_op = options.fail_op;
    this.pass_op = options.pass_op;
    this.depth_fail_op = options.depth_fail_op;
    this.compare_op = options.compare_op;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const memory = GPUStencilOpState.allocMemory();
    const view = new DataView(memory.buffer);

    view.setInt32(0, this.fail_op, true);
    view.setInt32(4, this.pass_op, true);
    view.setInt32(8, this.depth_fail_op, true);
    view.setInt32(12, this.compare_op, true);

    return memory;
  }

  public static allocMemory() {
    const memory = new Uint8Array(GPUStencilOpState.BYTE_SIZE);

    return memory;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      fail_op: read.i32(pointer, 0),
      pass_op: read.i32(pointer, 4),
      depth_fail_op: read.i32(pointer, 8),
      compare_op: read.i32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUStencilOpState;

    return new GPUStencilOpState(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      fail_op: view.getInt32(0, true),
      pass_op: view.getInt32(4, true),
      depth_fail_op: view.getInt32(8, true),
      compare_op: view.getInt32(12, true),
      free: null,
      address: null,
    } as RawGPUStencilOpState;

    return new GPUStencilOpState(result);
  }
}
