import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';

// Metal

export function getRenderMetalLayer(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_GetRenderMetalLayer(renderer);
}

export function getRenderMetalCommandEncoder(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_GetRenderMetalCommandEncoder(renderer);
}

// Vulkan

export function addVulkanRenderSemaphores(
  this: SDL,
  options: {
    renderer: Pointer;
    waitStageMask: number;
    waitSemaphore: bigint;
    signalSemaphore: bigint;
  }
) {
  return this.symbols.SDL_AddVulkanRenderSemaphores(
    options.renderer,
    options.waitStageMask,
    options.waitSemaphore,
    options.signalSemaphore
  );
}

// VSync

export function setRenderVSync(
  this: SDL,
  options: {
    renderer: Pointer;
    vsync: number;
  }
) {
  return this.symbols.SDL_SetRenderVSync(options.renderer, options.vsync);
}

export function getRenderVSync(this: SDL, renderer: Pointer) {
  const vsyncStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderVSync(
    renderer,
    vsyncStruct.$address
  );

  if (!success) return null;

  return vsyncStruct.getValue(0, 'i32');
}
