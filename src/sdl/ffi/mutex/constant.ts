import type { Brand } from '../../types/shared';

const RawInitStatus = {
  UNINITIALIZED: 0,
  INITIALIZING: 1,
  INITIALIZED: 2,
  UNINITIALIZING: 3,
} as const;

export const InitStatus = RawInitStatus as Readonly<
  Record<keyof typeof RawInitStatus, Brand<number, 'InitStatus'>>
>;

export type InitStatus = (typeof InitStatus)[keyof typeof InitStatus];
