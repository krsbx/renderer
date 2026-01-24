import { FFIType, type FFIFunction } from 'bun:ffi';

export const WindowDefinition = {
  // void InitWindow(int width, int height, const char *title);
  InitWindow: {
    args: [FFIType.i32, FFIType.i32, FFIType.cstring],
    returns: FFIType.void,
  },
  // void CloseWindow(void);
  CloseWindow: {
    args: [],
    returns: FFIType.void,
  },
  // bool WindowShouldClose(void);
  WindowShouldClose: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowReady(void);
  IsWindowReady: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowFullscreen(void);
  IsWindowFullscreen: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowHidden(void);
  IsWindowHidden: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowMinimized(void);
  IsWindowMinimized: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowMaximized(void);
  IsWindowMaximized: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowFocused(void);
  IsWindowFocused: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowResized(void);
  IsWindowResized: {
    args: [],
    returns: FFIType.bool,
  },
  // bool IsWindowState(unsigned int flag);
  IsWindowState: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // void SetWindowState(unsigned int flags);
  SetWindowState: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // void ClearWindowState(unsigned int flags);
  ClearWindowState: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // void ToggleFullscreen(void);
  ToggleFullscreen: {
    args: [],
    returns: FFIType.void,
  },
  // void ToggleBorderlessWindowed(void);
  ToggleBorderlessWindowed: {
    args: [],
    returns: FFIType.void,
  },
  // void MaximizeWindow(void);
  MaximizeWindow: {
    args: [],
    returns: FFIType.void,
  },
  // void MinimizeWindow(void);
  MinimizeWindow: {
    args: [],
    returns: FFIType.void,
  },
  // void RestoreWindow(void);
  RestoreWindow: {
    args: [],
    returns: FFIType.void,
  },
  // void SetWindowIcon(Image image);
  // Note: Image is a struct passed by value (24 bytes)
  SetWindowIcon: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetWindowIcons(Image *images, int count);
  SetWindowIcons: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetWindowTitle(const char *title);
  SetWindowTitle: {
    args: [FFIType.cstring],
    returns: FFIType.void,
  },
  // void SetWindowPosition(int x, int y);
  SetWindowPosition: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetWindowMonitor(int monitor);
  SetWindowMonitor: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // void SetWindowMinSize(int width, int height);
  SetWindowMinSize: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetWindowMaxSize(int width, int height);
  SetWindowMaxSize: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetWindowSize(int width, int height);
  SetWindowSize: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetWindowOpacity(float opacity);
  SetWindowOpacity: {
    args: [FFIType.f32],
    returns: FFIType.void,
  },
  // void SetWindowFocused(void);
  SetWindowFocused: {
    args: [],
    returns: FFIType.void,
  },
  // void *GetWindowHandle(void);
  GetWindowHandle: {
    args: [],
    returns: FFIType.ptr,
  },
  // int GetScreenWidth(void);
  GetScreenWidth: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetScreenHeight(void);
  GetScreenHeight: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetRenderWidth(void);
  GetRenderWidth: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetRenderHeight(void);
  GetRenderHeight: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetMonitorCount(void);
  GetMonitorCount: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetCurrentMonitor(void);
  GetCurrentMonitor: {
    args: [],
    returns: FFIType.i32,
  },
  // Vector2 GetMonitorPosition(int monitor);
  // Note: Vector2 is 8 bytes (2 floats), returned as struct
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetMonitorPosition: {
  //   args: [FFIType.i32],
  //   returns: FFIType.ptr,
  // },
  // int GetMonitorWidth(int monitor);
  GetMonitorWidth: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int GetMonitorHeight(int monitor);
  GetMonitorHeight: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int GetMonitorPhysicalWidth(int monitor);
  GetMonitorPhysicalWidth: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int GetMonitorPhysicalHeight(int monitor);
  GetMonitorPhysicalHeight: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int GetMonitorRefreshRate(int monitor);
  GetMonitorRefreshRate: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // Vector2 GetWindowPosition(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetWindowPosition: {
  //   args: [],
  //   returns: FFIType.ptr,
  // },
  // Vector2 GetWindowScaleDPI(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetWindowScaleDPI: {
  //   args: [],
  //   returns: FFIType.ptr,
  // },
  // const char *GetMonitorName(int monitor);
  GetMonitorName: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // void SetClipboardText(const char *text);
  SetClipboardText: {
    args: [FFIType.cstring],
    returns: FFIType.void,
  },
  // const char *GetClipboardText(void);
  GetClipboardText: {
    args: [],
    returns: FFIType.cstring,
  },
  // Image GetClipboardImage(void);
  // Note: Image is a struct (24 bytes), need special handling
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetClipboardImage: {
  //   args: [],
  //   returns: FFIType.ptr,
  // },
  // void EnableEventWaiting(void);
  EnableEventWaiting: {
    args: [],
    returns: FFIType.void,
  },
  // void DisableEventWaiting(void);
  DisableEventWaiting: {
    args: [],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
