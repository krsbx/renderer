import { type FFIFunction, FFIType } from 'bun:ffi';

export const LogDefinition = {
  SDL_SetLogPriorities: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  SDL_SetLogPriority: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  SDL_GetLogPriority: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  SDL_ResetLogPriorities: {
    args: [],
    returns: FFIType.void,
  },
  SDL_SetLogPriorityPrefix: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_Log: {
    args: [FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogTrace: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogVerbose: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogDebug: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogInfo: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogWarn: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogError: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogCritical: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogMessage: {
    args: [FFIType.i32, FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  SDL_LogMessageV: {
    args: [FFIType.i32, FFIType.i32, FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  SDL_GetDefaultLogOutputFunction: {
    args: [],
    returns: FFIType.ptr,
  },
  SDL_GetLogOutputFunction: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_SetLogOutputFunction: {
    args: [FFIType.function, FFIType.ptr],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
