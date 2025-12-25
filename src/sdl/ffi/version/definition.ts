import { type FFIFunction, FFIType } from 'bun:ffi';

export const VersionDefinition = {
  // int SDL_GetVersion(void);            // Get the version of SDL that is linked against your program.
  SDL_GetVersion: {
    args: [],
    returns: FFIType.i32,
  },
  // const char * SDL_GetRevision(void);  // Get the code revision of the SDL library that is linked against your program.
  SDL_GetRevision: {
    args: [],
    returns: FFIType.cstring,
  },
} satisfies Record<string, FFIFunction>;
