import { ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { GPURenderStateCreateInfo } from '../utility';

export function createGPURenderState(
  this: SDL,
  options: {
    renderer: Pointer;
    createInfo: GPURenderStateCreateInfo | Pointer;
  }
) {
  const createInfoPtr =
    options.createInfo instanceof GPURenderStateCreateInfo
      ? options.createInfo.$address
      : options.createInfo;

  return this.symbols.SDL_CreateGPURenderState(options.renderer, createInfoPtr);
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
  const dataPtr =
    options.data instanceof CStruct
      ? options.data.$address
      : options.data instanceof Uint8Array
        ? ptr(options.data)
        : options.data;

  return this.symbols.SDL_SetGPURenderStateFragmentUniforms(
    options.state,
    options.slotIndex,
    dataPtr,
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
