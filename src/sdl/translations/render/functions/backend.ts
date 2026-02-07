import type { SDL } from '@/sdl';
import type { Renderer } from '@/sdl/types/definition';
import type { Int32, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';

// Metal

export function getRenderMetalLayer(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_GetRenderMetalLayer(renderer);
}

export function getRenderMetalCommandEncoder(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_GetRenderMetalCommandEncoder(renderer);
}

// Vulkan

export function addVulkanRenderSemaphores(
  this: SDL,
  options: {
    renderer: Renderer;
    waitStageMask: UInt32;
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
    renderer: Renderer;
    vsync: Int32;
  }
) {
  return this.symbols.SDL_SetRenderVSync(options.renderer, options.vsync);
}

export function getRenderVSync(this: SDL, renderer: Renderer) {
  const vsyncStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderVSync(
    renderer,
    vsyncStruct.$memory
  );

  if (!success) return null;

  return vsyncStruct.getValue(0, 'i32') as Int32;
}
