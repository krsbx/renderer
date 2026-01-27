import { FFIType, type FFIFunction } from 'bun:ffi';

export const FontDefinition = {
  // Font GetFontDefault(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Font LoadFont(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Font LoadFontEx(const char *fileName, int fontSize, int *codepoints, int codepointCount);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Font LoadFontFromImage(Image image, Color key, int firstChar);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Font LoadFontFromMemory(const char *fileType, const unsigned char *fileData, int dataSize, int fontSize, int *codepoints, int codepointCount);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsFontValid(Font font);
  IsFontValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // GlyphInfo *LoadFontData(const unsigned char *fileData, int dataSize, int fontSize, int *codepoints, int codepointCount, int type);
  LoadFontData: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
    ],
    returns: FFIType.ptr,
  },
  // Image GenImageFontAtlas(const GlyphInfo *glyphs, Rectangle **glyphRecs, int glyphCount, int fontSize, int padding, int packMethod);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // void UnloadFontData(GlyphInfo *glyphs, int glyphCount);
  UnloadFontData: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void UnloadFont(Font font);
  UnloadFont: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool ExportFontAsCode(Font font, const char *fileName);
  ExportFontAsCode: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
