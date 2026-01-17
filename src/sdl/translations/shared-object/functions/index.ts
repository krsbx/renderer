import type { CString, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';

export function loadObject(this: SDL, sofile: CString) {
  return this.symbols.SDL_LoadObject(sofile.ptr) as Pointer | null;
}

export function loadFunction(
  this: SDL,
  options: {
    handle: Pointer;
    name: CString;
  }
) {
  return this.symbols.SDL_LoadFunction(
    options.handle,
    options.name.ptr
  ) as Pointer | null;
}

export function unloadObject(this: SDL, handle: Pointer) {
  this.symbols.SDL_UnloadObject(handle);
}
