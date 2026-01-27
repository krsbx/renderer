import { FFIType, type FFIFunction } from 'bun:ffi';

export const ImageDrawingDefinition = {
  // void ImageClearBackground(Image *dst, Color color);
  ImageClearBackground: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawPixel(Image *dst, int posX, int posY, Color color);
  ImageDrawPixel: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawPixelV(Image *dst, Vector2 position, Color color);
  ImageDrawPixelV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
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
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void ImageDrawLineV(Image *dst, Vector2 start, Vector2 end, Color color);
  ImageDrawLineV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawLineEx(Image *dst, Vector2 start, Vector2 end, int thick, Color color);
  ImageDrawLineEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawCircle(Image *dst, int centerX, int centerY, int radius, Color color);
  ImageDrawCircle: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawCircleV(Image *dst, Vector2 center, int radius, Color color);
  ImageDrawCircleV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawCircleLines(Image *dst, int centerX, int centerY, int radius, Color color);
  ImageDrawCircleLines: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawCircleLinesV(Image *dst, Vector2 center, int radius, Color color);
  ImageDrawCircleLinesV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
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
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void ImageDrawRectangleV(Image *dst, Vector2 position, Vector2 size, Color color);
  ImageDrawRectangleV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawRectangleRec(Image *dst, Rectangle rec, Color color);
  ImageDrawRectangleRec: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawRectangleLines(Image *dst, Rectangle rec, int thick, Color color);
  ImageDrawRectangleLines: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawTriangle(Image *dst, Vector2 v1, Vector2 v2, Vector2 v3, Color color);
  ImageDrawTriangle: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleEx(Image *dst, Vector2 v1, Vector2 v2, Vector2 v3, Color c1, Color c2, Color c3);
  ImageDrawTriangleEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleLines(Image *dst, Vector2 v1, Vector2 v2, Vector2 v3, Color color);
  ImageDrawTriangleLines: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleFan(Image *dst, Vector2 *points, int pointCount, Color color);
  ImageDrawTriangleFan: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDrawTriangleStrip(Image *dst, Vector2 *points, int pointCount, Color color);
  ImageDrawTriangleStrip: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void ImageDraw(Image *dst, Image src, Rectangle srcRec, Rectangle dstRec, Color tint);
  ImageDraw: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
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
      FFIType.ptr,
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
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
