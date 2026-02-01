import type { SDL } from '@/sdl';
import type { SharedObject } from '@/sdl/types/definition';
import { stringToCString } from '@utility/common';

export function loadObject(this: SDL, sofile: string) {
  return this.symbols.SDL_LoadObject(
    stringToCString(sofile).ptr
  ) as SharedObject;
}

export function loadFunction(
  this: SDL,
  options: {
    handle: SharedObject;
    name: string;
  }
) {
  return this.symbols.SDL_LoadFunction(
    options.handle,
    stringToCString(options.name).ptr
  );
}

export function unloadObject(this: SDL, handle: SharedObject) {
  this.symbols.SDL_UnloadObject(handle);
}
