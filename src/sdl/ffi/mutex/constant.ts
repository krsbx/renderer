export const InitStatus = {
  UNINITIALIZED: 0,
  INITIALIZING: 1,
  INITIALIZED: 2,
  UNINITIALIZING: 3,
} as const;

export type InitStatus = (typeof InitStatus)[keyof typeof InitStatus];
