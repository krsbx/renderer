import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUSampleCount } from '../../../ffi/gpu/constant';
import type { RawGPUMultisampleState } from './types';

export class GPUMultisampleState implements RawGPUMultisampleState {
  public static readonly BYTE_SIZE = 12;

  public sample_count: GPUSampleCount;
  public sample_mask: number;
  public enable_mask: boolean;
  public enable_alpha_to_coverage: boolean;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  constructor(options: RawGPUMultisampleState) {
    this.sample_count = options.sample_count;
    this.sample_mask = options.sample_mask;
    this.enable_mask = options.enable_mask;
    this.enable_alpha_to_coverage = options.enable_alpha_to_coverage;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUMultisampleState.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.sample_count, true);
    view.setUint32(4, this.sample_mask, true);
    view.setUint8(8, this.enable_mask ? 1 : 0);
    view.setUint8(9, this.enable_alpha_to_coverage ? 1 : 0);
    view.setUint8(10, this.padding2);
    view.setUint8(11, this.padding3);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(GPUMultisampleState.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      sample_count: read.i32(pointer, 0),
      sample_mask: read.u32(pointer, 4),
      enable_mask: read.u8(pointer, 8) === 1,
      enable_alpha_to_coverage: read.u8(pointer, 9) === 1,
      padding2: read.u8(pointer, 10),
      padding3: read.u8(pointer, 11),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUMultisampleState;

    return new GPUMultisampleState(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      sample_count: view.getInt32(0, true),
      sample_mask: view.getUint32(4, true),
      enable_mask: view.getUint8(8) === 1,
      enable_alpha_to_coverage: view.getUint8(9) === 1,
      padding2: view.getUint8(10),
      padding3: view.getUint8(11),
      free: null,
      address: null,
    } as RawGPUMultisampleState;

    return new GPUMultisampleState(result);
  }
}
