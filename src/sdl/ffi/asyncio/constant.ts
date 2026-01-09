export enum AsyncIOTaskType {
  READ = 0 /**< A read operation. */,
  WRITE = 1 /**< A write operation. */,
  CLOSE = 2 /**< A close operation. */,
}

export enum AsyncIOResult {
  COMPLETE = 0,
  FAILURE = 1,
  CANCELED = 2,
}
