import type { SDL } from '@/sdl';
import type { GPURenderState, Renderer } from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { GPURenderStateCreateInfo } from '../struct';

export function createGPURenderState(
  this: SDL,
  options: {
    renderer: Renderer;
    createInfo: GPURenderStateCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPURenderState(
    options.renderer,
    options.createInfo.$memory
  ) as GPURenderState;
}

export function setGPURenderStateFragmentUniforms(
  this: SDL,
  options: {
    state: GPURenderState;
    slotIndex: UInt32;
    data: Uint8Array;
    length: UInt32;
  }
) {
  return this.symbols.SDL_SetGPURenderStateFragmentUniforms(
    options.state,
    options.slotIndex,
    options.data,
    options.length
  );
}

export function setGPURenderState(
  this: SDL,
  options: {
    renderer: Renderer;
    state?: GPURenderState | null;
  }
) {
  return this.symbols.SDL_SetGPURenderState(
    options.renderer,
    options.state ?? null
  );
}

export function destroyGPURenderState(this: SDL, state: GPURenderState) {
  this.symbols.SDL_DestroyGPURenderState(state);
}
