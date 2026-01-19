import type { SDL } from '../../..';

export function getNumRenderDrivers(this: SDL) {
  return this.symbols.SDL_GetNumRenderDrivers();
}

export function getRenderDriver(this: SDL, index: number) {
  return this.symbols.SDL_GetRenderDriver(index);
}
