import type { SDL } from '@/sdl';
import type { GPUCommandBuffer, GPUDevice } from '@/sdl/types/definition';

export function acquireGPUCommandBuffer(this: SDL, device: GPUDevice) {
  return this.symbols.SDL_AcquireGPUCommandBuffer(device) as GPUCommandBuffer;
}

export function pushGPUVertexUniformData(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    slotIndex: number;
    data: Uint8Array;
  }
) {
  this.symbols.SDL_PushGPUVertexUniformData(
    options.commandBuffer,
    options.slotIndex,
    options.data,
    options.data.byteLength
  );
}

export function pushGPUFragmentUniformData(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    slotIndex: number;
    data: Uint8Array;
  }
) {
  this.symbols.SDL_PushGPUFragmentUniformData(
    options.commandBuffer,
    options.slotIndex,
    options.data,
    options.data.byteLength
  );
}

export function pushGPUComputeUniformData(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    slotIndex: number;
    data: Uint8Array;
  }
) {
  this.symbols.SDL_PushGPUComputeUniformData(
    options.commandBuffer,
    options.slotIndex,
    options.data,
    options.data.byteLength
  );
}
