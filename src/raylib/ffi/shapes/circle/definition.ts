import { FFIType, type FFIFunction } from 'bun:ffi';

export const CircleDefinition = {
  // void DrawCircle(int centerX, int centerY, float radius, Color color);
  DrawCircle: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCircleSector(Vector2 center, float radius, float startAngle, float endAngle, int segments, Color color);
  DrawCircleSector: {
    args: [
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawCircleSectorLines(Vector2 center, float radius, float startAngle, float endAngle, int segments, Color color);
  DrawCircleSectorLines: {
    args: [
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawCircleGradient(int centerX, int centerY, float radius, Color inner, Color outer);
  DrawCircleGradient: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCircleV(Vector2 center, float radius, Color color);
  DrawCircleV: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCircleLines(int centerX, int centerY, float radius, Color color);
  DrawCircleLines: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCircleLinesV(Vector2 center, float radius, Color color);
  DrawCircleLinesV: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
