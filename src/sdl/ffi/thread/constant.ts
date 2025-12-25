export const ThreadPriority = {
  SDL_THREAD_PRIORITY_LOW: 0,
  SDL_THREAD_PRIORITY_NORMAL: 1,
  SDL_THREAD_PRIORITY_HIGH: 2,
  SDL_THREAD_PRIORITY_TIME_CRITICAL: 3,
} as const;

export type ThreadPriority =
  (typeof ThreadPriority)[keyof typeof ThreadPriority];

export const ThreadState = {
  SDL_THREAD_UNKNOWN: 0,
  SDL_THREAD_ALIVE: 1,
  SDL_THREAD_DETACHED: 2,
  SDL_THREAD_COMPLETE: 3,
} as const;

export type ThreadState = (typeof ThreadState)[keyof typeof ThreadState];
