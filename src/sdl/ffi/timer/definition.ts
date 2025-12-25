import { type FFIFunction, FFIType } from 'bun:ffi';

export const TimerDefinition = {
  // Uint64 SDL_GetTicks(void);                                                                  // Get the number of milliseconds that have elapsed since the SDL library initialization.
  SDL_GetTicks: {
    args: [],
    returns: FFIType.u64,
  },
  // Uint64 SDL_GetTicksNS(void);                                                                // Get the number of nanoseconds since SDL library initialization.
  SDL_GetTicksNS: {
    args: [],
    returns: FFIType.u64,
  },
  // Uint64 SDL_GetPerformanceCounter(void);                                                     // Get the current value of the high resolution counter.
  SDL_GetPerformanceCounter: {
    args: [],
    returns: FFIType.u64,
  },
  // Uint64 SDL_GetPerformanceFrequency(void);                                                   // Get the count per second of the high resolution counter.
  SDL_GetPerformanceFrequency: {
    args: [],
    returns: FFIType.u64,
  },
  // void SDL_Delay(Uint32 ms);                                                                  // Wait a specified number of milliseconds before returning.
  SDL_Delay: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_DelayNS(Uint64 ns);                                                                // Wait a specified number of nanoseconds before returning.
  SDL_DelayNS: {
    args: [FFIType.u64],
    returns: FFIType.void,
  },
  // void SDL_DelayPrecise(Uint64 ns);                                                           // Wait a specified number of nanoseconds before returning.
  SDL_DelayPrecise: {
    args: [FFIType.u64],
    returns: FFIType.void,
  },
  // SDL_TimerID SDL_AddTimer(Uint32 interval, SDL_TimerCallback callback, void *userdata);      // Call a callback function at a future time.
  SDL_AddTimer: {
    args: [FFIType.u32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_TimerID SDL_AddTimerNS(Uint64 interval, SDL_NSTimerCallback callback, void *userdata);  // Call a callback function at a future time.
  SDL_AddTimerNS: {
    args: [FFIType.u64, FFIType.ptr, FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_RemoveTimer(SDL_TimerID id);                                                       // Remove a timer created with SDL_AddTimer().
  SDL_RemoveTimer: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
