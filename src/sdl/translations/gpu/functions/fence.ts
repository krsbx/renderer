import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';

// Submit/Cancel

export function submitGPUCommandBuffer(this: SDL, commandBuffer: Pointer) {
  return this.symbols.SDL_SubmitGPUCommandBuffer(commandBuffer);
}

export function submitGPUCommandBufferAndAcquireFence(
  this: SDL,
  commandBuffer: Pointer
) {
  return this.symbols.SDL_SubmitGPUCommandBufferAndAcquireFence(commandBuffer);
}

export function cancelGPUCommandBuffer(this: SDL, commandBuffer: Pointer) {
  return this.symbols.SDL_CancelGPUCommandBuffer(commandBuffer);
}

// Wait/Fence

export function waitForGPUIdle(this: SDL, device: Pointer) {
  return this.symbols.SDL_WaitForGPUIdle(device);
}

export function waitForGPUFences(
  this: SDL,
  options: {
    device: Pointer;
    /**
     * @default true
     */
    waitAll?: boolean;
    fences: Pointer;
    numFences: number;
  }
) {
  return this.symbols.SDL_WaitForGPUFences(
    options.device,
    options.waitAll ?? true,
    options.fences,
    options.numFences
  );
}

export function queryGPUFence(
  this: SDL,
  options: {
    device: Pointer;
    fence: Pointer;
  }
) {
  return this.symbols.SDL_QueryGPUFence(options.device, options.fence);
}

export function releaseGPUFence(
  this: SDL,
  options: {
    device: Pointer;
    fence: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUFence(options.device, options.fence);
}
