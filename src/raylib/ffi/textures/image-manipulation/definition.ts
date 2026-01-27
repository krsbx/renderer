import { FFIType, type FFIFunction } from 'bun:ffi';

export const ImageManipulationDefinition = {
  // Image ImageCopy(Image image);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image ImageFromImage(Image image, Rectangle rec);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image ImageFromChannel(Image image, int selectedChannel);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image ImageText(const char *text, int fontSize, Color color);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image ImageTextEx(Font font, const char *text, float fontSize, float spacing, Color tint);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // void ImageFormat(Image *image, int newFormat);
  ImageFormat: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void ImageToPOT(Image *image, Color fill);
  ImageToPOT: {
    args: [FFIType.ptr, FFIType.ptr],
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
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
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
      FFIType.ptr,
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
    args: [FFIType.ptr, FFIType.ptr],
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
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
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
  // Color GetImageColor(Image image, int x, int y);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Rectangle GetImageAlphaBorder(Image image, float threshold);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
} satisfies Record<string, FFIFunction>;
