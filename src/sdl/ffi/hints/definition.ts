import { type FFIFunction, FFIType } from 'bun:ffi';

export const HintsDefinition = {
  SDL_SetHintWithPriority: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_SetHint: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_ResetHint: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_ResetHints: {
    args: [],
    returns: FFIType.bool,
  },
  SDL_GetHint: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  SDL_GetHintBoolean: {
    args: [FFIType.cstring, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_AddHintCallback: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_RemoveHintCallback: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
