import type { SDL } from '../../..';

export function isTablet(this: SDL) {
  return this.symbols.SDL_IsTablet();
}

export function isTV(this: SDL) {
  return this.symbols.SDL_IsTV();
}

export function getSandbox(this: SDL) {
  return this.symbols.SDL_GetSandbox();
}
