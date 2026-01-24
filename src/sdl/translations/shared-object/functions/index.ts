import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';

export function loadObject(this: SDL, sofile: string) {
  return this.symbols.SDL_LoadObject(stringToCString(sofile).ptr);
}

export function loadFunction(
  this: SDL,
  options: {
    handle: Pointer;
    name: string;
  }
) {
  return this.symbols.SDL_LoadFunction(
    options.handle,
    stringToCString(options.name).ptr
  );
}

export function unloadObject(this: SDL, handle: Pointer) {
  this.symbols.SDL_UnloadObject(handle);
}
