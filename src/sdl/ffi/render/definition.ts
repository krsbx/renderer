import { FFIType, type FFIFunction } from 'bun:ffi';

export const RenderDefinition = {
  // int SDL_GetNumRenderDrivers(void);                                                                                                                                                                                                                              // Get the number of 2D rendering drivers available for the current display.
  SDL_GetNumRenderDrivers: {
    args: [],
    returns: FFIType.i32,
  },
  // const char * SDL_GetRenderDriver(int index);                                                                                                                                                                                                                    // Use this function to get the name of a built in 2D rendering driver.
  SDL_GetRenderDriver: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // bool SDL_CreateWindowAndRenderer(const char *title, int width, int height, SDL_WindowFlags window_flags, SDL_Window **window, SDL_Renderer **renderer);                                                                                                         // Create a window and default renderer.
  SDL_CreateWindowAndRenderer: {
    args: [
      FFIType.cstring,
      FFIType.i32,
      FFIType.i32,
      FFIType.u64,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // SDL_Renderer * SDL_CreateRenderer(SDL_Window *window, const char *name);                                                                                                                                                                                        // Create a 2D rendering context for a window.
  SDL_CreateRenderer: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // SDL_Renderer * SDL_CreateRendererWithProperties(SDL_PropertiesID props);                                                                                                                                                                                        // Create a 2D rendering context for a window, with the specified properties.
  SDL_CreateRendererWithProperties: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Renderer * SDL_CreateGPURenderer(SDL_GPUDevice *device, SDL_Window *window);                                                                                                                                                                                // Create a 2D GPU rendering context.
  SDL_CreateGPURenderer: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_GPUDevice * SDL_GetGPURendererDevice(SDL_Renderer *renderer);                                                                                                                                                                                               // Return the GPU device used by a renderer.
  SDL_GetGPURendererDevice: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Renderer * SDL_CreateSoftwareRenderer(SDL_Surface *surface);                                                                                                                                                                                                // Create a 2D software rendering context for a surface.
  SDL_CreateSoftwareRenderer: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Renderer * SDL_GetRenderer(SDL_Window *window);                                                                                                                                                                                                             // Get the renderer associated with a window.
  SDL_GetRenderer: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Window * SDL_GetRenderWindow(SDL_Renderer *renderer);                                                                                                                                                                                                       // Get the window associated with a renderer.
  SDL_GetRenderWindow: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetRendererName(SDL_Renderer *renderer);                                                                                                                                                                                                       // Get the name of a renderer.
  SDL_GetRendererName: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // SDL_PropertiesID SDL_GetRendererProperties(SDL_Renderer *renderer);                                                                                                                                                                                             // Get the properties associated with a renderer.
  SDL_GetRendererProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_GetRenderOutputSize(SDL_Renderer *renderer, int *w, int *h);                                                                                                                                                                                           // Get the output size in pixels of a rendering context.
  SDL_GetRenderOutputSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetCurrentRenderOutputSize(SDL_Renderer *renderer, int *w, int *h);                                                                                                                                                                                    // Get the current output size in pixels of a rendering context.
  SDL_GetCurrentRenderOutputSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Texture * SDL_CreateTexture(SDL_Renderer *renderer, SDL_PixelFormat format, SDL_TextureAccess access, int w, int h);                                                                                                                                        // Create a texture for a rendering context.
  SDL_CreateTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.ptr,
  },
  // SDL_Texture * SDL_CreateTextureFromSurface(SDL_Renderer *renderer, SDL_Surface *surface);                                                                                                                                                                       // Create a texture from an existing surface.
  SDL_CreateTextureFromSurface: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Texture * SDL_CreateTextureWithProperties(SDL_Renderer *renderer, SDL_PropertiesID props);                                                                                                                                                                  // Create a texture for a rendering context with the specified properties.
  SDL_CreateTextureWithProperties: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_PropertiesID SDL_GetTextureProperties(SDL_Texture *texture);                                                                                                                                                                                                // Get the properties associated with a texture.
  SDL_GetTextureProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_Renderer * SDL_GetRendererFromTexture(SDL_Texture *texture);                                                                                                                                                                                                // Get the renderer that created an SDL_Texture.
  SDL_GetRendererFromTexture: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_GetTextureSize(SDL_Texture *texture, float *w, float *h);                                                                                                                                                                                              // Get the size of a texture, as floating point values.
  SDL_GetTextureSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetTexturePalette(SDL_Texture *texture, SDL_Palette *palette);                                                                                                                                                                                         // Set the palette used by a texture.
  SDL_SetTexturePalette: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Palette * SDL_GetTexturePalette(SDL_Texture *texture);                                                                                                                                                                                                      // Get the palette used by a texture.
  SDL_GetTexturePalette: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetTextureColorMod(SDL_Texture *texture, Uint8 r, Uint8 g, Uint8 b);                                                                                                                                                                                   // Set an additional color value multiplied into render copy operations.
  SDL_SetTextureColorMod: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_SetTextureColorModFloat(SDL_Texture *texture, float r, float g, float b);                                                                                                                                                                              // Set an additional color value multiplied into render copy operations.
  SDL_SetTextureColorModFloat: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_GetTextureColorMod(SDL_Texture *texture, Uint8 *r, Uint8 *g, Uint8 *b);                                                                                                                                                                                // Get the additional color value multiplied into render copy operations.
  SDL_GetTextureColorMod: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetTextureColorModFloat(SDL_Texture *texture, float *r, float *g, float *b);                                                                                                                                                                           // Get the additional color value multiplied into render copy operations.
  SDL_GetTextureColorModFloat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetTextureAlphaMod(SDL_Texture *texture, Uint8 alpha);                                                                                                                                                                                                 // Set an additional alpha value multiplied into render copy operations.
  SDL_SetTextureAlphaMod: {
    args: [FFIType.ptr, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_SetTextureAlphaModFloat(SDL_Texture *texture, float alpha);                                                                                                                                                                                            // Set an additional alpha value multiplied into render copy operations.
  SDL_SetTextureAlphaModFloat: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_GetTextureAlphaMod(SDL_Texture *texture, Uint8 *alpha);                                                                                                                                                                                                // Get the additional alpha value multiplied into render copy operations.
  SDL_GetTextureAlphaMod: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetTextureAlphaModFloat(SDL_Texture *texture, float *alpha);                                                                                                                                                                                           // Get the additional alpha value multiplied into render copy operations.
  SDL_GetTextureAlphaModFloat: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetTextureBlendMode(SDL_Texture *texture, SDL_BlendMode blendMode);                                                                                                                                                                                    // Set the blend mode for a texture, used by SDL_RenderTexture().
  SDL_SetTextureBlendMode: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetTextureBlendMode(SDL_Texture *texture, SDL_BlendMode *blendMode);                                                                                                                                                                                   // Get the blend mode used for texture copy operations.
  SDL_GetTextureBlendMode: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetTextureScaleMode(SDL_Texture *texture, SDL_ScaleMode scaleMode);                                                                                                                                                                                    // Set the scale mode used for texture scale operations.
  SDL_SetTextureScaleMode: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetTextureScaleMode(SDL_Texture *texture, SDL_ScaleMode *scaleMode);                                                                                                                                                                                   // Get the scale mode used for texture scale operations.
  SDL_GetTextureScaleMode: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_UpdateTexture(SDL_Texture *texture, const SDL_Rect *rect, const void *pixels, int pitch);                                                                                                                                                              // Update the given texture rectangle with new pixel data.
  SDL_UpdateTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_UpdateYUVTexture(SDL_Texture *texture, const SDL_Rect *rect, const Uint8 *Yplane, int Ypitch, const Uint8 *Uplane, int Upitch, const Uint8 *Vplane, int Vpitch);                                                                                       // Update a rectangle within a planar YV12 or IYUV texture with new pixel data.
  SDL_UpdateYUVTexture: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_UpdateNVTexture(SDL_Texture *texture, const SDL_Rect *rect, const Uint8 *Yplane, int Ypitch, const Uint8 *UVplane, int UVpitch);                                                                                                                       // Update a rectangle within a planar NV12 or NV21 texture with new pixels.
  SDL_UpdateNVTexture: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_LockTexture(SDL_Texture *texture, const SDL_Rect *rect, void **pixels, int *pitch);                                                                                                                                                                    // Lock a portion of the texture for **write-only** pixel access.
  SDL_LockTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_LockTextureToSurface(SDL_Texture *texture, const SDL_Rect *rect, SDL_Surface **surface);                                                                                                                                                               // Lock a portion of the texture for **write-only** pixel access, and expose it as a SDL surface.
  SDL_LockTextureToSurface: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_UnlockTexture(SDL_Texture *texture);                                                                                                                                                                                                                   // Unlock a texture, uploading the changes to video memory, if needed.
  SDL_UnlockTexture: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_SetRenderTarget(SDL_Renderer *renderer, SDL_Texture *texture);                                                                                                                                                                                         // Set a texture as the current rendering target.
  SDL_SetRenderTarget: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Texture * SDL_GetRenderTarget(SDL_Renderer *renderer);                                                                                                                                                                                                      // Get the current render target.
  SDL_GetRenderTarget: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetRenderLogicalPresentation(SDL_Renderer *renderer, int w, int h, SDL_RendererLogicalPresentation mode);                                                                                                                                              // Set a device-independent resolution and presentation mode for rendering.
  SDL_SetRenderLogicalPresentation: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderLogicalPresentation(SDL_Renderer *renderer, int *w, int *h, SDL_RendererLogicalPresentation *mode);                                                                                                                                           // Get device independent resolution and presentation mode for rendering.
  SDL_GetRenderLogicalPresentation: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderLogicalPresentationRect(SDL_Renderer *renderer, SDL_FRect *rect);                                                                                                                                                                             // Get the final presentation rectangle for rendering.
  SDL_GetRenderLogicalPresentationRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderCoordinatesFromWindow(SDL_Renderer *renderer, float window_x, float window_y, float *x, float *y);                                                                                                                                               // Get a point in render coordinates when given a point in window coordinates.
  SDL_RenderCoordinatesFromWindow: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderCoordinatesToWindow(SDL_Renderer *renderer, float x, float y, float *window_x, float *window_y);                                                                                                                                                 // Get a point in window coordinates when given a point in render coordinates.
  SDL_RenderCoordinatesToWindow: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ConvertEventToRenderCoordinates(SDL_Renderer *renderer, SDL_Event *event);                                                                                                                                                                             // Convert the coordinates in an event to render coordinates.
  SDL_ConvertEventToRenderCoordinates: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderViewport(SDL_Renderer *renderer, const SDL_Rect *rect);                                                                                                                                                                                       // Set the drawing area for rendering on the current target.
  SDL_SetRenderViewport: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderViewport(SDL_Renderer *renderer, SDL_Rect *rect);                                                                                                                                                                                             // Get the drawing area for the current target.
  SDL_GetRenderViewport: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderViewportSet(SDL_Renderer *renderer);                                                                                                                                                                                                             // Return whether an explicit rectangle was set as the viewport.
  SDL_RenderViewportSet: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderSafeArea(SDL_Renderer *renderer, SDL_Rect *rect);                                                                                                                                                                                             // Get the safe area for rendering within the current viewport.
  SDL_GetRenderSafeArea: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderClipRect(SDL_Renderer *renderer, const SDL_Rect *rect);                                                                                                                                                                                       // Set the clip rectangle for rendering on the specified target.
  SDL_SetRenderClipRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderClipRect(SDL_Renderer *renderer, SDL_Rect *rect);                                                                                                                                                                                             // Get the clip rectangle for the current target.
  SDL_GetRenderClipRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderClipEnabled(SDL_Renderer *renderer);                                                                                                                                                                                                             // Get whether clipping is enabled on the given render target.
  SDL_RenderClipEnabled: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderScale(SDL_Renderer *renderer, float scaleX, float scaleY);                                                                                                                                                                                    // Set the drawing scale for rendering on the current target.
  SDL_SetRenderScale: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderScale(SDL_Renderer *renderer, float *scaleX, float *scaleY);                                                                                                                                                                                  // Get the drawing scale for the current target.
  SDL_GetRenderScale: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderDrawColor(SDL_Renderer *renderer, Uint8 r, Uint8 g, Uint8 b, Uint8 a);                                                                                                                                                                        // Set the color used for drawing operations.
  SDL_SetRenderDrawColor: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderDrawColorFloat(SDL_Renderer *renderer, float r, float g, float b, float a);                                                                                                                                                                   // Set the color used for drawing operations (Rect, Line and Clear).
  SDL_SetRenderDrawColorFloat: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderDrawColor(SDL_Renderer *renderer, Uint8 *r, Uint8 *g, Uint8 *b, Uint8 *a);                                                                                                                                                                    // Get the color used for drawing operations (Rect, Line and Clear).
  SDL_GetRenderDrawColor: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderDrawColorFloat(SDL_Renderer *renderer, float *r, float *g, float *b, float *a);                                                                                                                                                               // Get the color used for drawing operations (Rect, Line and Clear).
  SDL_GetRenderDrawColorFloat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderColorScale(SDL_Renderer *renderer, float scale);                                                                                                                                                                                              // Set the color scale used for render operations.
  SDL_SetRenderColorScale: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderColorScale(SDL_Renderer *renderer, float *scale);                                                                                                                                                                                             // Get the color scale used for render operations.
  SDL_GetRenderColorScale: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderDrawBlendMode(SDL_Renderer *renderer, SDL_BlendMode blendMode);                                                                                                                                                                               // Set the blend mode used for drawing operations (Fill and Line).
  SDL_SetRenderDrawBlendMode: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderDrawBlendMode(SDL_Renderer *renderer, SDL_BlendMode *blendMode);                                                                                                                                                                              // Get the blend mode used for drawing operations.
  SDL_GetRenderDrawBlendMode: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderClear(SDL_Renderer *renderer);                                                                                                                                                                                                                   // Clear the current rendering target with the drawing color.
  SDL_RenderClear: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderPoint(SDL_Renderer *renderer, float x, float y);                                                                                                                                                                                                 // Draw a point on the current rendering target at subpixel precision.
  SDL_RenderPoint: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_RenderPoints(SDL_Renderer *renderer, const SDL_FPoint *points, int count);                                                                                                                                                                             // Draw multiple points on the current rendering target at subpixel precision.
  SDL_RenderPoints: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_RenderLine(SDL_Renderer *renderer, float x1, float y1, float x2, float y2);                                                                                                                                                                            // Draw a line on the current rendering target at subpixel precision.
  SDL_RenderLine: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_RenderLines(SDL_Renderer *renderer, const SDL_FPoint *points, int count);                                                                                                                                                                              // Draw a series of connected lines on the current rendering target at subpixel precision.
  SDL_RenderLines: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_RenderRect(SDL_Renderer *renderer, const SDL_FRect *rect);                                                                                                                                                                                             // Draw a rectangle on the current rendering target at subpixel precision.
  SDL_RenderRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderRects(SDL_Renderer *renderer, const SDL_FRect *rects, int count);                                                                                                                                                                                // Draw some number of rectangles on the current rendering target at subpixel precision.
  SDL_RenderRects: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_RenderFillRect(SDL_Renderer *renderer, const SDL_FRect *rect);                                                                                                                                                                                         // Fill a rectangle on the current rendering target with the drawing color at subpixel precision.
  SDL_RenderFillRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderFillRects(SDL_Renderer *renderer, const SDL_FRect *rects, int count);                                                                                                                                                                            // Fill some number of rectangles on the current rendering target with the drawing color at subpixel precision.
  SDL_RenderFillRects: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_RenderTexture(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, const SDL_FRect *dstrect);                                                                                                                                       // Copy a portion of the texture to the current rendering target at subpixel precision.
  SDL_RenderTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderTextureRotated(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, const SDL_FRect *dstrect, double angle, const SDL_FPoint *center, SDL_FlipMode flip);                                                                     // Copy a portion of the source texture to the current rendering target, with rotation and flipping, at subpixel precision.
  SDL_RenderTextureRotated: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f64,
      FFIType.ptr,
      FFIType.i32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_RenderTextureAffine(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, const SDL_FPoint *origin, const SDL_FPoint *right, const SDL_FPoint *down);                                                                                // Copy a portion of the source texture to the current rendering target, with affine transform, at subpixel precision.
  SDL_RenderTextureAffine: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_RenderTextureTiled(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, float scale, const SDL_FRect *dstrect);                                                                                                                     // Tile a portion of the texture to the current rendering target at subpixel precision.
  SDL_RenderTextureTiled: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderTexture9Grid(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, float left_width, float right_width, float top_height, float bottom_height, float scale, const SDL_FRect *dstrect);                                         // Perform a scaled copy using the 9-grid algorithm to the current rendering target at subpixel precision.
  SDL_RenderTexture9Grid: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_RenderTexture9GridTiled(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, float left_width, float right_width, float top_height, float bottom_height, float scale, const SDL_FRect *dstrect, float tileScale);                   // Perform a scaled copy using the 9-grid algorithm to the current rendering target at subpixel precision.
  SDL_RenderTexture9GridTiled: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.ptr,
      FFIType.f32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_RenderGeometry(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_Vertex *vertices, int num_vertices, const int *indices, int num_indices);                                                                                                       // Render a list of triangles, optionally using a texture and indices into the vertex array Color and alpha modulation is done per vertex (SDL_SetTextureColorMod and SDL_SetTextureAlphaMod are ignored).
  SDL_RenderGeometry: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_RenderGeometryRaw(SDL_Renderer *renderer, SDL_Texture *texture, const float *xy, int xy_stride, const SDL_FColor *color, int color_stride, const float *uv, int uv_stride, int num_vertices, const void *indices, int num_indices, int size_indices);  // Render a list of triangles, optionally using a texture and indices into the vertex arrays Color and alpha modulation is done per vertex (SDL_SetTextureColorMod and SDL_SetTextureAlphaMod are ignored).
  SDL_RenderGeometryRaw: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderTextureAddressMode(SDL_Renderer *renderer, SDL_TextureAddressMode u_mode, SDL_TextureAddressMode v_mode);                                                                                                                                     // Set the texture addressing mode used in SDL_RenderGeometry().
  SDL_SetRenderTextureAddressMode: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderTextureAddressMode(SDL_Renderer *renderer, SDL_TextureAddressMode *u_mode, SDL_TextureAddressMode *v_mode);                                                                                                                                   // Get the texture addressing mode used in SDL_RenderGeometry().
  SDL_GetRenderTextureAddressMode: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Surface * SDL_RenderReadPixels(SDL_Renderer *renderer, const SDL_Rect *rect);                                                                                                                                                                               // Read pixels from the current rendering target.
  SDL_RenderReadPixels: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_RenderPresent(SDL_Renderer *renderer);                                                                                                                                                                                                                 // Update the screen with any rendering performed since the previous call.
  SDL_RenderPresent: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_DestroyTexture(SDL_Texture *texture);                                                                                                                                                                                                                  // Destroy the specified texture.
  SDL_DestroyTexture: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_DestroyRenderer(SDL_Renderer *renderer);                                                                                                                                                                                                               // Destroy the rendering context for a window and free all associated textures.
  SDL_DestroyRenderer: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_FlushRenderer(SDL_Renderer *renderer);                                                                                                                                                                                                                 // Force the rendering context to flush any pending commands and state.
  SDL_FlushRenderer: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void * SDL_GetRenderMetalLayer(SDL_Renderer *renderer);                                                                                                                                                                                                         // Get the CAMetalLayer associated with the given Metal renderer.
  SDL_GetRenderMetalLayer: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void * SDL_GetRenderMetalCommandEncoder(SDL_Renderer *renderer);                                                                                                                                                                                                // Get the Metal command encoder for the current frame.
  SDL_GetRenderMetalCommandEncoder: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_AddVulkanRenderSemaphores(SDL_Renderer *renderer, Uint32 wait_stage_mask, Sint64 wait_semaphore, Sint64 signal_semaphore);                                                                                                                             // Add a set of synchronization semaphores for the current frame.
  SDL_AddVulkanRenderSemaphores: {
    args: [FFIType.ptr, FFIType.u32, FFIType.i64, FFIType.i64],
    returns: FFIType.bool,
  },
  // bool SDL_SetRenderVSync(SDL_Renderer *renderer, int vsync);                                                                                                                                                                                                     // Toggle VSync of the given renderer.
  SDL_SetRenderVSync: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetRenderVSync(SDL_Renderer *renderer, int *vsync);                                                                                                                                                                                                    // Get VSync of the given renderer.
  SDL_GetRenderVSync: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderDebugText(SDL_Renderer *renderer, float x, float y, const char *str);                                                                                                                                                                            // Draw debug text to an SDL_Renderer.
  SDL_RenderDebugText: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RenderDebugTextFormat(SDL_Renderer *renderer, float x, float y, const char *fmt, ... ...);                                                                                                                                                             // Draw debug text to an SDL_Renderer.
  SDL_RenderDebugTextFormat: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetDefaultTextureScaleMode(SDL_Renderer *renderer, SDL_ScaleMode scale_mode);                                                                                                                                                                          // Set default scale mode for new textures for given renderer.
  SDL_SetDefaultTextureScaleMode: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetDefaultTextureScaleMode(SDL_Renderer *renderer, SDL_ScaleMode *scale_mode);                                                                                                                                                                         // Get default texture scale mode of the given renderer.
  SDL_GetDefaultTextureScaleMode: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_GPURenderState * SDL_CreateGPURenderState(SDL_Renderer *renderer, SDL_GPURenderStateCreateInfo *createinfo);                                                                                                                                                // Create custom GPU render state.
  SDL_CreateGPURenderState: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetGPURenderStateFragmentUniforms(SDL_GPURenderState *state, Uint32 slot_index, const void *data, Uint32 length);                                                                                                                                      // Set fragment shader uniform variables in a custom GPU render state.
  SDL_SetGPURenderStateFragmentUniforms: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_SetGPURenderState(SDL_Renderer *renderer, SDL_GPURenderState *state);                                                                                                                                                                                  // Set custom GPU render state.
  SDL_SetGPURenderState: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_DestroyGPURenderState(SDL_GPURenderState *state);                                                                                                                                                                                                      // Destroy custom GPU render state.
  SDL_DestroyGPURenderState: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
