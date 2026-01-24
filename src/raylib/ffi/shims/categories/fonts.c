#undef GetFontDefault
#undef LoadFont
#undef LoadFontEx
#undef LoadFontFromImage
#undef LoadFontFromMemory
#undef GetGlyphInfo
#undef GetGlyphAtlasRec
#undef GenImageFontAtlas
#undef MeasureTextEx

SHIM_0(Font, GetFontDefault)
SHIM_1(Font, LoadFont, const char*, fileName)
SHIM_4(Font, LoadFontEx, const char*, fileName, int, fontSize, const int*, codepoints, int, codepointCount)
SHIM_3(Font, LoadFontFromImage, Image, image, Color, key, int, firstChar)
SHIM_6(Font, LoadFontFromMemory, const char*, fileType, const unsigned char*, fileData, int, dataSize, int, fontSize, const int*, codepoints, int, codepointCount)
SHIM_2(GlyphInfo, GetGlyphInfo, Font, font, int, codepoint)
SHIM_2(Rectangle, GetGlyphAtlasRec, Font, font, int, codepoint)
SHIM_6(Image, GenImageFontAtlas, const GlyphInfo*, glyphs, Rectangle**, glyphRecs, int, glyphCount, int, fontSize, int, padding, int, packMethod)
SHIM_4(Vector2, MeasureTextEx, Font, font, const char*, text, float, fontSize, float, spacing)
