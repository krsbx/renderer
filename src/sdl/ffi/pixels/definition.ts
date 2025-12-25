import { FFIType, type FFIFunction } from 'bun:ffi';

export const PixelsDefinition = {
  // const char * SDL_GetPixelFormatName(SDL_PixelFormat format);                                                                                    // Get the human readable name of a pixel format.
  SDL_GetPixelFormatName: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // bool SDL_GetMasksForPixelFormat(SDL_PixelFormat format, int *bpp, Uint32 *Rmask, Uint32 *Gmask, Uint32 *Bmask, Uint32 *Amask);                  // Convert one of the enumerated pixel formats to a bpp value and RGBA masks.
  SDL_GetMasksForPixelFormat: {
    args: [
      FFIType.u32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // SDL_PixelFormat SDL_GetPixelFormatForMasks(int bpp, Uint32 Rmask, Uint32 Gmask, Uint32 Bmask, Uint32 Amask);                                    // Convert a bpp value and RGBA masks to an enumerated pixel format.
  SDL_GetPixelFormatForMasks: {
    args: [FFIType.i32, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u32],
    returns: FFIType.u32,
  },
  // const SDL_PixelFormatDetails * SDL_GetPixelFormatDetails(SDL_PixelFormat format);                                                               // Create an SDL_PixelFormatDetails structure corresponding to a pixel format.
  SDL_GetPixelFormatDetails: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Palette * SDL_CreatePalette(int ncolors);                                                                                                   // Create a palette structure with the specified number of color entries.
  SDL_CreatePalette: {
    args: [FFIType.i32],
    returns: FFIType.ptr,
  },
  // bool SDL_SetPaletteColors(SDL_Palette *palette, const SDL_Color *colors, int firstcolor, int ncolors);                                          // Set a range of colors in a palette.
  SDL_SetPaletteColors: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_DestroyPalette(SDL_Palette *palette);                                                                                                  // Free a palette created with SDL_CreatePalette().
  SDL_DestroyPalette: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // Uint32 SDL_MapRGB(const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 r, Uint8 g, Uint8 b);                                 // Map an RGB triple to an opaque pixel value for a given pixel format.
  SDL_MapRGB: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.u32,
  },
  // Uint32 SDL_MapRGBA(const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 r, Uint8 g, Uint8 b, Uint8 a);                       // Map an RGBA quadruple to a pixel value for a given pixel format.
  SDL_MapRGBA: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.u8,
      FFIType.u8,
      FFIType.u8,
      FFIType.u8,
    ],
    returns: FFIType.u32,
  },
  // void SDL_GetRGB(Uint32 pixelvalue, const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 *r, Uint8 *g, Uint8 *b);             // Get RGB values from a pixel in the specified format.
  SDL_GetRGB: {
    args: [
      FFIType.u32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void SDL_GetRGBA(Uint32 pixelvalue, const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 *r, Uint8 *g, Uint8 *b, Uint8 *a);  // Get RGBA values from a pixel in the specified format.
  SDL_GetRGBA: {
    args: [
      FFIType.u32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
