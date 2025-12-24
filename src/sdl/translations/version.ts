import type { BaseSDL } from '..';

export function getVersion(this: BaseSDL) {
  return this.symbols.SDL_GetVersion();
}

export function getRevision(this: BaseSDL) {
  return this.symbols.SDL_GetRevision();
}
