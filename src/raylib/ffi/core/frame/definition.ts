import { FFIType, type FFIFunction } from 'bun:ffi';

export const FrameDefinition = {
  // void SwapScreenBuffer(void);
  SwapScreenBuffer: {
    args: [],
    returns: FFIType.void,
  },
  // void PollInputEvents(void);
  PollInputEvents: {
    args: [],
    returns: FFIType.void,
  },
  // void WaitTime(double seconds);
  WaitTime: {
    args: [FFIType.f64],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
