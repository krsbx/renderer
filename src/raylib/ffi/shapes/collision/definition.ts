import { FFIType, type FFIFunction } from 'bun:ffi';

export const ShapeCollisionDefinition = {
  // bool CheckCollisionRecs(Rectangle rec1, Rectangle rec2);
  CheckCollisionRecs: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool CheckCollisionCircles(Vector2 center1, float radius1, Vector2 center2, float radius2);
  CheckCollisionCircles: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool CheckCollisionCircleRec(Vector2 center, float radius, Rectangle rec);
  CheckCollisionCircleRec: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool CheckCollisionCircleLine(Vector2 center, float radius, Vector2 p1, Vector2 p2);
  CheckCollisionCircleLine: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool CheckCollisionPointRec(Vector2 point, Rectangle rec);
  CheckCollisionPointRec: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool CheckCollisionPointCircle(Vector2 point, Vector2 center, float radius);
  CheckCollisionPointCircle: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool CheckCollisionPointTriangle(Vector2 point, Vector2 p1, Vector2 p2, Vector2 p3);
  CheckCollisionPointTriangle: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool CheckCollisionPointLine(Vector2 point, Vector2 p1, Vector2 p2, int threshold);
  CheckCollisionPointLine: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool CheckCollisionPointPoly(Vector2 point, const Vector2 *points, int pointCount);
  CheckCollisionPointPoly: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool CheckCollisionLines(Vector2 startPos1, Vector2 endPos1, Vector2 startPos2, Vector2 endPos2, Vector2 *collisionPoint);
  CheckCollisionLines: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // Rectangle GetCollisionRec(Rectangle rec1, Rectangle rec2);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
} satisfies Record<string, FFIFunction>;
