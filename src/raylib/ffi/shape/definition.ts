import { FFIType, type FFIFunction } from 'bun:ffi';

export const ShapeDefinition = {
  // Set texture and rectangle to be used on shapes drawing
  // void SetShapesTexture(Texture2D texture, Rectangle source);
  SetShapesTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },

  // Texture2D GetShapesTexture(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetShapesTexture: { args: [], returns: FFIType.ptr },

  // Rectangle GetShapesTextureRectangle(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetShapesTextureRectangle: { args: [], returns: FFIType.ptr },

  // #region Basic shapes drawing functions

  // void DrawPixel(int posX, int posY, Color color);
  DrawPixel: {
    args: [FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawPixelV(Vector2 position, Color color);
  DrawPixelV: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawLine(int startPosX, int startPosY, int endPosX, int endPosY, Color color);
  DrawLine: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawLineV(Vector2 startPos, Vector2 endPos, Color color);
  DrawLineV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawLineEx(Vector2 startPos, Vector2 endPos, float thick, Color color);
  DrawLineEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawLineStrip(const Vector2 *points, int pointCount, Color color);
  DrawLineStrip: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawLineBezier(Vector2 startPos, Vector2 endPos, float thick, Color color);
  DrawLineBezier: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },

  // #endregion Basic shapes drawing functions

  // #region Circle drawing functions

  // void DrawCircle(int centerX, int centerY, float radius, Color color);
  DrawCircle: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.u32],
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
      FFIType.u32,
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawCircleGradient(int centerX, int centerY, float radius, Color inner, Color outer);
  DrawCircleGradient: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCircleV(Vector2 center, float radius, Color color);
  DrawCircleV: {
    args: [FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCircleLines(int centerX, int centerY, float radius, Color color);
  DrawCircleLines: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCircleLinesV(Vector2 center, float radius, Color color);
  DrawCircleLinesV: {
    args: [FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },

  // #endregion Circle drawing functions

  // #region Ellipse drawing functions

  // void DrawEllipse(int centerX, int centerY, float radiusH, float radiusV, Color color);
  DrawEllipse: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawEllipseLines(int centerX, int centerY, float radiusH, float radiusV, Color color);
  DrawEllipseLines: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },

  // #endregion Ellipse drawing functions

  // #region Ring drawing functions

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

  // #endregion Ring drawing functions

  // #region Rectangle drawing functions

  // void DrawRectangle(int posX, int posY, int width, int height, Color color);
  DrawRectangle: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleV(Vector2 position, Vector2 size, Color color);
  DrawRectangleV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleRec(Rectangle rec, Color color);
  DrawRectangleRec: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectanglePro(Rectangle rec, Vector2 origin, float rotation, Color color);
  DrawRectanglePro: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleGradientV(int posX, int posY, int width, int height, Color top, Color bottom);
  DrawRectangleGradientV: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawRectangleGradientH(int posX, int posY, int width, int height, Color left, Color right);
  DrawRectangleGradientH: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawRectangleGradientEx(Rectangle rec, Color topLeft, Color bottomLeft, Color topRight, Color bottomRight);
  DrawRectangleGradientEx: {
    args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleLines(int posX, int posY, int width, int height, Color color);
  DrawRectangleLines: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleLinesEx(Rectangle rec, float lineThick, Color color);
  DrawRectangleLinesEx: {
    args: [FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleRounded(Rectangle rec, float roundness, int segments, Color color);
  DrawRectangleRounded: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleRoundedLines(Rectangle rec, float roundness, int segments, Color color);
  DrawRectangleRoundedLines: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRectangleRoundedLinesEx(Rectangle rec, float roundness, int segments, float lineThick, Color color);
  DrawRectangleRoundedLinesEx: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },

  // #endregion Rectangle drawing functions

  // #region Triangle drawing functions

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

  // #endregion Triangle drawing functions

  // #region Polygon drawing functions

  // void DrawPoly(Vector2 center, int sides, float radius, float rotation, Color color);
  DrawPoly: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawPolyLines(Vector2 center, int sides, float radius, float rotation, Color color);
  DrawPolyLines: {
    args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.u32],
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },

  // #endregion Polygon drawing functions

  // #region Spline drawing functions

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

  // #endregion Spline drawing functions

  // #region Spline point functions
  // NOTE: These functions return Vector2 structs and are SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Vector2 GetSplinePointLinear(Vector2 startPos, Vector2 endPos, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetSplinePointLinear: { args: [FFIType.ptr, FFIType.ptr, FFIType.f32], returns: FFIType.ptr },

  // Vector2 GetSplinePointBasis(Vector2 p1, Vector2 p2, Vector2 p3, Vector2 p4, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetSplinePointBasis: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32], returns: FFIType.ptr },

  // Vector2 GetSplinePointCatmullRom(Vector2 p1, Vector2 p2, Vector2 p3, Vector2 p4, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetSplinePointCatmullRom: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32], returns: FFIType.ptr },

  // Vector2 GetSplinePointBezierQuad(Vector2 p1, Vector2 c2, Vector2 p3, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetSplinePointBezierQuad: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32], returns: FFIType.ptr },

  // Vector2 GetSplinePointBezierCubic(Vector2 p1, Vector2 c2, Vector2 c3, Vector2 p4, float t);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetSplinePointBezierCubic: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32], returns: FFIType.ptr },

  // #endregion Spline point functions

  // #region Collision detection functions

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
  // GetCollisionRec: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // #endregion Collision detection functions
} satisfies Record<string, FFIFunction>;
