import { type FFIFunction, FFIType } from 'bun:ffi';

export const VideoDefinition = {
  SDL_GetNumVideoDrivers: {
    args: [],
    returns: FFIType.i32,
  },
  SDL_GetVideoDriver: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  SDL_GetCurrentVideoDriver: {
    args: [],
    returns: FFIType.cstring,
  },
  SDL_GetSystemTheme: {
    args: [],
    returns: FFIType.i32,
  },
  SDL_GetDisplays: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_GetPrimaryDisplay: {
    args: [],
    returns: FFIType.u32,
  },
  SDL_GetDisplayProperties: {
    args: [FFIType.u32],
    returns: FFIType.u32,
  },
  SDL_GetDisplayName: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  SDL_GetDisplayBounds: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetDisplayUsableBounds: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetNaturalDisplayOrientation: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  SDL_GetCurrentDisplayOrientation: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  SDL_GetDisplayContentScale: {
    args: [FFIType.u32],
    returns: FFIType.f32,
  },
  SDL_GetFullscreenDisplayModes: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
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
  SDL_GetDesktopDisplayMode: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  SDL_GetCurrentDisplayMode: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  SDL_GetDisplayForPoint: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  SDL_GetDisplayForRect: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  SDL_GetDisplayForWindow: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  SDL_GetWindowPixelDensity: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  SDL_GetWindowDisplayScale: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  SDL_SetWindowFullscreenMode: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetWindowFullscreenMode: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_GetWindowICCProfile: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_GetWindowPixelFormat: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  SDL_GetWindows: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_CreateWindow: {
    args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.u64],
    returns: FFIType.ptr,
  },
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
  SDL_CreateWindowWithProperties: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  SDL_GetWindowID: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  SDL_GetWindowFromID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  SDL_GetWindowParent: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_GetWindowProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  SDL_GetWindowFlags: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
  SDL_SetWindowTitle: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_GetWindowTitle: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  SDL_SetWindowIcon: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowPosition: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GetWindowPosition: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowSize: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GetWindowSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetWindowSafeArea: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowAspectRatio: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32],
    returns: FFIType.bool,
  },
  SDL_GetWindowAspectRatio: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetWindowBordersSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetWindowSizeInPixels: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowMinimumSize: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GetWindowMinimumSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowMaximumSize: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GetWindowMaximumSize: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowBordered: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_SetWindowResizable: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_SetWindowAlwaysOnTop: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_SetWindowFillDocument: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_ShowWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_HideWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_RaiseWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_MaximizeWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_MinimizeWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_RestoreWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowFullscreen: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_SyncWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_WindowHasSurface: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_SetWindowSurfaceVSync: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GetWindowSurfaceVSync: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_UpdateWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_UpdateWindowSurfaceRects: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_DestroyWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowKeyboardGrab: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_SetWindowMouseGrab: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_GetWindowMouseGrab: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetGrabbedWindow: {
    args: [],
    returns: FFIType.ptr,
  },
  SDL_SetWindowMouseRect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GetWindowMouseRect: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowOpacity: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  SDL_GetWindowOpacity: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  SDL_SetWindowParent: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_SetWindowModal: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  SDL_SetWindowFocusable: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  SDL_ShowWindowSystemMenu: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_SetWindowHitTest: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_SetWindowShape: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_FlashWindow: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  SDL_SetWindowProgressState: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GetWindowProgressState: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  SDL_SetWindowProgressValue: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  SDL_GetWindowProgressValue: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  SDL_DestroyWindow: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  SDL_ScreenSaverEnabled: {
    args: [],
    returns: FFIType.bool,
  },
  SDL_EnableScreenSaver: {
    args: [],
    returns: FFIType.bool,
  },
  SDL_DisableScreenSaver: {
    args: [],
    returns: FFIType.bool,
  },
  SDL_GL_LoadLibrary: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_FunctionPointer: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  SDL_EGL_GetProcAddress: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  SDL_GL_UnloadLibrary: {
    args: [],
    returns: FFIType.void,
  },
  SDL_GL_ExtensionSupported: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  SDL_GL_ResetAttributes: {
    args: [],
    returns: FFIType.void,
  },
  SDL_GL_SetAttribute: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GL_GetAttribute: {
    args: [FFIType.i32, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GL_CreateContext: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_GL_MakeCurrent: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GL_GetCurrentWindow: {
    args: [],
    returns: FFIType.ptr,
  },
  SDL_GL_GetCurrentContext: {
    args: [],
    returns: FFIType.ptr,
  },
  SDL_EGL_GetCurrentDisplay: {
    args: [],
    returns: FFIType.ptr,
  },
  SDL_EGL_GetCurrentConfig: {
    args: [],
    returns: FFIType.ptr,
  },
  SDL_EGL_GetWindowSurface: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  SDL_EGL_SetAttributeCallbacks: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  SDL_GL_SetSwapInterval: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  SDL_GL_GetSwapInterval: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GL_SwapWindow: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SDL_GL_DestroyContext: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
