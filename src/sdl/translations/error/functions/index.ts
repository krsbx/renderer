import type { SDL } from '../../..';
import { stringToCString } from '../../../utility/common';

export function setError(this: SDL, fmt: string) {
  return this.symbols.SDL_SetError(stringToCString(fmt).ptr);
}

export function setErrorV(this: SDL) {
  throw new Error('Not implemented');
}

export function outOfMemory(this: SDL) {
  return this.symbols.SDL_OutOfMemory();
}

export function getError(this: SDL) {
  return this.symbols.SDL_GetError();
}

export function clearError(this: SDL) {
  return this.symbols.SDL_ClearError();
}
