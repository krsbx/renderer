import { type FFIFunction, FFIType } from 'bun:ffi';

export const AsyncIODefinition = {
  // SDL_AsyncIO * SDL_AsyncIOFromFile(const char *file, const char *mode);                                                        // Use this function to create a new SDL_AsyncIO object for reading from and/or writing to a named file.
  SDL_AsyncIOFromFile: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // Sint64 SDL_GetAsyncIOSize(SDL_AsyncIO *asyncio);                                                                              // Use this function to get the size of the data stream in an SDL_AsyncIO.
  SDL_GetAsyncIOSize: {
    args: [FFIType.ptr],
    returns: FFIType.i64,
  },
  // bool SDL_ReadAsyncIO(SDL_AsyncIO *asyncio, void *ptr, Uint64 offset, Uint64 size, SDL_AsyncIOQueue *queue, void *userdata);   // Start an async read.
  SDL_ReadAsyncIO: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.u64,
      FFIType.u64,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_WriteAsyncIO(SDL_AsyncIO *asyncio, void *ptr, Uint64 offset, Uint64 size, SDL_AsyncIOQueue *queue, void *userdata);  // Start an async write.
  SDL_WriteAsyncIO: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.u64,
      FFIType.u64,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_CloseAsyncIO(SDL_AsyncIO *asyncio, bool flush, SDL_AsyncIOQueue *queue, void *userdata);                             // Close and free any allocated resources for an async I/O object.
  SDL_CloseAsyncIO: {
    args: [FFIType.ptr, FFIType.bool, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_AsyncIOQueue * SDL_CreateAsyncIOQueue(void);                                                                              // Create a task queue for tracking multiple I/O operations.
  SDL_CreateAsyncIOQueue: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_DestroyAsyncIOQueue(SDL_AsyncIOQueue *queue);                                                                        // Destroy a previously-created async I/O task queue.
  SDL_DestroyAsyncIOQueue: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_GetAsyncIOResult(SDL_AsyncIOQueue *queue, SDL_AsyncIOOutcome *outcome);                                              // Query an async I/O task queue for completed tasks.
  SDL_GetAsyncIOResult: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitAsyncIOResult(SDL_AsyncIOQueue *queue, SDL_AsyncIOOutcome *outcome, Sint32 timeoutMS);                           // Block until an async I/O task queue has a completed task.
  SDL_WaitAsyncIOResult: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_SignalAsyncIOQueue(SDL_AsyncIOQueue *queue);                                                                         // Wake up any threads that are blocking in SDL_WaitAsyncIOResult().
  SDL_SignalAsyncIOQueue: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_LoadFileAsync(const char *file, SDL_AsyncIOQueue *queue, void *userdata);                                            // Load all the data from a file path, asynchronously.
  SDL_LoadFileAsync: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
