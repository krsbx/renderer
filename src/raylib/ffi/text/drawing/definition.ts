import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextDrawingDefinition = {
  // void DrawFPS(int posX, int posY);
  DrawFPS: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void DrawText(const char *text, int posX, int posY, int fontSize, Color color);
  DrawText: {
    args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawTextEx(Font font, const char *text, Vector2 position, float fontSize, float spacing, Color tint);
  DrawTextEx: {
    args: [
      FFIType.ptr,
      FFIType.cstring,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawTextPro(Font font, const char *text, Vector2 position, Vector2 origin, float rotation, float fontSize, float spacing, Color tint);
  DrawTextPro: {
    args: [
      FFIType.ptr,
      FFIType.cstring,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawTextCodepoint(Font font, int codepoint, Vector2 position, float fontSize, Color tint);
  DrawTextCodepoint: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawTextCodepoints(Font font, const int *codepoints, int codepointCount, Vector2 position, float fontSize, float spacing, Color tint);
  DrawTextCodepoints: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
