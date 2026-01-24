import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextDefinition = {
  // #region Font loading/unloading functions

  // Font GetFontDefault(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetFontDefault: { args: [], returns: FFIType.ptr },

  // Font LoadFont(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadFont: { args: [FFIType.cstring], returns: FFIType.ptr },

  // Font LoadFontEx(const char *fileName, int fontSize, int *codepoints, int codepointCount);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadFontEx: { args: [FFIType.cstring, FFIType.i32, FFIType.ptr, FFIType.i32], returns: FFIType.ptr },

  // Font LoadFontFromImage(Image image, Color key, int firstChar);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadFontFromImage: { args: [FFIType.ptr, FFIType.u32, FFIType.i32], returns: FFIType.ptr },

  // Font LoadFontFromMemory(const char *fileType, const unsigned char *fileData, int dataSize, int fontSize, int *codepoints, int codepointCount);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadFontFromMemory: { args: [FFIType.cstring, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.i32], returns: FFIType.ptr },

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
  // NOTE: Returns Image struct - needs shim
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageFontAtlas: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

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

  // #endregion Font loading/unloading functions

  // #region Text drawing functions

  // void DrawFPS(int posX, int posY);
  DrawFPS: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void DrawText(const char *text, int posX, int posY, int fontSize, Color color);
  DrawText: {
    args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32],
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
      FFIType.u32,
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawTextCodepoint(Font font, int codepoint, Vector2 position, float fontSize, Color tint);
  DrawTextCodepoint: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.f32, FFIType.u32],
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },

  // #endregion Text drawing functions

  // #region Text font info functions

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
  // NOTE: Returns Vector2 struct - needs shim
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // MeasureTextEx: { args: [FFIType.ptr, FFIType.cstring, FFIType.f32, FFIType.f32], returns: FFIType.ptr },

  // int GetGlyphIndex(Font font, int codepoint);
  GetGlyphIndex: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },

  // GlyphInfo GetGlyphInfo(Font font, int codepoint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetGlyphInfo: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },

  // Rectangle GetGlyphAtlasRec(Font font, int codepoint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetGlyphAtlasRec: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },

  // #endregion Text font info functions

  // #region Text codepoints management functions (unicode characters)

  // char *LoadUTF8(const int *codepoints, int length);
  LoadUTF8: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // void UnloadUTF8(char *text);
  UnloadUTF8: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // int *LoadCodepoints(const char *text, int *count);
  LoadCodepoints: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UnloadCodepoints(int *codepoints);
  UnloadCodepoints: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // int GetCodepointCount(const char *text);
  GetCodepointCount: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // int GetCodepoint(const char *text, int *codepointSize);
  GetCodepoint: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int GetCodepointNext(const char *text, int *codepointSize);
  GetCodepointNext: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int GetCodepointPrevious(const char *text, int *codepointSize);
  GetCodepointPrevious: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.i32,
  },
  // const char *CodepointToUTF8(int codepoint, int *utf8Size);
  CodepointToUTF8: {
    args: [FFIType.i32, FFIType.ptr],
    returns: FFIType.cstring,
  },

  // #endregion Text codepoints management functions

  // #region Text strings management functions (no UTF-8 strings, only byte chars)
  // NOTE: Some strings allocate memory internally for returned strings, just be careful!

  // int TextCopy(char *dst, const char *src);
  TextCopy: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.i32,
  },
  // bool TextIsEqual(const char *text1, const char *text2);
  TextIsEqual: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // unsigned int TextLength(const char *text);
  TextLength: {
    args: [FFIType.cstring],
    returns: FFIType.u32,
  },
  // const char *TextFormat(const char *text, ...);
  // NOTE: Variadic function - not supported in FFI directly
  // TextFormat: { args: [FFIType.cstring], returns: FFIType.cstring },

  // const char *TextSubtext(const char *text, int position, int length);
  TextSubtext: {
    args: [FFIType.cstring, FFIType.i32, FFIType.i32],
    returns: FFIType.cstring,
  },
  // char *TextReplace(const char *text, const char *replace, const char *by);
  // NOTE: Memory must be freed!
  TextReplace: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // char *TextInsert(const char *text, const char *insert, int position);
  // NOTE: Memory must be freed!
  TextInsert: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.i32],
    returns: FFIType.ptr,
  },
  // const char *TextJoin(const char **textList, int count, const char *delimiter);
  TextJoin: {
    args: [FFIType.ptr, FFIType.i32, FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char **TextSplit(const char *text, char delimiter, int *count);
  TextSplit: {
    args: [FFIType.cstring, FFIType.i8, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void TextAppend(char *text, const char *append, int *position);
  TextAppend: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  // int TextFindIndex(const char *text, const char *find);
  TextFindIndex: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.i32,
  },
  // const char *TextToUpper(const char *text);
  TextToUpper: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToLower(const char *text);
  TextToLower: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToPascal(const char *text);
  TextToPascal: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToSnake(const char *text);
  TextToSnake: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToCamel(const char *text);
  TextToCamel: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // int TextToInteger(const char *text);
  TextToInteger: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // float TextToFloat(const char *text);
  TextToFloat: {
    args: [FFIType.cstring],
    returns: FFIType.f32,
  },

  // #endregion Text strings management functions
} satisfies Record<string, FFIFunction>;
