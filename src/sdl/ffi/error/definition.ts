import { type FFIFunction, FFIType } from 'bun:ffi';

export const ErrorDefinition = {
  // bool SDL_SetError(const char *fmt, ... ...);      // Set the SDL error message for the current thread.
  SDL_SetError: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_SetErrorV(const char *fmt, va_list ap);  // Set the SDL error message for the current thread.
  SDL_SetErrorV: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_OutOfMemory(void);                       // Set an error indicating that memory allocation failed.
  SDL_OutOfMemory: {
    args: [],
    returns: FFIType.bool,
  },
  // const char * SDL_GetError(void);                  // Retrieve a message about the last error that occurred on the current thread.
  SDL_GetError: {
    args: [],
    returns: FFIType.cstring,
  },
  // bool SDL_ClearError(void);                        // Clear any previous error message for this thread.
  SDL_ClearError: {
    args: [],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
