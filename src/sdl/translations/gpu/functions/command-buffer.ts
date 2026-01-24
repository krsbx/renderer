import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructMemoryAddress } from '@utility/common';
import { type Pointer } from 'bun:ffi';

export function acquireGPUCommandBuffer(this: SDL, device: Pointer) {
  return this.symbols.SDL_AcquireGPUCommandBuffer(device);
}

export function pushGPUVertexUniformData(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    slotIndex: number;
    data: CStruct | Uint8Array;
    length: number;
  }
) {
  this.symbols.SDL_PushGPUVertexUniformData(
    options.commandBuffer,
    options.slotIndex,
    getStructMemoryAddress(options.data),
    options.length
  );
}

export function pushGPUFragmentUniformData(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    slotIndex: number;
    data: CStruct | Uint8Array;
    length: number;
  }
) {
  this.symbols.SDL_PushGPUFragmentUniformData(
    options.commandBuffer,
    options.slotIndex,
    getStructMemoryAddress(options.data),
    options.length
  );
}

export function pushGPUComputeUniformData(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    slotIndex: number;
    data: CStruct | Uint8Array;
    length: number;
  }
) {
  this.symbols.SDL_PushGPUComputeUniformData(
    options.commandBuffer,
    options.slotIndex,
    getStructMemoryAddress(options.data),
    options.length
  );
}
