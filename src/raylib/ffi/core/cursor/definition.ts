import { FFIType, type FFIFunction } from 'bun:ffi';

export const CursorDefinition = {
  // void ShowCursor(void);
  ShowCursor: {
    args: [],
    returns: FFIType.void,
  },
  // void HideCursor(void);
  HideCursor: {
    args: [],
    returns: FFIType.void,
  },
  // bool IsCursorHidden(void);
  IsCursorHidden: {
    args: [],
    returns: FFIType.bool,
  },
  // void EnableCursor(void);
  EnableCursor: {
    args: [],
    returns: FFIType.void,
  },
  // void DisableCursor(void);
  DisableCursor: {
    args: [],
    returns: FFIType.void,
  },
  // bool IsCursorOnScreen(void);
  IsCursorOnScreen: {
    args: [],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
