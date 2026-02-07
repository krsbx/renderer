import type { SDL } from '@/sdl';
import type { Int32 } from '@/types/primitive';

export function getVersion(this: SDL) {
  return this.symbols.SDL_GetVersion() as Int32;
}

export function getRevision(this: SDL) {
  return this.symbols.SDL_GetRevision().toString();
}
