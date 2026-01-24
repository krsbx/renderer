import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructAddress, getStructMemoryAddress } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import { GPURenderStateCreateInfo } from '../utility';

export function createGPURenderState(
  this: SDL,
  options: {
    renderer: Pointer;
    createInfo: GPURenderStateCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPURenderState(
    options.renderer,
    getStructAddress(options.createInfo)
  );
}

export function setGPURenderStateFragmentUniforms(
  this: SDL,
  options: {
    state: Pointer;
    slotIndex: number;
    data: CStruct | Pointer | Uint8Array;
    length: number;
  }
) {
  return this.symbols.SDL_SetGPURenderStateFragmentUniforms(
    options.state,
    options.slotIndex,
    getStructMemoryAddress(options.data),
    options.length
  );
}

export function setGPURenderState(
  this: SDL,
  options: {
    renderer: Pointer;
    state?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetGPURenderState(
    options.renderer,
    options.state ?? null
  );
}

export function destroyGPURenderState(this: SDL, state: Pointer) {
  this.symbols.SDL_DestroyGPURenderState(state);
}
