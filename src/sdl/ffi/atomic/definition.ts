import { type FFIFunction, FFIType } from 'bun:ffi';

export const AtomicDefinition = {
  // bool SDL_TryLockSpinlock(SDL_SpinLock *lock);                                      // Try to lock a spin lock by setting it to a non-zero value.
  SDL_TryLockSpinlock: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_LockSpinlock(SDL_SpinLock *lock);                                         // Lock a spin lock by setting it to a non-zero value.
  SDL_LockSpinlock: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_UnlockSpinlock(SDL_SpinLock *lock);                                       // Unlock a spin lock by setting it to 0.
  SDL_UnlockSpinlock: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_MemoryBarrierReleaseFunction(void);                                       // Insert a memory release barrier (function version).
  SDL_MemoryBarrierReleaseFunction: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_MemoryBarrierAcquireFunction(void);                                       // Insert a memory acquire barrier (function version).
  SDL_MemoryBarrierAcquireFunction: {
    args: [],
    returns: FFIType.void,
  },
  // bool SDL_CompareAndSwapAtomicInt(SDL_AtomicInt *a, int oldval, int newval);        // Set an atomic variable to a new value if it is currently an old value.
  SDL_CompareAndSwapAtomicInt: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // int SDL_SetAtomicInt(SDL_AtomicInt *a, int v);                                     // Set an atomic variable to a value.
  SDL_SetAtomicInt: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_GetAtomicInt(SDL_AtomicInt *a);                                            // Get the value of an atomic variable.
  SDL_GetAtomicInt: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_AddAtomicInt(SDL_AtomicInt *a, int v);                                     // Add to an atomic variable.
  SDL_AddAtomicInt: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
  // #define SDL_AtomicIncRef(a)                                                        // Increment an atomic variable used as a reference count.
  // Comment out since FFI cannot use a macro
  // SDL_AtomicIncRef: {
  //   args: [FFIType.ptr],
  //   returns: FFIType.void,
  // },
  // #define SDL_AtomicDecRef(a)                                                        // Decrement an atomic variable used as a reference count.
  // Comment out since FFI cannot use a macro
  // SDL_AtomicDecRef: {
  //   args: [FFIType.ptr],
  //   returns: FFIType.void,
  // },
  // bool SDL_CompareAndSwapAtomicU32(SDL_AtomicU32 *a, Uint32 oldval, Uint32 newval);  // Set an atomic variable to a new value if it is currently an old value.
  SDL_CompareAndSwapAtomicU32: {
    args: [FFIType.ptr, FFIType.u32, FFIType.u32],
    returns: FFIType.bool,
  },
  // Uint32 SDL_SetAtomicU32(SDL_AtomicU32 *a, Uint32 v);                               // Set an atomic variable to a value.
  SDL_SetAtomicU32: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.u32,
  },
  // Uint32 SDL_GetAtomicU32(SDL_AtomicU32 *a);                                         // Get the value of an atomic variable.
  SDL_GetAtomicU32: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // Uint32 SDL_AddAtomicU32(SDL_AtomicU32 *a, int v);                                  // Add to an atomic variable.
  SDL_AddAtomicU32: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.u32,
  },
  // bool SDL_CompareAndSwapAtomicPointer(void **a, void *oldval, void *newval);        // Set a pointer to a new value if it is currently an old value.
  SDL_CompareAndSwapAtomicPointer: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void * SDL_SetAtomicPointer(void **a, void *v);                                    // Set a pointer to a value atomically.
  SDL_SetAtomicPointer: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void * SDL_GetAtomicPointer(void **a);                                             // Get the value of a pointer atomically.
  SDL_GetAtomicPointer: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
