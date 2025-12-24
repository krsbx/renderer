import { type FFIFunction, FFIType } from 'bun:ffi';

export const PropertiesDefinition = {
  SDL_GetGlobalProperties: {
    args: [],
    returns: FFIType.u32,
  },
  SDL_CreateProperties: {
    args: [],
    returns: FFIType.u32,
  },
  SDL_CopyProperties: {
    args: [FFIType.u32, FFIType.u32],
    returns: FFIType.bool,
  },
  SDL_LockProperties: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  SDL_UnlockProperties: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  SDL_SetPointerPropertyWithCleanup: {
    args: [FFIType.u32, FFIType.cstring, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetPointerProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetStringProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_SetNumberProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.i64],
    returns: FFIType.bool,
  },
  SDL_SetFloatProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.f32],
    returns: FFIType.bool,
  },
  SDL_SetBooleanProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_HasProperty: {
    args: [FFIType.u32, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_GetPropertyType: {
    args: [FFIType.u32, FFIType.cstring],
    returns: FFIType.i32,
  },
  SDL_GetPointerProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_GetStringProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.cstring],
    returns: FFIType.cstring,
  },
  SDL_GetNumberProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.i64],
    returns: FFIType.i64,
  },
  SDL_GetFloatProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.f32],
    returns: FFIType.f32,
  },
  SDL_GetBooleanProperty: {
    args: [FFIType.u32, FFIType.cstring, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_ClearProperty: {
    args: [FFIType.u32, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_EnumerateProperties: {
    args: [FFIType.u32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_DestroyProperties: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
