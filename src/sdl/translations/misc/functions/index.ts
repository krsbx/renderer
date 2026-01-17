import type { CString } from 'bun:ffi';
import type { SDL } from '../../..';

export function openURL(this: SDL, url: CString) {
  return this.symbols.SDL_OpenURL(url.ptr);
}
