import { FFIType, type FFIFunction } from 'bun:ffi';

export const PolygonDefinition = {
  // void DrawPoly(Vector2 center, int sides, float radius, float rotation, Color color);
  DrawPoly: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawPolyLines(Vector2 center, int sides, float radius, float rotation, Color color);
  DrawPolyLines: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawPolyLinesEx(Vector2 center, int sides, float radius, float rotation, float lineThick, Color color);
  DrawPolyLinesEx: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
