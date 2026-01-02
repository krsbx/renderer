export const IOStatus = {
  READY: 0 /**< Everything is ready (no errors and not EOF). */,
  ERROR: 1 /**< Read or write I/O error */,
  EOF: 2 /**< End of file */,
  NOT_READY: 3 /**< Non blocking I/O, not ready */,
  READONLY: 4 /**< Tried to write a read-only buffer */,
  WRITEONLY: 5 /**< Tried to read a write-only buffer */,
} as const;

export type IOStatus = (typeof IOStatus)[keyof typeof IOStatus];

export const IOWhence = {
  SET: 0 /**< Seek from the beginning of data */,
  END: 1 /**< Seek relative to the end of data */,
  CUR: 2 /**< Seek relative to current read point */,
} as const;

export type IOWhence = (typeof IOWhence)[keyof typeof IOWhence];
