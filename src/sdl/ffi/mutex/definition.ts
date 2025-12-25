import { FFIType, type FFIFunction } from 'bun:ffi';

export const MutexDefinition = {
  // SDL_Mutex * SDL_CreateMutex(void);                                                       // Create a new mutex.
  SDL_CreateMutex: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_LockMutex(SDL_Mutex *mutex);                                                    // Lock the mutex.
  SDL_LockMutex: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_TryLockMutex(SDL_Mutex *mutex);                                                 // Try to lock a mutex without blocking.
  SDL_TryLockMutex: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_UnlockMutex(SDL_Mutex *mutex);                                                  // Unlock the mutex.
  SDL_UnlockMutex: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_DestroyMutex(SDL_Mutex *mutex);                                                 // Destroy a mutex created with SDL_CreateMutex().
  SDL_DestroyMutex: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_RWLock * SDL_CreateRWLock(void);                                                     // Create a new read/write lock.
  SDL_CreateRWLock: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_LockRWLockForReading(SDL_RWLock *rwlock);                                       // Lock the read/write lock for _read only_ operations.
  SDL_LockRWLockForReading: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_LockRWLockForWriting(SDL_RWLock *rwlock);                                       // Lock the read/write lock for _write_ operations.
  SDL_LockRWLockForWriting: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_TryLockRWLockForReading(SDL_RWLock *rwlock);                                    // Try to lock a read/write lock _for reading_ without blocking.
  SDL_TryLockRWLockForReading: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_TryLockRWLockForWriting(SDL_RWLock *rwlock);                                    // Try to lock a read/write lock _for writing_ without blocking.
  SDL_TryLockRWLockForWriting: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_UnlockRWLock(SDL_RWLock *rwlock);                                               // Unlock the read/write lock.
  SDL_UnlockRWLock: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_DestroyRWLock(SDL_RWLock *rwlock);                                              // Destroy a read/write lock created with SDL_CreateRWLock().
  SDL_DestroyRWLock: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_Semaphore * SDL_CreateSemaphore(Uint32 initial_value);                               // Create a semaphore.
  SDL_CreateSemaphore: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // void SDL_DestroySemaphore(SDL_Semaphore *sem);                                           // Destroy a semaphore.
  SDL_DestroySemaphore: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_WaitSemaphore(SDL_Semaphore *sem);                                              // Wait until a semaphore has a positive value and then decrements it.
  SDL_WaitSemaphore: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_TryWaitSemaphore(SDL_Semaphore *sem);                                           // See if a semaphore has a positive value and decrement it if it does.
  SDL_TryWaitSemaphore: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitSemaphoreTimeout(SDL_Semaphore *sem, Sint32 timeoutMS);                     // Wait until a semaphore has a positive value and then decrements it.
  SDL_WaitSemaphoreTimeout: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_SignalSemaphore(SDL_Semaphore *sem);                                            // Atomically increment a semaphore's value and wake waiting threads.
  SDL_SignalSemaphore: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // Uint32 SDL_GetSemaphoreValue(SDL_Semaphore *sem);                                        // Get the current value of a semaphore.
  SDL_GetSemaphoreValue: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_Condition * SDL_CreateCondition(void);                                               // Create a condition variable.
  SDL_CreateCondition: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_DestroyCondition(SDL_Condition *cond);                                          // Destroy a condition variable.
  SDL_DestroyCondition: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SignalCondition(SDL_Condition *cond);                                           // Restart one of the threads that are waiting on the condition variable.
  SDL_SignalCondition: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_BroadcastCondition(SDL_Condition *cond);                                        // Restart all threads that are waiting on the condition variable.
  SDL_BroadcastCondition: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_WaitCondition(SDL_Condition *cond, SDL_Mutex *mutex);                           // Wait until a condition variable is signaled.
  SDL_WaitCondition: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_WaitConditionTimeout(SDL_Condition *cond, SDL_Mutex *mutex, Sint32 timeoutMS);  // Wait until a condition variable is signaled or a certain time has passed.
  SDL_WaitConditionTimeout: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_ShouldInit(SDL_InitState *state);                                               // Return whether initialization should be done.
  SDL_ShouldInit: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ShouldQuit(SDL_InitState *state);                                               // Return whether cleanup should be done.
  SDL_ShouldQuit: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_SetInitialized(SDL_InitState *state, bool initialized);                         // Finish an initialization state transition.
  SDL_SetInitialized: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
