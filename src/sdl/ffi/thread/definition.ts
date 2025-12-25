import { type FFIFunction, FFIType } from 'bun:ffi';

export const ThreadDefinition = {
  // SDL_Thread * SDL_CreateThread(SDL_ThreadFunction fn, const char *name, void *data);       // Create a new thread with a default stack size.
  SDL_CreateThread: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Thread * SDL_CreateThreadWithProperties(SDL_PropertiesID props);                      // Create a new thread with with the specified properties.
  SDL_CreateThreadWithProperties: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetThreadName(SDL_Thread *thread);                                       // Get the thread name as it was specified in SDL_CreateThread().
  SDL_GetThreadName: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // SDL_ThreadID SDL_GetCurrentThreadID(void);                                                // Get the thread identifier for the current thread.
  SDL_GetCurrentThreadID: {
    args: [],
    returns: FFIType.u32,
  },
  // SDL_ThreadID SDL_GetThreadID(SDL_Thread *thread);                                         // Get the thread identifier for the specified thread.
  SDL_GetThreadID: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_SetCurrentThreadPriority(SDL_ThreadPriority priority);                           // Set the priority for the current thread.
  SDL_SetCurrentThreadPriority: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_WaitThread(SDL_Thread *thread, int *status);                                     // Wait for a thread to finish.
  SDL_WaitThread: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_ThreadState SDL_GetThreadState(SDL_Thread *thread);                                   // Get the current state of a thread.
  SDL_GetThreadState: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // void SDL_DetachThread(SDL_Thread *thread);                                                // Let a thread clean up on exit without intervention.
  SDL_DetachThread: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void * SDL_GetTLS(SDL_TLSID *id);                                                         // Get the current thread's value associated with a thread local storage ID.
  SDL_GetTLS: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetTLS(SDL_TLSID *id, const void *value, SDL_TLSDestructorCallback destructor);  // Set the current thread's value associated with a thread local storage ID.
  SDL_SetTLS: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_CleanupTLS(void);                                                                // Cleanup all TLS data for this thread.
  SDL_CleanupTLS: {
    args: [],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
