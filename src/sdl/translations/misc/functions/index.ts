import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';

export function openURL(this: SDL, url: string) {
  return this.symbols.SDL_OpenURL(stringToCString(url).ptr);
}
