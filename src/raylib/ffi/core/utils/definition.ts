import { FFIType, type FFIFunction } from 'bun:ffi';

export const UtilsDefinition = {
  // void TraceLog(int logLevel, const char *text, ...);
  // Note: Variadic function - basic version without varargs
  TraceLog: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SetTraceLogLevel(int logLevel);
  SetTraceLogLevel: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // void *MemAlloc(unsigned int size);
  MemAlloc: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // void *MemRealloc(void *ptr, unsigned int size);
  MemRealloc: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.ptr,
  },
  // void MemFree(void *ptr);
  MemFree: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
