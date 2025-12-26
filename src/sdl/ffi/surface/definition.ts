import { FFIType, type FFIFunction } from 'bun:ffi';

export const SurfaceDefinition = {
  // SDL_Surface * SDL_CreateSurface(int width, int height, SDL_PixelFormat format);                                                                                                                                                                                                                                // Allocate a new surface with a specific pixel format.
  SDL_CreateSurface: {
    args: [FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_CreateSurfaceFrom(int width, int height, SDL_PixelFormat format, void *pixels, int pitch);                                                                                                                                                                                                   // Allocate a new surface with a specific pixel format and existing pixel data.
  SDL_CreateSurfaceFrom: {
    args: [FFIType.i32, FFIType.i32, FFIType.u32, FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // void SDL_DestroySurface(SDL_Surface *surface);                                                                                                                                                                                                                                                                 // Free a surface.
  SDL_DestroySurface: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_PropertiesID SDL_GetSurfaceProperties(SDL_Surface *surface);                                                                                                                                                                                                                                               // Get the properties associated with a surface.
  SDL_GetSurfaceProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_SetSurfaceColorspace(SDL_Surface *surface, SDL_Colorspace colorspace);                                                                                                                                                                                                                                // Set the colorspace used by a surface.
  SDL_SetSurfaceColorspace: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // SDL_Colorspace SDL_GetSurfaceColorspace(SDL_Surface *surface);                                                                                                                                                                                                                                                 // Get the colorspace used by a surface.
  SDL_GetSurfaceColorspace: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_Palette * SDL_CreateSurfacePalette(SDL_Surface *surface);                                                                                                                                                                                                                                                  // Create a palette and associate it with a surface.
  SDL_CreateSurfacePalette: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetSurfacePalette(SDL_Surface *surface, SDL_Palette *palette);                                                                                                                                                                                                                                        // Set the palette used by a surface.
  SDL_SetSurfacePalette: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Palette * SDL_GetSurfacePalette(SDL_Surface *surface);                                                                                                                                                                                                                                                     // Get the palette used by a surface.
  SDL_GetSurfacePalette: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_AddSurfaceAlternateImage(SDL_Surface *surface, SDL_Surface *image);                                                                                                                                                                                                                                   // Add an alternate version of a surface.
  SDL_AddSurfaceAlternateImage: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SurfaceHasAlternateImages(SDL_Surface *surface);                                                                                                                                                                                                                                                      // Return whether a surface has alternate versions available.
  SDL_SurfaceHasAlternateImages: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Surface ** SDL_GetSurfaceImages(SDL_Surface *surface, int *count);                                                                                                                                                                                                                                         // Get an array including all versions of a surface.
  SDL_GetSurfaceImages: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_RemoveSurfaceAlternateImages(SDL_Surface *surface);                                                                                                                                                                                                                                                   // Remove all alternate versions of a surface.
  SDL_RemoveSurfaceAlternateImages: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_LockSurface(SDL_Surface *surface);                                                                                                                                                                                                                                                                    // Set up a surface for directly accessing the pixels.
  SDL_LockSurface: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_UnlockSurface(SDL_Surface *surface);                                                                                                                                                                                                                                                                  // Release a surface after directly accessing the pixels.
  SDL_UnlockSurface: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_Surface * SDL_LoadSurface_IO(SDL_IOStream *src, bool closeio);                                                                                                                                                                                                                                             // Load a BMP or PNG image from a seekable SDL data stream.
  SDL_LoadSurface_IO: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_LoadSurface(const char *file);                                                                                                                                                                                                                                                               // Load a BMP or PNG image from a file.
  SDL_LoadSurface: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_LoadBMP_IO(SDL_IOStream *src, bool closeio);                                                                                                                                                                                                                                                 // Load a BMP image from a seekable SDL data stream.
  SDL_LoadBMP_IO: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_LoadBMP(const char *file);                                                                                                                                                                                                                                                                   // Load a BMP image from a file.
  SDL_LoadBMP: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  // bool SDL_SaveBMP_IO(SDL_Surface *surface, SDL_IOStream *dst, bool closeio);                                                                                                                                                                                                                                    // Save a surface to a seekable SDL data stream in BMP format.
  SDL_SaveBMP_IO: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SaveBMP(SDL_Surface *surface, const char *file);                                                                                                                                                                                                                                                      // Save a surface to a file in BMP format.
  SDL_SaveBMP: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // SDL_Surface * SDL_LoadPNG_IO(SDL_IOStream *src, bool closeio);                                                                                                                                                                                                                                                 // Load a PNG image from a seekable SDL data stream.
  SDL_LoadPNG_IO: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_LoadPNG(const char *file);                                                                                                                                                                                                                                                                   // Load a PNG image from a file.
  SDL_LoadPNG: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  // bool SDL_SavePNG_IO(SDL_Surface *surface, SDL_IOStream *dst, bool closeio);                                                                                                                                                                                                                                    // Save a surface to a seekable SDL data stream in PNG format.
  SDL_SavePNG_IO: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SavePNG(SDL_Surface *surface, const char *file);                                                                                                                                                                                                                                                      // Save a surface to a file in PNG format.
  SDL_SavePNG: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_SetSurfaceRLE(SDL_Surface *surface, bool enabled);                                                                                                                                                                                                                                                    // Set the RLE acceleration hint for a surface.
  SDL_SetSurfaceRLE: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SurfaceHasRLE(SDL_Surface *surface);                                                                                                                                                                                                                                                                  // Returns whether the surface is RLE enabled.
  SDL_SurfaceHasRLE: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetSurfaceColorKey(SDL_Surface *surface, bool enabled, Uint32 key);                                                                                                                                                                                                                                   // Set the color key (transparent pixel) in a surface.
  SDL_SetSurfaceColorKey: {
    args: [FFIType.ptr, FFIType.bool, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_SurfaceHasColorKey(SDL_Surface *surface);                                                                                                                                                                                                                                                             // Returns whether the surface has a color key.
  SDL_SurfaceHasColorKey: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetSurfaceColorKey(SDL_Surface *surface, Uint32 *key);                                                                                                                                                                                                                                                // Get the color key (transparent pixel) for a surface.
  SDL_GetSurfaceColorKey: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetSurfaceColorMod(SDL_Surface *surface, Uint8 r, Uint8 g, Uint8 b);                                                                                                                                                                                                                                  // Set an additional color value multiplied into blit operations.
  SDL_SetSurfaceColorMod: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_GetSurfaceColorMod(SDL_Surface *surface, Uint8 *r, Uint8 *g, Uint8 *b);                                                                                                                                                                                                                               // Get the additional color value multiplied into blit operations.
  SDL_GetSurfaceColorMod: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetSurfaceAlphaMod(SDL_Surface *surface, Uint8 alpha);                                                                                                                                                                                                                                                // Set an additional alpha value used in blit operations.
  SDL_SetSurfaceAlphaMod: {
    args: [FFIType.ptr, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_GetSurfaceAlphaMod(SDL_Surface *surface, Uint8 *alpha);                                                                                                                                                                                                                                               // Get the additional alpha value used in blit operations.
  SDL_GetSurfaceAlphaMod: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetSurfaceBlendMode(SDL_Surface *surface, SDL_BlendMode blendMode);                                                                                                                                                                                                                                   // Set the blend mode used for blit operations.
  SDL_SetSurfaceBlendMode: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetSurfaceBlendMode(SDL_Surface *surface, SDL_BlendMode *blendMode);                                                                                                                                                                                                                                  // Get the blend mode used for blit operations.
  SDL_GetSurfaceBlendMode: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetSurfaceClipRect(SDL_Surface *surface, const SDL_Rect *rect);                                                                                                                                                                                                                                       // Set the clipping rectangle for a surface.
  SDL_SetSurfaceClipRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetSurfaceClipRect(SDL_Surface *surface, SDL_Rect *rect);                                                                                                                                                                                                                                             // Get the clipping rectangle for a surface.
  SDL_GetSurfaceClipRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_FlipSurface(SDL_Surface *surface, SDL_FlipMode flip);                                                                                                                                                                                                                                                 // Flip a surface vertically or horizontally.
  SDL_FlipSurface: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // SDL_Surface * SDL_RotateSurface(SDL_Surface *surface, float angle);                                                                                                                                                                                                                                            // Return a copy of a surface rotated clockwise a number of degrees.
  SDL_RotateSurface: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_DuplicateSurface(SDL_Surface *surface);                                                                                                                                                                                                                                                      // Creates a new surface identical to the existing surface.
  SDL_DuplicateSurface: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_ScaleSurface(SDL_Surface *surface, int width, int height, SDL_ScaleMode scaleMode);                                                                                                                                                                                                          // Creates a new surface identical to the existing surface, scaled to the desired size.
  SDL_ScaleSurface: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_ConvertSurface(SDL_Surface *surface, SDL_PixelFormat format);                                                                                                                                                                                                                                // Copy an existing surface to a new surface of the specified format.
  SDL_ConvertSurface: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Surface * SDL_ConvertSurfaceAndColorspace(SDL_Surface *surface, SDL_PixelFormat format, SDL_Palette *palette, SDL_Colorspace colorspace, SDL_PropertiesID props);                                                                                                                                          // Copy an existing surface to a new surface of the specified format and colorspace.
  SDL_ConvertSurfaceAndColorspace: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.u32],
    returns: FFIType.ptr,
  },
  // bool SDL_ConvertPixels(int width, int height, SDL_PixelFormat src_format, const void *src, int src_pitch, SDL_PixelFormat dst_format, void *dst, int dst_pitch);                                                                                                                                               // Copy a block of pixels of one format to another format.
  SDL_ConvertPixels: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.u32,
      FFIType.ptr,
      FFIType.i32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_ConvertPixelsAndColorspace(int width, int height, SDL_PixelFormat src_format, SDL_Colorspace src_colorspace, SDL_PropertiesID src_properties, const void *src, int src_pitch, SDL_PixelFormat dst_format, SDL_Colorspace dst_colorspace, SDL_PropertiesID dst_properties, void *dst, int dst_pitch);  // Copy a block of pixels of one format and colorspace to another format and colorspace.
  SDL_ConvertPixelsAndColorspace: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
      FFIType.u32,
      FFIType.u32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.u32,
      FFIType.u32,
      FFIType.u32,
      FFIType.ptr,
      FFIType.i32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_PremultiplyAlpha(int width, int height, SDL_PixelFormat src_format, const void *src, int src_pitch, SDL_PixelFormat dst_format, void *dst, int dst_pitch, bool linear);                                                                                                                               // Premultiply the alpha on a block of pixels.
  SDL_PremultiplyAlpha: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.u32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.u32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.bool,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_PremultiplySurfaceAlpha(SDL_Surface *surface, bool linear);                                                                                                                                                                                                                                           // Premultiply the alpha in a surface.
  SDL_PremultiplySurfaceAlpha: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_ClearSurface(SDL_Surface *surface, float r, float g, float b, float a);                                                                                                                                                                                                                               // Clear a surface with a specific color, with floating point precision.
  SDL_ClearSurface: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_FillSurfaceRect(SDL_Surface *dst, const SDL_Rect *rect, Uint32 color);                                                                                                                                                                                                                                // Perform a fast fill of a rectangle with a specific color.
  SDL_FillSurfaceRect: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_FillSurfaceRects(SDL_Surface *dst, const SDL_Rect *rects, int count, Uint32 color);                                                                                                                                                                                                                   // Perform a fast fill of a set of rectangles with a specific color.
  SDL_FillSurfaceRects: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_BlitSurface(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect);                                                                                                                                                                                                    // Performs a fast blit from the source surface to the destination surface with clipping.
  SDL_BlitSurface: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_BlitSurfaceUnchecked(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect);                                                                                                                                                                                           // Perform low-level surface blitting only.
  SDL_BlitSurfaceUnchecked: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_BlitSurfaceScaled(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect, SDL_ScaleMode scaleMode);                                                                                                                                                                     // Perform a scaled blit to a destination surface, which may be of a different format.
  SDL_BlitSurfaceScaled: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_BlitSurfaceUncheckedScaled(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect, SDL_ScaleMode scaleMode);                                                                                                                                                            // Perform low-level surface scaled blitting only.
  SDL_BlitSurfaceUncheckedScaled: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_StretchSurface(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect, SDL_ScaleMode scaleMode);                                                                                                                                                                        // Perform a stretched pixel copy from one surface to another.
  SDL_StretchSurface: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_BlitSurfaceTiled(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect);                                                                                                                                                                                               // Perform a tiled blit to a destination surface, which may be of a different format.
  SDL_BlitSurfaceTiled: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_BlitSurfaceTiledWithScale(SDL_Surface *src, const SDL_Rect *srcrect, float scale, SDL_ScaleMode scaleMode, SDL_Surface *dst, const SDL_Rect *dstrect);                                                                                                                                                // Perform a scaled and tiled blit to a destination surface, which may be of a different format.
  SDL_BlitSurfaceTiledWithScale: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_BlitSurface9Grid(SDL_Surface *src, const SDL_Rect *srcrect, int left_width, int right_width, int top_height, int bottom_height, float scale, SDL_ScaleMode scaleMode, SDL_Surface *dst, const SDL_Rect *dstrect);                                                                                     // Perform a scaled blit using the 9-grid algorithm to a destination surface, which may be of a different format.
  SDL_BlitSurface9Grid: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // Uint32 SDL_MapSurfaceRGB(SDL_Surface *surface, Uint8 r, Uint8 g, Uint8 b);                                                                                                                                                                                                                                     // Map an RGB triple to an opaque pixel value for a surface.
  SDL_MapSurfaceRGB: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.u32,
  },
  // Uint32 SDL_MapSurfaceRGBA(SDL_Surface *surface, Uint8 r, Uint8 g, Uint8 b, Uint8 a);                                                                                                                                                                                                                           // Map an RGBA quadruple to a pixel value for a surface.
  SDL_MapSurfaceRGBA: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.u32,
  },
  // bool SDL_ReadSurfacePixel(SDL_Surface *surface, int x, int y, Uint8 *r, Uint8 *g, Uint8 *b, Uint8 *a);                                                                                                                                                                                                         // Retrieves a single pixel from a surface.
  SDL_ReadSurfacePixel: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_ReadSurfacePixelFloat(SDL_Surface *surface, int x, int y, float *r, float *g, float *b, float *a);                                                                                                                                                                                                    // Retrieves a single pixel from a surface.
  SDL_ReadSurfacePixelFloat: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_WriteSurfacePixel(SDL_Surface *surface, int x, int y, Uint8 r, Uint8 g, Uint8 b, Uint8 a);                                                                                                                                                                                                            // Writes a single pixel to a surface.
  SDL_WriteSurfacePixel: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.u8,
      FFIType.u8,
      FFIType.u8,
      FFIType.u8,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_WriteSurfacePixelFloat(SDL_Surface *surface, int x, int y, float r, float g, float b, float a);
  SDL_WriteSurfacePixelFloat: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
    ],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
