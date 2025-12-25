import { type FFIFunction, FFIType } from 'bun:ffi';

export const SharedObjectDefinition = {
  // SDL_SharedObject * SDL_LoadObject(const char *sofile);                             // Dynamically load a shared object.
  SDL_LoadObject: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  // SDL_FunctionPointer SDL_LoadFunction(SDL_SharedObject *handle, const char *name);  // Look up the address of the named function in a shared object.
  SDL_LoadFunction: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // void SDL_UnloadObject(SDL_SharedObject *handle);                                   // Unload a shared object from memory.
  SDL_UnloadObject: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
