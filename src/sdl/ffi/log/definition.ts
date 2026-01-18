import { type FFIFunction, FFIType } from 'bun:ffi';

export const LogDefinition = {
  // void SDL_SetLogPriorities(SDL_LogPriority priority);                                        // Set the priority of all log categories.
  SDL_SetLogPriorities: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // void SDL_SetLogPriority(int category, SDL_LogPriority priority);                            // Set the priority of a particular log category.
  SDL_SetLogPriority: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // SDL_LogPriority SDL_GetLogPriority(int category);                                           // Get the priority of a particular log category.
  SDL_GetLogPriority: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // void SDL_ResetLogPriorities(void);                                                          // Reset all priorities to default.
  SDL_ResetLogPriorities: {
    args: [],
    returns: FFIType.void,
  },
  // bool SDL_SetLogPriorityPrefix(SDL_LogPriority priority, const char *prefix);                // Set the text prepended to log messages of a given priority.
  SDL_SetLogPriorityPrefix: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.bool,
  },
  // void SDL_Log(const char *fmt, ... ...);                                                     // Log a message with SDL_LOG_CATEGORY_APPLICATION and SDL_LOG_PRIORITY_INFO.
  SDL_Log: {
    args: [FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogTrace(int category, const char *fmt, ... ...);                                  // Log a message with SDL_LOG_PRIORITY_TRACE.
  SDL_LogTrace: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogVerbose(int category, const char *fmt, ... ...);                                // Log a message with SDL_LOG_PRIORITY_VERBOSE.
  SDL_LogVerbose: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogDebug(int category, const char *fmt, ... ...);                                  // Log a message with SDL_LOG_PRIORITY_DEBUG.
  SDL_LogDebug: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogInfo(int category, const char *fmt, ... ...);                                   // Log a message with SDL_LOG_PRIORITY_INFO.
  SDL_LogInfo: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogWarn(int category, const char *fmt, ... ...);                                   // Log a message with SDL_LOG_PRIORITY_WARN.
  SDL_LogWarn: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogError(int category, const char *fmt, ... ...);                                  // Log a message with SDL_LOG_PRIORITY_ERROR.
  SDL_LogError: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogCritical(int category, const char *fmt, ... ...);                               // Log a message with SDL_LOG_PRIORITY_CRITICAL.
  SDL_LogCritical: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogMessage(int category, SDL_LogPriority priority, const char *fmt, ... ...);      // Log a message with the specified category and priority.
  SDL_LogMessage: {
    args: [FFIType.i32, FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_LogMessageV(int category, SDL_LogPriority priority, const char *fmt, va_list ap);  // Log a message with the specified category and priority.
  SDL_LogMessageV: {
    args: [FFIType.i32, FFIType.i32, FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_LogOutputFunction SDL_GetDefaultLogOutputFunction(void);                                // Get the default log output function.
  SDL_GetDefaultLogOutputFunction: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_GetLogOutputFunction(SDL_LogOutputFunction *callback, void **userdata);            // Get the current log output function.
  SDL_GetLogOutputFunction: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SetLogOutputFunction(SDL_LogOutputFunction callback, void *userdata);              // Replace the default log output function with one of your own.
  SDL_SetLogOutputFunction: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
