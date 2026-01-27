import { FFIType, type FFIFunction } from 'bun:ffi';

export const BasicShapeDefinition = {
  // void SetShapesTexture(Texture2D texture, Rectangle source);
  SetShapesTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },

  // Texture2D GetShapesTexture(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Rectangle GetShapesTextureRectangle(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // void DrawPixel(int posX, int posY, Color color);
  DrawPixel: {
    args: [FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawPixelV(Vector2 position, Color color);
  DrawPixelV: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawLine(int startPosX, int startPosY, int endPosX, int endPosY, Color color);
  DrawLine: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawLineV(Vector2 startPos, Vector2 endPos, Color color);
  DrawLineV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawLineEx(Vector2 startPos, Vector2 endPos, float thick, Color color);
  DrawLineEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawLineStrip(const Vector2 *points, int pointCount, Color color);
  DrawLineStrip: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawLineBezier(Vector2 startPos, Vector2 endPos, float thick, Color color);
  DrawLineBezier: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
