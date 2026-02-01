import type { SDL } from '@/sdl';
import type {
  GPUCommandBuffer,
  GPUDevice,
  GPUFence,
} from '@/sdl/types/definition';
import { CStruct } from '@cstruct';

// Submit/Cancel

export function submitGPUCommandBuffer(
  this: SDL,
  commandBuffer: GPUCommandBuffer
) {
  return this.symbols.SDL_SubmitGPUCommandBuffer(commandBuffer);
}

export function submitGPUCommandBufferAndAcquireFence(
  this: SDL,
  commandBuffer: GPUCommandBuffer
) {
  return this.symbols.SDL_SubmitGPUCommandBufferAndAcquireFence(
    commandBuffer
  ) as GPUFence;
}

export function cancelGPUCommandBuffer(
  this: SDL,
  commandBuffer: GPUCommandBuffer
) {
  return this.symbols.SDL_CancelGPUCommandBuffer(commandBuffer);
}

// Wait/Fence

export function waitForGPUIdle(this: SDL, device: GPUDevice) {
  return this.symbols.SDL_WaitForGPUIdle(device);
}

export function waitForGPUFences(
  this: SDL,
  options: {
    device: GPUDevice;
    /**
     * @default true
     */
    waitAll?: boolean;
    fences: GPUFence[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.fences);

  return this.symbols.SDL_WaitForGPUFences(
    options.device,
    options.waitAll ?? true,
    address,
    options.fences.length
  );
}

export function queryGPUFence(
  this: SDL,
  options: {
    device: GPUDevice;
    fence: GPUFence;
  }
) {
  return this.symbols.SDL_QueryGPUFence(options.device, options.fence);
}

export function releaseGPUFence(
  this: SDL,
  options: {
    device: GPUDevice;
    fence: GPUFence;
  }
) {
  this.symbols.SDL_ReleaseGPUFence(options.device, options.fence);
}
