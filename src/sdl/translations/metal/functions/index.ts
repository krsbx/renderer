import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';

export function metalCreateView(this: SDL, window: Pointer) {
  return this.symbols.SDL_Metal_CreateView(window);
}

export function metalDestroyView(this: SDL, view: Pointer) {
  this.symbols.SDL_Metal_DestroyView(view);
}

export function metalGetLayer(this: SDL, view: Pointer) {
  return this.symbols.SDL_Metal_GetLayer(view);
}
