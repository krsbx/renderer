import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextInfoDefinition = {
  // void SetTextLineSpacing(int spacing);
  SetTextLineSpacing: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // int MeasureText(const char *text, int fontSize);
  MeasureText: {
    args: [FFIType.cstring, FFIType.i32],
    returns: FFIType.i32,
  },
  // Vector2 MeasureTextEx(Font font, const char *text, float fontSize, float spacing);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // int GetGlyphIndex(Font font, int codepoint);
  GetGlyphIndex: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
  // GlyphInfo GetGlyphInfo(Font font, int codepoint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Rectangle GetGlyphAtlasRec(Font font, int codepoint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
} satisfies Record<string, FFIFunction>;
