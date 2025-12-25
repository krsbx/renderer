import { type FFIFunction, FFIType } from 'bun:ffi';

export const HintsDefinition = {
  // bool SDL_SetHintWithPriority(const char *name, const char *value, SDL_HintPriority priority);  // Set a hint with a specific priority.
  SDL_SetHintWithPriority: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetHint(const char *name, const char *value);                                         // Set a hint with normal priority.
  SDL_SetHint: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_ResetHint(const char *name);                                                          // Reset a hint to the default value.
  SDL_ResetHint: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // void SDL_ResetHints(void);                                                                     // Reset all hints to the default values.
  SDL_ResetHints: {
    args: [],
    returns: FFIType.bool,
  },
  // const char * SDL_GetHint(const char *name);                                                    // Get the value of a hint.
  SDL_GetHint: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // bool SDL_GetHintBoolean(const char *name, bool default_value);                                 // Get the boolean value of a hint variable.
  SDL_GetHintBoolean: {
    args: [FFIType.cstring, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_AddHintCallback(const char *name, SDL_HintCallback callback, void *userdata);         // Add a function to watch a particular hint.
  SDL_AddHintCallback: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_RemoveHintCallback(const char *name, SDL_HintCallback callback, void *userdata);      // Remove a function watching a particular hint.
  SDL_RemoveHintCallback: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
