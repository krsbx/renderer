import { type FFIFunction, FFIType } from 'bun:ffi';

export const VideoDefinition = {
  // int SDL_GetNumVideoDrivers(void);                                                                                                                                                                     // Get the number of video drivers compiled into SDL.
  SDL_GetNumVideoDrivers: {
    args: [],
    returns: FFIType.i32,
  },
  // const char * SDL_GetVideoDriver(int index);                                                                                                                                                           // Get the name of a built in video driver.
  SDL_GetVideoDriver: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetCurrentVideoDriver(void);                                                                                                                                                         // Get the name of the currently initialized video driver.
  SDL_GetCurrentVideoDriver: {
    args: [],
    returns: FFIType.cstring,
  },
  // SDL_SystemTheme SDL_GetSystemTheme(void);                                                                                                                                                             // Get the current system theme.
  SDL_GetSystemTheme: {
    args: [],
    returns: FFIType.i32,
  },
  // SDL_DisplayID * SDL_GetDisplays(int *count);                                                                                                                                                          // Get a list of currently connected displays.
  SDL_GetDisplays: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_DisplayID SDL_GetPrimaryDisplay(void);                                                                                                                                                            // Return the primary display.
  SDL_GetPrimaryDisplay: {
    args: [],
    returns: FFIType.u32,
  },
  // SDL_PropertiesID SDL_GetDisplayProperties(SDL_DisplayID displayID);                                                                                                                                   // Get the properties associated with a display.
  SDL_GetDisplayProperties: {
    args: [FFIType.u32],
    returns: FFIType.u32,
  },
  // const char * SDL_GetDisplayName(SDL_DisplayID displayID);                                                                                                                                             // Get the name of a display in UTF-8 encoding.
  SDL_GetDisplayName: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // bool SDL_GetDisplayBounds(SDL_DisplayID displayID, SDL_Rect *rect);                                                                                                                                   // Get the desktop area represented by a display.
  SDL_GetDisplayBounds: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetDisplayUsableBounds(SDL_DisplayID displayID, SDL_Rect *rect);                                                                                                                             // Get the usable desktop area represented by a display, in screen coordinates.
  SDL_GetDisplayUsableBounds: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_DisplayOrientation SDL_GetNaturalDisplayOrientation(SDL_DisplayID displayID);                                                                                                                     // Get the orientation of a display when it is unrotated.
  SDL_GetNaturalDisplayOrientation: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // SDL_DisplayOrientation SDL_GetCurrentDisplayOrientation(SDL_DisplayID displayID);                                                                                                                     // Get the orientation of a display.
  SDL_GetCurrentDisplayOrientation: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // float SDL_GetDisplayContentScale(SDL_DisplayID displayID);                                                                                                                                            // Get the content scale of a display.
  SDL_GetDisplayContentScale: {
    args: [FFIType.u32],
    returns: FFIType.f32,
  },
  // SDL_DisplayMode ** SDL_GetFullscreenDisplayModes(SDL_DisplayID displayID, int *count);                                                                                                                // Get a list of fullscreen display modes available on a display.
  SDL_GetFullscreenDisplayModes: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_GetClosestFullscreenDisplayMode(SDL_DisplayID displayID, int w, int h, float refresh_rate, bool include_high_density_modes, SDL_DisplayMode *closest);                                       // Get the closest match to the requested display mode.
  SDL_GetClosestFullscreenDisplayMode: {
    args: [
      FFIType.u32,
      FFIType.i32,
      FFIType.i32,
      FFIType.f32,
      FFIType.bool,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // const SDL_DisplayMode * SDL_GetDesktopDisplayMode(SDL_DisplayID displayID);                                                                                                                           // Get information about the desktop's display mode.
  SDL_GetDesktopDisplayMode: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // const SDL_DisplayMode * SDL_GetCurrentDisplayMode(SDL_DisplayID displayID);                                                                                                                           // Get information about the current display mode.
  SDL_GetCurrentDisplayMode: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_DisplayID SDL_GetDisplayForPoint(const SDL_Point *point);                                                                                                                                         // Get the display containing a point.
  SDL_GetDisplayForPoint: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_DisplayID SDL_GetDisplayForRect(const SDL_Rect *rect);                                                                                                                                            // Get the display primarily containing a rect.
  SDL_GetDisplayForRect: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_DisplayID SDL_GetDisplayForWindow(SDL_Window *window);                                                                                                                                            // Get the display associated with a window.
  SDL_GetDisplayForWindow: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // float SDL_GetWindowPixelDensity(SDL_Window *window);                                                                                                                                                  // Get the pixel density of a window.
  SDL_GetWindowPixelDensity: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // float SDL_GetWindowDisplayScale(SDL_Window *window);                                                                                                                                                  // Get the content display scale relative to a window's pixel size.
  SDL_GetWindowDisplayScale: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // bool SDL_SetWindowFullscreenMode(SDL_Window *window, const SDL_DisplayMode *mode);                                                                                                                    // Set the display mode to use when a window is visible and fullscreen.
  SDL_SetWindowFullscreenMode: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // const SDL_DisplayMode * SDL_GetWindowFullscreenMode(SDL_Window *window);                                                                                                                              // Query the display mode to use when a window is visible at fullscreen.
  SDL_GetWindowFullscreenMode: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void * SDL_GetWindowICCProfile(SDL_Window *window, size_t *size);                                                                                                                                     // Get the raw ICC profile data for the screen the window is currently on.
  SDL_GetWindowICCProfile: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_PixelFormat SDL_GetWindowPixelFormat(SDL_Window *window);                                                                                                                                         // Get the pixel format associated with the window.
  SDL_GetWindowPixelFormat: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_Window ** SDL_GetWindows(int *count);                                                                                                                                                             // Get a list of valid windows.
  SDL_GetWindows: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Window * SDL_CreateWindow(const char *title, int w, int h, SDL_WindowFlags flags);                                                                                                                // Create a window with the specified dimensions and flags.
  SDL_CreateWindow: {
    args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.u64],
    returns: FFIType.ptr,
  },
  // SDL_Window * SDL_CreatePopupWindow(SDL_Window *parent, int offset_x, int offset_y, int w, int h, SDL_WindowFlags flags);                                                                              // Create a child popup window of the specified parent window.
  SDL_CreatePopupWindow: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.u64,
    ],
    returns: FFIType.ptr,
  },
  // SDL_Window * SDL_CreateWindowWithProperties(SDL_PropertiesID props);                                                                                                                                  // Create a window with the specified properties.
  SDL_CreateWindowWithProperties: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_WindowID SDL_GetWindowID(SDL_Window *window);                                                                                                                                                     // Get the numeric ID of a window.
  SDL_GetWindowID: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_Window * SDL_GetWindowFromID(SDL_WindowID id);                                                                                                                                                    // Get a window from a stored ID.
  SDL_GetWindowFromID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Window * SDL_GetWindowParent(SDL_Window *window);                                                                                                                                                 // Get parent of a window.
  SDL_GetWindowParent: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_PropertiesID SDL_GetWindowProperties(SDL_Window *window);                                                                                                                                         // Get the properties associated with a window.
  SDL_GetWindowProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_WindowFlags SDL_GetWindowFlags(SDL_Window *window);                                                                                                                                               // Get the window flags.
  SDL_GetWindowFlags: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
  // bool SDL_SetWindowTitle(SDL_Window *window, const char *title);                                                                                                                                       // Set the title of a window.
  SDL_SetWindowTitle: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // const char * SDL_GetWindowTitle(SDL_Window *window);                                                                                                                                                  // Get the title of a window.
  SDL_GetWindowTitle: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // bool SDL_SetWindowIcon(SDL_Window *window, SDL_Surface *icon);                                                                                                                                        // Set the icon for a window.
  SDL_SetWindowIcon: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowPosition(SDL_Window *window, int x, int y);                                                                                                                                         // Request that the window's position be set.
  SDL_SetWindowPosition: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowPosition(SDL_Window *window, int *x, int *y);                                                                                                                                       // Get the position of a window.
  SDL_GetWindowPosition: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowSize(SDL_Window *window, int w, int h);                                                                                                                                             // Request that the size of a window's client area be set.
  SDL_SetWindowSize: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowSize(SDL_Window *window, int *w, int *h);                                                                                                                                           // Get the size of a window's client area.
  SDL_GetWindowSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowSafeArea(SDL_Window *window, SDL_Rect *rect);                                                                                                                                       // Get the safe area for this window.
  SDL_GetWindowSafeArea: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowAspectRatio(SDL_Window *window, float min_aspect, float max_aspect);                                                                                                                // Request that the aspect ratio of a window's client area be set.
  SDL_SetWindowAspectRatio: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowAspectRatio(SDL_Window *window, float *min_aspect, float *max_aspect);                                                                                                              // Get the aspect ratio of a window's client area.
  SDL_GetWindowAspectRatio: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowBordersSize(SDL_Window *window, int *top, int *left, int *bottom, int *right);                                                                                                      // Get the size of a window's borders (decorations) around the client area.
  SDL_GetWindowBordersSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowSizeInPixels(SDL_Window *window, int *w, int *h);                                                                                                                                   // Get the size of a window's client area, in pixels.
  SDL_GetWindowSizeInPixels: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowMinimumSize(SDL_Window *window, int min_w, int min_h);                                                                                                                              // Set the minimum size of a window's client area.
  SDL_SetWindowMinimumSize: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowMinimumSize(SDL_Window *window, int *w, int *h);                                                                                                                                    // Get the minimum size of a window's client area.
  SDL_GetWindowMinimumSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowMaximumSize(SDL_Window *window, int max_w, int max_h);                                                                                                                              // Set the maximum size of a window's client area.
  SDL_SetWindowMaximumSize: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowMaximumSize(SDL_Window *window, int *w, int *h);                                                                                                                                    // Get the maximum size of a window's client area.
  SDL_GetWindowMaximumSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowBordered(SDL_Window *window, bool bordered);                                                                                                                                        // Set the border state of a window.
  SDL_SetWindowBordered: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowResizable(SDL_Window *window, bool resizable);                                                                                                                                      // Set the user-resizable state of a window.
  SDL_SetWindowResizable: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowAlwaysOnTop(SDL_Window *window, bool on_top);                                                                                                                                       // Set the window to always be above the others.
  SDL_SetWindowAlwaysOnTop: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowFillDocument(SDL_Window *window, bool fill);                                                                                                                                        // Set the window to fill the current document space (Emscripten only).
  SDL_SetWindowFillDocument: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_ShowWindow(SDL_Window *window);                                                                                                                                                              // Show a window.
  SDL_ShowWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_HideWindow(SDL_Window *window);                                                                                                                                                              // Hide a window.
  SDL_HideWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RaiseWindow(SDL_Window *window);                                                                                                                                                             // Request that a window be raised above other windows and gain the input focus.
  SDL_RaiseWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_MaximizeWindow(SDL_Window *window);                                                                                                                                                          // Request that the window be made as large as possible.
  SDL_MaximizeWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_MinimizeWindow(SDL_Window *window);                                                                                                                                                          // Request that the window be minimized to an iconic representation.
  SDL_MinimizeWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RestoreWindow(SDL_Window *window);                                                                                                                                                           // Request that the size and position of a minimized or maximized window be restored.
  SDL_RestoreWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowFullscreen(SDL_Window *window, bool fullscreen);                                                                                                                                    // Request that the window's fullscreen state be changed.
  SDL_SetWindowFullscreen: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SyncWindow(SDL_Window *window);                                                                                                                                                              // Block until any pending window state is finalized.
  SDL_SyncWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WindowHasSurface(SDL_Window *window);                                                                                                                                                        // Return whether the window has a surface associated with it.
  SDL_WindowHasSurface: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Surface * SDL_GetWindowSurface(SDL_Window *window);                                                                                                                                               // Get the SDL surface associated with the window.
  SDL_GetWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetWindowSurfaceVSync(SDL_Window *window, int vsync);                                                                                                                                        // Toggle VSync for the window surface.
  SDL_SetWindowSurfaceVSync: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowSurfaceVSync(SDL_Window *window, int *vsync);                                                                                                                                       // Get VSync for the window surface.
  SDL_GetWindowSurfaceVSync: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_UpdateWindowSurface(SDL_Window *window);                                                                                                                                                     // Copy the window surface to the screen.
  SDL_UpdateWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_UpdateWindowSurfaceRects(SDL_Window *window, const SDL_Rect *rects, int numrects);                                                                                                           // Copy areas of the window surface to the screen.
  SDL_UpdateWindowSurfaceRects: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_DestroyWindowSurface(SDL_Window *window);                                                                                                                                                    // Destroy the surface associated with the window.
  SDL_DestroyWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowKeyboardGrab: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowMouseGrab(SDL_Window *window, bool grabbed);                                                                                                                                        // Set a window's mouse grab mode.
  SDL_SetWindowMouseGrab: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowMouseGrab(SDL_Window *window);                                                                                                                                                      // Get a window's mouse grab mode.
  SDL_GetWindowMouseGrab: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowKeyboardGrab(SDL_Window *window);                                                                                                                                                   // Get a window's keyboard grab mode.
  SDL_GetWindowKeyboardGrab: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Window * SDL_GetGrabbedWindow(void);                                                                                                                                                              // Get the window that currently has an input grab enabled.
  SDL_GetGrabbedWindow: {
    args: [],
    returns: FFIType.ptr,
  },
  // bool SDL_SetWindowMouseRect(SDL_Window *window, const SDL_Rect *rect);                                                                                                                                // Confines the cursor to the specified area of a window.
  SDL_SetWindowMouseRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // const SDL_Rect * SDL_GetWindowMouseRect(SDL_Window *window);                                                                                                                                          // Get the mouse confinement rectangle of a window.
  SDL_GetWindowMouseRect: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowOpacity(SDL_Window *window, float opacity);                                                                                                                                         // Set the opacity for a window.
  SDL_SetWindowOpacity: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // float SDL_GetWindowOpacity(SDL_Window *window);                                                                                                                                                       // Get the opacity of a window.
  SDL_GetWindowOpacity: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // bool SDL_SetWindowParent(SDL_Window *window, SDL_Window *parent);                                                                                                                                     // Set the window as a child of a parent window.
  SDL_SetWindowParent: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetWindowModal(SDL_Window *window, bool modal);                                                                                                                                              // Toggle the state of the window as modal.
  SDL_SetWindowModal: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  // bool SDL_SetWindowFocusable(SDL_Window *window, bool focusable);                                                                                                                                      // Set whether the window may have input focus.
  SDL_SetWindowFocusable: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_ShowWindowSystemMenu(SDL_Window *window, int x, int y);                                                                                                                                      // Display the system-level window menu.
  SDL_ShowWindowSystemMenu: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowHitTest(SDL_Window *window, SDL_HitTest callback, void *callback_data);                                                                                                             // Provide a callback that decides if a window region has special properties.
  SDL_SetWindowHitTest: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowShape(SDL_Window *window, SDL_Surface *shape);                                                                                                                                      // Set the shape of a transparent window.
  SDL_SetWindowShape: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_FlashWindow(SDL_Window *window, SDL_FlashOperation operation);                                                                                                                               // Request a window to demand attention from the user.
  SDL_FlashWindow: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowProgressState(SDL_Window *window, SDL_ProgressState state);                                                                                                                         // Sets the state of the progress bar for the given windowâs taskbar icon.
  SDL_SetWindowProgressState: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // SDL_ProgressState SDL_GetWindowProgressState(SDL_Window *window);                                                                                                                                     // Get the state of the progress bar for the given windowâs taskbar icon.
  SDL_GetWindowProgressState: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_SetWindowProgressValue(SDL_Window *window, float value);                                                                                                                                     // Sets the value of the progress bar for the given windowâs taskbar icon.
  SDL_SetWindowProgressValue: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // float SDL_GetWindowProgressValue(SDL_Window *window);                                                                                                                                                 // Get the value of the progress bar for the given windowâs taskbar icon.
  SDL_GetWindowProgressValue: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // void SDL_DestroyWindow(SDL_Window *window);                                                                                                                                                           // Destroy a window.
  SDL_DestroyWindow: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_ScreenSaverEnabled(void);                                                                                                                                                                    // Check whether the screensaver is currently enabled.
  SDL_ScreenSaverEnabled: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_EnableScreenSaver(void);                                                                                                                                                                     // Allow the screen to be blanked by a screen saver.
  SDL_EnableScreenSaver: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_DisableScreenSaver(void);                                                                                                                                                                    // Prevent the screen from being blanked by a screen saver.
  SDL_DisableScreenSaver: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_GL_LoadLibrary(const char *path);                                                                                                                                                            // Dynamically load an OpenGL library.
  SDL_GL_LoadLibrary: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // SDL_FunctionPointer SDL_GL_GetProcAddress(const char *proc);                                                                                                                                          // Get an OpenGL function by name.
  SDL_GL_GetProcAddress: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  // SDL_FunctionPointer SDL_EGL_GetProcAddress(const char *proc);                                                                                                                                         // Get an EGL library function by name.
  SDL_EGL_GetProcAddress: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  // void SDL_GL_UnloadLibrary(void);                                                                                                                                                                      // Unload the OpenGL library previously loaded by SDL_GL_LoadLibrary().
  SDL_GL_UnloadLibrary: {
    args: [],
    returns: FFIType.void,
  },
  // bool SDL_GL_ExtensionSupported(const char *extension);                                                                                                                                                // Check if an OpenGL extension is supported for the current context.
  SDL_GL_ExtensionSupported: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // void SDL_GL_ResetAttributes(void);                                                                                                                                                                    // Reset all previously set OpenGL context attributes to their default values.
  SDL_GL_ResetAttributes: {
    args: [],
    returns: FFIType.void,
  },
  // bool SDL_GL_SetAttribute(SDL_GLAttr attr, int value);                                                                                                                                                 // Set an OpenGL window attribute before window creation.
  SDL_GL_SetAttribute: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GL_GetAttribute(SDL_GLAttr attr, int *value);                                                                                                                                                // Get the actual value for an attribute from the current context.
  SDL_GL_GetAttribute: {
    args: [FFIType.i32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_GLContext SDL_GL_CreateContext(SDL_Window *window);                                                                                                                                               // Create an OpenGL context for an OpenGL window, and make it current.
  SDL_GL_CreateContext: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_GL_MakeCurrent(SDL_Window *window, SDL_GLContext context);                                                                                                                                   // Set up an OpenGL context for rendering into an OpenGL window.
  SDL_GL_MakeCurrent: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Window * SDL_GL_GetCurrentWindow(void);                                                                                                                                                           // Get the currently active OpenGL window.
  SDL_GL_GetCurrentWindow: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_GLContext SDL_GL_GetCurrentContext(void);                                                                                                                                                         // Get the currently active OpenGL context.
  SDL_GL_GetCurrentContext: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_EGLDisplay SDL_EGL_GetCurrentDisplay(void);                                                                                                                                                       // Get the currently active EGL display.
  SDL_EGL_GetCurrentDisplay: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_EGLConfig SDL_EGL_GetCurrentConfig(void);                                                                                                                                                         // Get the currently active EGL config.
  SDL_EGL_GetCurrentConfig: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_EGLSurface SDL_EGL_GetWindowSurface(SDL_Window *window);                                                                                                                                          // Get the EGL surface associated with the window.
  SDL_EGL_GetWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_EGL_SetAttributeCallbacks(SDL_EGLAttribArrayCallback platformAttribCallback, SDL_EGLIntArrayCallback surfaceAttribCallback, SDL_EGLIntArrayCallback contextAttribCallback, void *userdata);  // Sets the callbacks for defining custom EGLAttrib arrays for EGL initialization.
  SDL_EGL_SetAttributeCallbacks: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_GL_SetSwapInterval(int interval);                                                                                                                                                            // Set the swap interval for the current OpenGL context.
  SDL_GL_SetSwapInterval: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GL_GetSwapInterval(int *interval);                                                                                                                                                           // Get the swap interval for the current OpenGL context.
  SDL_GL_GetSwapInterval: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GL_SwapWindow(SDL_Window *window);                                                                                                                                                           // Update a window with OpenGL rendering.
  SDL_GL_SwapWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GL_DestroyContext(SDL_GLContext context);
  SDL_GL_DestroyContext: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
