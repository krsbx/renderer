import { FFIType, type FFIFunction } from 'bun:ffi';

export const RectangleDefinition = {
  // void DrawRectangle(int posX, int posY, int width, int height, Color color);
  DrawRectangle: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleV(Vector2 position, Vector2 size, Color color);
  DrawRectangleV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleRec(Rectangle rec, Color color);
  DrawRectangleRec: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectanglePro(Rectangle rec, Vector2 origin, float rotation, Color color);
  DrawRectanglePro: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleGradientV(int posX, int posY, int width, int height, Color top, Color bottom);
  DrawRectangleGradientV: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
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
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawRectangleGradientEx(Rectangle rec, Color topLeft, Color bottomLeft, Color topRight, Color bottomRight);
  DrawRectangleGradientEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleLines(int posX, int posY, int width, int height, Color color);
  DrawRectangleLines: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleLinesEx(Rectangle rec, float lineThick, Color color);
  DrawRectangleLinesEx: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleRounded(Rectangle rec, float roundness, int segments, Color color);
  DrawRectangleRounded: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleRoundedLines(Rectangle rec, float roundness, int segments, Color color);
  DrawRectangleRoundedLines: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRectangleRoundedLinesEx(Rectangle rec, float roundness, int segments, float lineThick, Color color);
  DrawRectangleRoundedLinesEx: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
