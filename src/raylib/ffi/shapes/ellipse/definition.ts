import { FFIType, type FFIFunction } from 'bun:ffi';

export const EllipseDefinition = {
  // void DrawEllipse(int centerX, int centerY, float radiusH, float radiusV, Color color);
  DrawEllipse: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawEllipseLines(int centerX, int centerY, float radiusH, float radiusV, Color color);
  DrawEllipseLines: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
