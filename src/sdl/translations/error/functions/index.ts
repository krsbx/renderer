import type { CString } from 'bun:ffi';
import type { SDL } from '../../..';

export function setError(this: SDL, fmt: CString) {
  return this.symbols.SDL_SetError(fmt.ptr);
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
