import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructMemoryAddress } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';

export function acquireGPUCommandBuffer(this: SDL, device: Pointer) {
  return this.symbols.SDL_AcquireGPUCommandBuffer(device);
}

export function pushGPUVertexUniformData(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    slotIndex: number;
    data: CStruct | Pointer | Uint8Array;
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
    data: CStruct | Pointer | Uint8Array;
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
    data: CStruct | Pointer | Uint8Array;
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
