import type { SDL } from '@/sdl';
import type { Int32 } from '@/types/primitive';

export function getNumRenderDrivers(this: SDL) {
  return this.symbols.SDL_GetNumRenderDrivers() as Int32;
}

export function getRenderDriver(this: SDL, index: Int32) {
  return this.symbols.SDL_GetRenderDriver(index).toString();
}
