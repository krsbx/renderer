export const AsyncIOTaskType = {
  READ: 0 /**< A read operation. */,
  WRITE: 1 /**< A write operation. */,
  CLOSE: 2 /**< A close operation. */,
} as const;

export type AsyncIOTaskType =
  (typeof AsyncIOTaskType)[keyof typeof AsyncIOTaskType];

export const AsyncIOResult = {
  COMPLETE: 0,
  FAILURE: 1,
  CANCELED: 2,
} as const;

export type AsyncIOResult = (typeof AsyncIOResult)[keyof typeof AsyncIOResult];
