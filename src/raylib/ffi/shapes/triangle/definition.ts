import { FFIType, type FFIFunction } from 'bun:ffi';

export const TriangleDefinition = {
  // void DrawTriangle(Vector2 v1, Vector2 v2, Vector2 v3, Color color);
  DrawTriangle: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTriangleLines(Vector2 v1, Vector2 v2, Vector2 v3, Color color);
  DrawTriangleLines: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTriangleFan(const Vector2 *points, int pointCount, Color color);
  DrawTriangleFan: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTriangleStrip(const Vector2 *points, int pointCount, Color color);
  DrawTriangleStrip: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
