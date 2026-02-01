import type { SDL } from '@/sdl';
import type { GPURenderState, Renderer } from '@/sdl/types/definition';
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
    options.createInfo.$address
  ) as GPURenderState;
}

export function setGPURenderStateFragmentUniforms(
  this: SDL,
  options: {
    state: GPURenderState;
    slotIndex: number;
    data: Uint8Array;
    length: number;
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
