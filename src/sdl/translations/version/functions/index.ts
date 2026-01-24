import type { SDL } from '@/sdl';

export function getVersion(this: SDL) {
  return this.symbols.SDL_GetVersion();
}

export function getRevision(this: SDL) {
  return this.symbols.SDL_GetRevision().toString();
}
