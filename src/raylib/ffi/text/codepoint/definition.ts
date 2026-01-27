import { FFIType, type FFIFunction } from 'bun:ffi';

export const CodepointDefinition = {
  // char *LoadUTF8(const int *codepoints, int length);
  LoadUTF8: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // void UnloadUTF8(char *text);
  UnloadUTF8: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // int *LoadCodepoints(const char *text, int *count);
  LoadCodepoints: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UnloadCodepoints(int *codepoints);
  UnloadCodepoints: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // int GetCodepointCount(const char *text);
  GetCodepointCount: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // int GetCodepoint(const char *text, int *codepointSize);
  GetCodepoint: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int GetCodepointNext(const char *text, int *codepointSize);
  GetCodepointNext: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int GetCodepointPrevious(const char *text, int *codepointSize);
  GetCodepointPrevious: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.i32,
  },
  // const char *CodepointToUTF8(int codepoint, int *utf8Size);
  CodepointToUTF8: {
    args: [FFIType.i32, FFIType.ptr],
    returns: FFIType.cstring,
  },
} satisfies Record<string, FFIFunction>;
