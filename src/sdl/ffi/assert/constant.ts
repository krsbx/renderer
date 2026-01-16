import type { Brand } from '../../types/shared';

const RawAssertState = {
  RETRY: 0 /**< Retry the assert immediately. */,
  BREAK: 1 /**< Make the debugger trigger a breakpoint. */,
  ABORT: 2 /**< Terminate the program. */,
  IGNORE: 3 /**< Ignore the assert. */,
  ALWAYS_IGNORE: 4 /**< Ignore the assert from now on. */,
} as const;

export const AssertState = RawAssertState as Readonly<
  Record<keyof typeof RawAssertState, Brand<number, 'AssertState'>>
>;

export type AssertState = (typeof AssertState)[keyof typeof AssertState];
