import { FFIType, type FFIFunction } from 'bun:ffi';

export const TimingDefinition = {
  // void SetTargetFPS(int fps);
  SetTargetFPS: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // float GetFrameTime(void);
  GetFrameTime: {
    args: [],
    returns: FFIType.f32,
  },
  // double GetTime(void);
  GetTime: {
    args: [],
    returns: FFIType.f64,
  },
  // int GetFPS(void);
  GetFPS: {
    args: [],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
