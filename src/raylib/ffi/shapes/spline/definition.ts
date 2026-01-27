import { FFIType, type FFIFunction } from 'bun:ffi';

export const SplineDefinition = {
  // void DrawSplineLinear(const Vector2 *points, int pointCount, float thick, Color color);
  DrawSplineLinear: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSplineBasis(const Vector2 *points, int pointCount, float thick, Color color);
  DrawSplineBasis: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSplineCatmullRom(const Vector2 *points, int pointCount, float thick, Color color);
  DrawSplineCatmullRom: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSplineBezierQuadratic(const Vector2 *points, int pointCount, float thick, Color color);
  DrawSplineBezierQuadratic: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSplineBezierCubic(const Vector2 *points, int pointCount, float thick, Color color);
  DrawSplineBezierCubic: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSplineSegmentLinear(Vector2 p1, Vector2 p2, float thick, Color color);
  DrawSplineSegmentLinear: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSplineSegmentBasis(Vector2 p1, Vector2 p2, Vector2 p3, Vector2 p4, float thick, Color color);
  DrawSplineSegmentBasis: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawSplineSegmentCatmullRom(Vector2 p1, Vector2 p2, Vector2 p3, Vector2 p4, float thick, Color color);
  DrawSplineSegmentCatmullRom: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawSplineSegmentBezierQuadratic(Vector2 p1, Vector2 c2, Vector2 p3, float thick, Color color);
  DrawSplineSegmentBezierQuadratic: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSplineSegmentBezierCubic(Vector2 p1, Vector2 c2, Vector2 c3, Vector2 p4, float thick, Color color);
  DrawSplineSegmentBezierCubic: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },

  // Spline point functions - SHIMMED
  // Vector2 GetSplinePointLinear(Vector2 startPos, Vector2 endPos, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Vector2 GetSplinePointBasis(Vector2 p1, Vector2 p2, Vector2 p3, Vector2 p4, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Vector2 GetSplinePointCatmullRom(Vector2 p1, Vector2 p2, Vector2 p3, Vector2 p4, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Vector2 GetSplinePointBezierQuad(Vector2 p1, Vector2 c2, Vector2 p3, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Vector2 GetSplinePointBezierCubic(Vector2 p1, Vector2 c2, Vector2 c3, Vector2 p4, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
} satisfies Record<string, FFIFunction>;
