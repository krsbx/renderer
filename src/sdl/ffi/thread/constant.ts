export const ThreadPriority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
  TIME_CRITICAL: 3,
} as const;

export type ThreadPriority =
  (typeof ThreadPriority)[keyof typeof ThreadPriority];

export const ThreadState = {
  UNKNOWN: 0,
  ALIVE: 1,
  DETACHED: 2,
  COMPLETE: 3,
} as const;

export type ThreadState = (typeof ThreadState)[keyof typeof ThreadState];
