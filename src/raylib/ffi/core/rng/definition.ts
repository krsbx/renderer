import { FFIType, type FFIFunction } from 'bun:ffi';

export const RNGDefinition = {
  // void SetRandomSeed(unsigned int seed);
  SetRandomSeed: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // int GetRandomValue(int min, int max);
  GetRandomValue: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  // int *LoadRandomSequence(unsigned int count, int min, int max);
  LoadRandomSequence: {
    args: [FFIType.u32, FFIType.i32, FFIType.i32],
    returns: FFIType.ptr,
  },
  // void UnloadRandomSequence(int *sequence);
  UnloadRandomSequence: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
