import { type FFIFunction, FFIType } from 'bun:ffi';

export const MouseDefinition = {
  // bool SDL_HasMouse(void);                                                                                    // Return whether a mouse is currently connected.
  SDL_HasMouse: {
    args: [],
    returns: FFIType.bool,
  },
  // SDL_MouseID * SDL_GetMice(int *count);                                                                      // Get a list of currently connected mice.
  SDL_GetMice: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetMouseNameForID(SDL_MouseID instance_id);                                                // Get the name of a mouse.
  SDL_GetMouseNameForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // SDL_Window * SDL_GetMouseFocus(void);                                                                       // Get the window which currently has mouse focus.
  SDL_GetMouseFocus: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_MouseButtonFlags SDL_GetMouseState(float *x, float *y);                                                 // Query SDL's cache for the synchronous mouse button state and the window-relative SDL-cursor position.
  SDL_GetMouseState: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_MouseButtonFlags SDL_GetGlobalMouseState(float *x, float *y);                                           // Query the platform for the asynchronous mouse button state and the desktop-relative platform-cursor position.
  SDL_GetGlobalMouseState: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_MouseButtonFlags SDL_GetRelativeMouseState(float *x, float *y);                                         // Query SDL's cache for the synchronous mouse button state and accumulated mouse delta since last call.
  SDL_GetRelativeMouseState: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.u32,
  },
  // void SDL_WarpMouseInWindow(SDL_Window *window, float x, float y);                                           // Move the mouse cursor to the given position within the window.
  SDL_WarpMouseInWindow: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32],
    returns: FFIType.void,
  },
  // bool SDL_WarpMouseGlobal(float x, float y);                                                                 // Move the mouse to the given position in global screen space.
  SDL_WarpMouseGlobal: {
    args: [FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_SetRelativeMouseTransform(SDL_MouseMotionTransformCallback callback, void *userdata);              // Set a user-defined function by which to transform relative mouse inputs.
  SDL_SetRelativeMouseTransform: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetWindowRelativeMouseMode(SDL_Window *window, bool enabled);                                      // Set relative mouse mode for a window.
  SDL_SetWindowRelativeMouseMode: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_GetWindowRelativeMouseMode(SDL_Window *window);                                                    // Query whether relative mouse mode is enabled for a window.
  SDL_GetWindowRelativeMouseMode: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_CaptureMouse(bool enabled);                                                                        // Capture the mouse and to track input outside an SDL window.
  SDL_CaptureMouse: {
    args: [FFIType.bool],
    returns: FFIType.bool,
  },
  // SDL_Cursor * SDL_CreateCursor(const Uint8 *data, const Uint8 *mask, int w, int h, int hot_x, int hot_y);    // Create a cursor using the specified bitmap data and mask (in MSB format).
  SDL_CreateCursor: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
    ],
    returns: FFIType.ptr,
  },
  // SDL_Cursor * SDL_CreateColorCursor(SDL_Surface *surface, int hot_x, int hot_y);                             // Create a color cursor.
  SDL_CreateColorCursor: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.ptr,
  },
  // SDL_Cursor * SDL_CreateAnimatedCursor(SDL_CursorFrameInfo *frames, int frame_count, int hot_x, int hot_y);  // Create an animated color cursor.
  SDL_CreateAnimatedCursor: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.ptr,
  },
  // SDL_Cursor * SDL_CreateSystemCursor(SDL_SystemCursor id);                                                   // Create a system cursor.
  SDL_CreateSystemCursor: {
    args: [FFIType.i32],
    returns: FFIType.ptr,
  },
  // bool SDL_SetCursor(SDL_Cursor *cursor);                                                                     // Set the active cursor.
  SDL_SetCursor: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Cursor * SDL_GetCursor(void);                                                                           // Get the active cursor.
  SDL_GetCursor: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_Cursor * SDL_GetDefaultCursor(void);                                                                    // Get the default cursor.
  SDL_GetDefaultCursor: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_DestroyCursor(SDL_Cursor *cursor);                                                                 // Free a previously-created cursor.
  SDL_DestroyCursor: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_ShowCursor(void);                                                                                  // Show the cursor.
  SDL_ShowCursor: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HideCursor(void);                                                                                  // Hide the cursor.
  SDL_HideCursor: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_CursorVisible(void);                                                                               // Return whether the cursor is currently being shown.
  SDL_CursorVisible: {
    args: [],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
