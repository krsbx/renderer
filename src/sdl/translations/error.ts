import type { BaseSDL } from '..';
import { convertStringToFfi } from '../utility/comon';

export function setError(this: BaseSDL, message: string) {
  return this.symbols.SDL_SetError(convertStringToFfi(message).reference);
}

export function setErrorV(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function outOfMemory(this: BaseSDL) {
  return this.symbols.SDL_OutOfMemory();
}

export function getError(this: BaseSDL) {
  return this.symbols.SDL_GetError();
}

export function clearError(this: BaseSDL) {
  return this.symbols.SDL_ClearError();
}
