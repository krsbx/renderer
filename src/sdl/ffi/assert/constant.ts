export const AssertState = {
  SDL_ASSERTION_RETRY: 0 /**< Retry the assert immediately. */,
  SDL_ASSERTION_BREAK: 1 /**< Make the debugger trigger a breakpoint. */,
  SDL_ASSERTION_ABORT: 2 /**< Terminate the program. */,
  SDL_ASSERTION_IGNORE: 3 /**< Ignore the assert. */,
  SDL_ASSERTION_ALWAYS_IGNORE: 4 /**< Ignore the assert from now on. */,
} as const;

export type AssertState = (typeof AssertState)[keyof typeof AssertState];
