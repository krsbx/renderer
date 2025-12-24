import { type FFIFunction, FFIType } from 'bun:ffi';

export const InitDefinition = {
  SDL_Init: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_InitSubSystem: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_QuitSubSystem: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  SDL_WasInit: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  SDL_Quit: {
    args: [],
    returns: FFIType.void,
  },
  SDL_IsMainThread: {
    args: [],
    returns: FFIType.bool,
  },
  SDL_RunOnMainThread: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_SetAppMetadata: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_SetAppMetadataProperty: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_GetAppMetadataProperty: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
} satisfies Record<string, FFIFunction>;
