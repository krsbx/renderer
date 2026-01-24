import { FFIType, type FFIFunction } from 'bun:ffi';

export const MiscDefinition = {
  // void TakeScreenshot(const char *fileName);
  TakeScreenshot: {
    args: [FFIType.cstring],
    returns: FFIType.void,
  },
  // void SetConfigFlags(unsigned int flags);
  SetConfigFlags: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // void OpenURL(const char *url);
  OpenURL: {
    args: [FFIType.cstring],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
