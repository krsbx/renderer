import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextureDefinition = {
  // #region Image loading functions
  // NOTE: These functions return structs and are SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image LoadImage(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadImage: { args: [FFIType.cstring], returns: FFIType.ptr },

  // Image LoadImageRaw(const char *fileName, int width, int height, int format, int headerSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadImageRaw: { args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // Image LoadImageAnim(const char *fileName, int *frames);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadImageAnim: { args: [FFIType.cstring, FFIType.ptr], returns: FFIType.ptr },

  // Image LoadImageAnimFromMemory(const char *fileType, const unsigned char *fileData, int dataSize, int *frames);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadImageAnimFromMemory: { args: [FFIType.cstring, FFIType.ptr, FFIType.i32, FFIType.ptr], returns: FFIType.ptr },

  // Image LoadImageFromMemory(const char *fileType, const unsigned char *fileData, int dataSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadImageFromMemory: { args: [FFIType.cstring, FFIType.ptr, FFIType.i32], returns: FFIType.ptr },

  // Image LoadImageFromTexture(Texture2D texture);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadImageFromTexture: { args: [FFIType.ptr], returns: FFIType.ptr },

  // Image LoadImageFromScreen(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadImageFromScreen: { args: [], returns: FFIType.ptr },

  // bool IsImageValid(Image image);
  IsImageValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadImage(Image image);
  UnloadImage: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool ExportImage(Image image, const char *fileName);
  ExportImage: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // unsigned char *ExportImageToMemory(Image image, const char *fileType, int *fileSize);
  ExportImageToMemory: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool ExportImageAsCode(Image image, const char *fileName);
  ExportImageAsCode: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },

  // #endregion Image loading functions

  // #region Image generation functions
  // NOTE: These functions return Image structs and are SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image GenImageColor(int width, int height, Color color);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageColor: { args: [FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },

  // Image GenImageGradientLinear(int width, int height, int direction, Color start, Color end);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageGradientLinear: { args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32, FFIType.u32], returns: FFIType.ptr },

  // Image GenImageGradientRadial(int width, int height, float density, Color inner, Color outer);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageGradientRadial: { args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.u32, FFIType.u32], returns: FFIType.ptr },

  // Image GenImageGradientSquare(int width, int height, float density, Color inner, Color outer);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageGradientSquare: { args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.u32, FFIType.u32], returns: FFIType.ptr },

  // Image GenImageChecked(int width, int height, int checksX, int checksY, Color col1, Color col2);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageChecked: { args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32, FFIType.u32], returns: FFIType.ptr },

  // Image GenImageWhiteNoise(int width, int height, float factor);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageWhiteNoise: { args: [FFIType.i32, FFIType.i32, FFIType.f32], returns: FFIType.ptr },

  // Image GenImagePerlinNoise(int width, int height, int offsetX, int offsetY, float scale);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImagePerlinNoise: { args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.f32], returns: FFIType.ptr },

  // Image GenImageCellular(int width, int height, int tileSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenImageCellular: { args: [FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // Image GenImageText(int width, int height, const char *text);
  // NOTE: This returns Image, needs shim - skipping for now

  // #endregion Image generation functions

  // #region Image manipulation functions

  // Image ImageCopy(Image image);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ImageCopy: { args: [FFIType.ptr], returns: FFIType.ptr },

  // Image ImageFromImage(Image image, Rectangle rec);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ImageFromImage: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // Image ImageFromChannel(Image image, int selectedChannel);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ImageFromChannel: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },

  // Image ImageText(const char *text, int fontSize, Color color);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ImageText: { args: [FFIType.cstring, FFIType.i32, FFIType.u32], returns: FFIType.ptr },

  // Image ImageTextEx(Font font, const char *text, float fontSize, float spacing, Color tint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ImageTextEx: { args: [FFIType.ptr, FFIType.cstring, FFIType.f32, FFIType.f32, FFIType.u32], returns: FFIType.ptr },

  // void ImageFormat(Image *image, int newFormat);
  ImageFormat: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageToPOT(Image *image, Color fill);
  ImageToPOT: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageCrop(Image *image, Rectangle crop);
  ImageCrop: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageAlphaCrop(Image *image, float threshold);
  ImageAlphaCrop: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void ImageAlphaClear(Image *image, Color color, float threshold);
  ImageAlphaClear: {
    args: [FFIType.ptr, FFIType.u32, FFIType.f32],
    returns: FFIType.void,
  },
  // void ImageAlphaMask(Image *image, Image alphaMask);
  ImageAlphaMask: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageAlphaPremultiply(Image *image);
  ImageAlphaPremultiply: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageBlurGaussian(Image *image, int blurSize);
  ImageBlurGaussian: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageKernelConvolution(Image *image, const float *kernel, int kernelSize);
  ImageKernelConvolution: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageResize(Image *image, int newWidth, int newHeight);
  ImageResize: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageResizeNN(Image *image, int newWidth, int newHeight);
  ImageResizeNN: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageResizeCanvas(Image *image, int newWidth, int newHeight, int offsetX, int offsetY, Color fill);
  ImageResizeCanvas: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void ImageMipmaps(Image *image);
  ImageMipmaps: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDither(Image *image, int rBpp, int gBpp, int bBpp, int aBpp);
  ImageDither: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageFlipVertical(Image *image);
  ImageFlipVertical: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageFlipHorizontal(Image *image);
  ImageFlipHorizontal: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageRotate(Image *image, int degrees);
  ImageRotate: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageRotateCW(Image *image);
  ImageRotateCW: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageRotateCCW(Image *image);
  ImageRotateCCW: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageColorTint(Image *image, Color color);
  ImageColorTint: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageColorInvert(Image *image);
  ImageColorInvert: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageColorGrayscale(Image *image);
  ImageColorGrayscale: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageColorContrast(Image *image, float contrast);
  ImageColorContrast: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void ImageColorBrightness(Image *image, int brightness);
  ImageColorBrightness: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageColorReplace(Image *image, Color color, Color replace);
  ImageColorReplace: {
    args: [FFIType.ptr, FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // Color *LoadImageColors(Image image);
  LoadImageColors: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Color *LoadImagePalette(Image image, int maxPaletteSize, int *colorCount);
  LoadImagePalette: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UnloadImageColors(Color *colors);
  UnloadImageColors: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void UnloadImagePalette(Color *colors);
  UnloadImagePalette: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },

  // #endregion Image manipulation functions

  // Color GetImageColor(Image image, int x, int y);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetImageColor: { args: [FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.u32 },

  // Rectangle GetImageAlphaBorder(Image image, float threshold);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetImageAlphaBorder: { args: [FFIType.ptr, FFIType.f32], returns: FFIType.ptr },

  // #region Image drawing functions

  // void ImageClearBackground(Image *dst, Color color);
  ImageClearBackground: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawPixel(Image *dst, int posX, int posY, Color color);
  ImageDrawPixel: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawPixelV(Image *dst, Vector2 position, Color color);
  ImageDrawPixelV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawLine(Image *dst, int startPosX, int startPosY, int endPosX, int endPosY, Color color);
  ImageDrawLine: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void ImageDrawLineV(Image *dst, Vector2 start, Vector2 end, Color color);
  ImageDrawLineV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawLineEx(Image *dst, Vector2 start, Vector2 end, int thick, Color color);
  ImageDrawLineEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawCircle(Image *dst, int centerX, int centerY, int radius, Color color);
  ImageDrawCircle: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawCircleV(Image *dst, Vector2 center, int radius, Color color);
  ImageDrawCircleV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawCircleLines(Image *dst, int centerX, int centerY, int radius, Color color);
  ImageDrawCircleLines: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawCircleLinesV(Image *dst, Vector2 center, int radius, Color color);
  ImageDrawCircleLinesV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawRectangle(Image *dst, int posX, int posY, int width, int height, Color color);
  ImageDrawRectangle: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void ImageDrawRectangleV(Image *dst, Vector2 position, Vector2 size, Color color);
  ImageDrawRectangleV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawRectangleRec(Image *dst, Rectangle rec, Color color);
  ImageDrawRectangleRec: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawRectangleLines(Image *dst, Rectangle rec, int thick, Color color);
  ImageDrawRectangleLines: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawTriangle(Image *dst, Vector2 v1, Vector2 v2, Vector2 v3, Color color);
  ImageDrawTriangle: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleEx(Image *dst, Vector2 v1, Vector2 v2, Vector2 v3, Color c1, Color c2, Color c3);
  ImageDrawTriangleEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.u32,
      FFIType.u32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleLines(Image *dst, Vector2 v1, Vector2 v2, Vector2 v3, Color color);
  ImageDrawTriangleLines: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleFan(Image *dst, Vector2 *points, int pointCount, Color color);
  ImageDrawTriangleFan: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleStrip(Image *dst, Vector2 *points, int pointCount, Color color);
  ImageDrawTriangleStrip: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDraw(Image *dst, Image src, Rectangle srcRec, Rectangle dstRec, Color tint);
  ImageDraw: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void ImageDrawText(Image *dst, const char *text, int posX, int posY, int fontSize, Color color);
  ImageDrawText: {
    args: [
      FFIType.ptr,
      FFIType.cstring,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void ImageDrawTextEx(Image *dst, Font font, const char *text, Vector2 position, float fontSize, float spacing, Color tint);
  ImageDrawTextEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.cstring,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },

  // #endregion Image drawing functions

  // #region Texture loading functions
  // NOTE: These functions return structs and are SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Texture2D LoadTexture(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadTexture: { args: [FFIType.cstring], returns: FFIType.ptr },

  // Texture2D LoadTextureFromImage(Image image);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadTextureFromImage: { args: [FFIType.ptr], returns: FFIType.ptr },

  // TextureCubemap LoadTextureCubemap(Image image, int layout);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadTextureCubemap: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },

  // RenderTexture2D LoadRenderTexture(int width, int height);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadRenderTexture: { args: [FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // bool IsTextureValid(Texture2D texture);
  IsTextureValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadTexture(Texture2D texture);
  UnloadTexture: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool IsRenderTextureValid(RenderTexture2D target);
  IsRenderTextureValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadRenderTexture(RenderTexture2D target);
  UnloadRenderTexture: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void UpdateTexture(Texture2D texture, const void *pixels);
  UpdateTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void UpdateTextureRec(Texture2D texture, Rectangle rec, const void *pixels);
  UpdateTextureRec: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },

  // #endregion Texture loading functions

  // #region Texture configuration functions

  // void GenTextureMipmaps(Texture2D *texture);
  GenTextureMipmaps: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetTextureFilter(Texture2D texture, int filter);
  SetTextureFilter: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetTextureWrap(Texture2D texture, int wrap);
  SetTextureWrap: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },

  // #endregion Texture configuration functions

  // #region Texture drawing functions

  // void DrawTexture(Texture2D texture, int posX, int posY, Color tint);
  DrawTexture: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTextureV(Texture2D texture, Vector2 position, Color tint);
  DrawTextureV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTextureEx(Texture2D texture, Vector2 position, float rotation, float scale, Color tint);
  DrawTextureEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTextureRec(Texture2D texture, Rectangle source, Vector2 position, Color tint);
  DrawTextureRec: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTexturePro(Texture2D texture, Rectangle source, Rectangle dest, Vector2 origin, float rotation, Color tint);
  DrawTexturePro: {
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
  // void DrawTextureNPatch(Texture2D texture, NPatchInfo nPatchInfo, Rectangle dest, Vector2 origin, float rotation, Color tint);
  DrawTextureNPatch: {
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

  // #endregion Texture drawing functions

  // #region Color/pixel related functions
  // NOTE: These functions return structs and are SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Color Fade(Color color, float alpha);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // Fade: { args: [FFIType.u32, FFIType.f32], returns: FFIType.u32 },

  // Vector4 ColorNormalize(Color color);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorNormalize: { args: [FFIType.u32], returns: FFIType.ptr },

  // Color ColorFromNormalized(Vector4 normalized);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorFromNormalized: { args: [FFIType.ptr], returns: FFIType.u32 },

  // Vector3 ColorToHSV(Color color);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorToHSV: { args: [FFIType.u32], returns: FFIType.ptr },

  // Color ColorFromHSV(float hue, float saturation, float value);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorFromHSV: { args: [FFIType.f32, FFIType.f32, FFIType.f32], returns: FFIType.u32 },

  // Color ColorTint(Color color, Color tint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorTint: { args: [FFIType.u32, FFIType.u32], returns: FFIType.u32 },

  // Color ColorBrightness(Color color, float factor);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorBrightness: { args: [FFIType.u32, FFIType.f32], returns: FFIType.u32 },

  // Color ColorContrast(Color color, float contrast);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorContrast: { args: [FFIType.u32, FFIType.f32], returns: FFIType.u32 },

  // Color ColorAlpha(Color color, float alpha);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorAlpha: { args: [FFIType.u32, FFIType.f32], returns: FFIType.u32 },

  // Color ColorAlphaBlend(Color dst, Color src, Color tint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorAlphaBlend: { args: [FFIType.u32, FFIType.u32, FFIType.u32], returns: FFIType.u32 },

  // Color ColorLerp(Color color1, Color color2, float amount);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // ColorLerp: { args: [FFIType.u32, FFIType.u32, FFIType.f32], returns: FFIType.u32 },

  // Color GetColor(unsigned int hexValue);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetColor: { args: [FFIType.u32], returns: FFIType.u32 },

  // Color GetPixelColor(void *srcPtr, int format);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetPixelColor: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.u32 },

  // bool ColorIsEqual(Color col1, Color col2);
  ColorIsEqual: {
    args: [FFIType.u32, FFIType.u32],
    returns: FFIType.bool,
  },
  // int ColorToInt(Color color);
  ColorToInt: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // void SetPixelColor(void *dstPtr, Color color, int format);
  SetPixelColor: {
    args: [FFIType.ptr, FFIType.u32, FFIType.i32],
    returns: FFIType.void,
  },
  // int GetPixelDataSize(int width, int height, int format);
  GetPixelDataSize: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },

  // #endregion Color/pixel related functions
} satisfies Record<string, FFIFunction>;
