import { type FFIFunction, FFIType } from 'bun:ffi';

export const VersionDefinition = {
  SDL_GetVersion: {
    args: [],
    returns: FFIType.i32,
  },
  SDL_GetRevision: {
    args: [],
    returns: FFIType.cstring,
  },
} satisfies Record<string, FFIFunction>;
