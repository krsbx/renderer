#undef Fade
#undef ColorNormalize
#undef ColorToHSV
#undef ColorFromNormalized
#undef ColorFromHSV
#undef ColorTint
#undef ColorBrightness
#undef ColorContrast
#undef ColorAlpha
#undef ColorAlphaBlend
#undef ColorLerp
#undef GetColor
#undef GetPixelColor

SHIM_2(Color, Fade, Color, color, float, alpha)
SHIM_1(Vector4, ColorNormalize, Color, color)
SHIM_1(Vector3, ColorToHSV, Color, color)
SHIM_1(Color, ColorFromNormalized, Vector4, normalized)
SHIM_3(Color, ColorFromHSV, float, hue, float, saturation, float, value)
SHIM_2(Color, ColorTint, Color, color, Color, tint)
SHIM_2(Color, ColorBrightness, Color, color, float, factor)
SHIM_2(Color, ColorContrast, Color, color, float, contrast)
SHIM_2(Color, ColorAlpha, Color, color, float, alpha)
SHIM_3(Color, ColorAlphaBlend, Color, dst, Color, src, Color, tint)
SHIM_3(Color, ColorLerp, Color, color1, Color, color2, float, factor)
SHIM_1(Color, GetColor, unsigned int, hexValue)
SHIM_2(Color, GetPixelColor, void*, srcPtr, int, format)
