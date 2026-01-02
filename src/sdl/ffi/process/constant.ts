export const ProcessIO = {
  INHERITED: 0 /**< The I/O stream is inherited from the application. */,
  NULL: 1 /**< The I/O stream is ignored. */,
  APP: 2 /**< The I/O stream is connected to a new SDL_IOStream that the application can read or write */,
  REDIRECT: 3 /**< The I/O stream is redirected to an existing SDL_IOStream. */,
} as const;

export type ProcessIO = (typeof ProcessIO)[keyof typeof ProcessIO];
