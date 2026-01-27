import { FFIType, type FFIFunction } from 'bun:ffi';

export const ColorDefinition = {
  // Color Fade(Color color, float alpha);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Vector4 ColorNormalize(Color color);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorFromNormalized(Vector4 normalized);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Vector3 ColorToHSV(Color color);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorFromHSV(float hue, float saturation, float value);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorTint(Color color, Color tint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorBrightness(Color color, float factor);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorContrast(Color color, float contrast);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorAlpha(Color color, float alpha);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorAlphaBlend(Color dst, Color src, Color tint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color ColorLerp(Color color1, Color color2, float amount);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color GetColor(unsigned int hexValue);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color GetPixelColor(void *srcPtr, int format);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool ColorIsEqual(Color col1, Color col2);
  ColorIsEqual: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // int ColorToInt(Color color);
  ColorToInt: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // void SetPixelColor(void *dstPtr, Color color, int format);
  SetPixelColor: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // int GetPixelDataSize(int width, int height, int format);
  GetPixelDataSize: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
