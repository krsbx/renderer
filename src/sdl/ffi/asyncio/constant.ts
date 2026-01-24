import type { Brand } from '@/types/shared';

const RawAsyncIOTaskType = {
  READ: 0,
  WRITE: 1,
  CLOSE: 2,
} as const;

export const AsyncIOTaskType = RawAsyncIOTaskType as Readonly<
  Record<keyof typeof RawAsyncIOTaskType, Brand<number, 'AsyncIOTaskType'>>
>;

export type AsyncIOTaskType =
  (typeof AsyncIOTaskType)[keyof typeof AsyncIOTaskType];

const RawAsyncIOResult = {
  COMPLETE: 0,
  FAILURE: 1,
  CANCELED: 2,
} as const;

export const AsyncIOResult = RawAsyncIOResult as Readonly<
  Record<keyof typeof RawAsyncIOResult, Brand<number, 'AsyncIOResult'>>
>;

export type AsyncIOResult = (typeof AsyncIOResult)[keyof typeof AsyncIOResult];
