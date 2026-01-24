import type { Brand } from '@/types/shared';

const RawThreadPriority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
  TIME_CRITICAL: 3,
} as const;

export const ThreadPriority = RawThreadPriority as Readonly<
  Record<keyof typeof RawThreadPriority, Brand<number, 'ThreadPriority'>>
>;

export type ThreadPriority =
  (typeof ThreadPriority)[keyof typeof ThreadPriority];

const RawThreadState = {
  UNKNOWN: 0,
  ALIVE: 1,
  DETACHED: 2,
  COMPLETE: 3,
} as const;

export const ThreadState = RawThreadState as Readonly<
  Record<keyof typeof RawThreadState, Brand<number, 'ThreadState'>>
>;

export type ThreadState = (typeof ThreadState)[keyof typeof ThreadState];
