import type { SDL } from '@/sdl';
import type { MetalView, Window } from '@/sdl/types/definition';

export function metalCreateView(this: SDL, window: Window) {
  return this.symbols.SDL_Metal_CreateView(window);
}

export function metalDestroyView(this: SDL, view: MetalView) {
  this.symbols.SDL_Metal_DestroyView(view);
}

export function metalGetLayer(this: SDL, view: MetalView) {
  return this.symbols.SDL_Metal_GetLayer(view);
}
