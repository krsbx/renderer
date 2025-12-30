export const AsyncIOTaskType = {
  SDL_ASYNCIO_TASK_READ: 0 /**< A read operation. */,
  SDL_ASYNCIO_TASK_WRITE: 1 /**< A write operation. */,
  SDL_ASYNCIO_TASK_CLOSE: 2 /**< A close operation. */,
} as const;

export type AsyncIOTaskType =
  (typeof AsyncIOTaskType)[keyof typeof AsyncIOTaskType];

export const AsyncIOResult = {
  SDL_ASYNCIO_COMPLETE: 0,
  SDL_ASYNCIO_FAILURE: 1,
  SDL_ASYNCIO_CANCELED: 2,
} as const;

export type AsyncIOResult = (typeof AsyncIOResult)[keyof typeof AsyncIOResult];
