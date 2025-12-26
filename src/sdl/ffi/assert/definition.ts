import { FFIType, type FFIFunction } from 'bun:ffi';

export const AssertDefinition = {
  // SDL_AssertState SDL_ReportAssertion(SDL_AssertData *data, const char *func, const char *file, int line);  // Never call this directly.
  SDL_ReportAssertion: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.cstring, FFIType.i32],
    returns: FFIType.i32,
  },
  // #define SDL_assert(condition)                                                                             // An assertion test that is normally performed only in debug builds.
  // Comment out since FFI cannot use a macro
  // SDL_assert: {
  //   args: [FFIType.bool],
  //   returns: FFIType.void,
  // },
  // #define SDL_assert_release(condition)                                                                     // An assertion test that is performed even in release builds.
  // Comment out since FFI cannot use a macro
  // SDL_assert_release: {
  //   args: [FFIType.bool],
  //   returns: FFIType.void,
  // },
  // #define SDL_assert_paranoid(condition)                                                                    // An assertion test that is performed only when built with paranoid settings.
  // Comment out since FFI cannot use a macro
  // SDL_assert_paranoid: {
  //   args: [FFIType.bool],
  //   returns: FFIType.void,
  // },
  // #define SDL_assert_always(condition)                                                                      // An assertion test that is always performed.
  // Comment out since FFI cannot use a macro
  // SDL_assert_always: {
  //   args: [FFIType.bool],
  //   returns: FFIType.void,
  // },
  // void SDL_SetAssertionHandler(SDL_AssertionHandler handler, void *userdata);                               // Set an application-defined assertion handler.
  SDL_SetAssertionHandler: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_AssertionHandler SDL_GetDefaultAssertionHandler(void);                                                // Get the default assertion handler.
  SDL_GetDefaultAssertionHandler: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_AssertionHandler SDL_GetAssertionHandler(void **puserdata);                                           // Get the current assertion handler.
  SDL_GetAssertionHandler: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const SDL_AssertData * SDL_GetAssertionReport(void);                                                      // Get a list of all assertion failures.
  SDL_GetAssertionReport: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_ResetAssertionReport(void);                                                                      // Clear the list of all assertion failures.
  SDL_ResetAssertionReport: {
    args: [],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
