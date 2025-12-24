import { type FFIFunction, FFIType } from 'bun:ffi';

export const ErrorDefinition = {
  SDL_SetError: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_SetErrorV: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_OutOfMemory: {
    args: [],
    returns: FFIType.bool,
  },
  SDL_GetError: {
    args: [],
    returns: FFIType.cstring,
  },
  SDL_ClearError: {
    args: [],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
