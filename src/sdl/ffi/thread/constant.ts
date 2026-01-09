export enum ThreadPriority {
  LOW = 0,
  NORMAL = 1,
  HIGH = 2,
  TIME_CRITICAL = 3,
}

export enum ThreadState {
  UNKNOWN = 0,
  ALIVE = 1,
  DETACHED = 2,
  COMPLETE = 3,
}
