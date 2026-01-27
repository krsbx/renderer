import { FFIType, type FFIFunction } from 'bun:ffi';

export const RingDefinition = {
  // void DrawRing(Vector2 center, float innerRadius, float outerRadius, float startAngle, float endAngle, int segments, Color color);
  DrawRing: {
    args: [
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawRingLines(Vector2 center, float innerRadius, float outerRadius, float startAngle, float endAngle, int segments, Color color);
  DrawRingLines: {
    args: [
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
