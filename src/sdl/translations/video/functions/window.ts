import type { SDL } from '@/sdl';
import type { Window } from '@/sdl/types/definition';
import type { Float, Int32, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import type {
  FlashOperation,
  ProgressState,
  WindowFlags,
} from '../../../ffi/video/constant';
import { Rect } from '../../rect/struct';
import { Surface } from '../../surface/struct';
import { DisplayMode } from '../struct';
import type { WindowHitTestCallbackFn } from '../types/callback';
import {
  createWindowHitTestCallback,
  registerWindowHitTestCallback,
  unregisterWindowHitTestCallback,
} from '../utility/callback';

export function getWindowPixelDensity(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowPixelDensity(window) as Float;
}

export function getWindowDisplayScale(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowDisplayScale(window) as Float;
}

export function setWindowFullscreenMode(
  this: SDL,
  options: {
    window: Window;
    mode: DisplayMode;
  }
) {
  return this.symbols.SDL_SetWindowFullscreenMode(
    options.window,
    options.mode.$memory
  );
}

export function getWindowFullscreenMode(this: SDL, window: Window) {
  const result = this.symbols.SDL_GetWindowFullscreenMode(window);

  if (!result) return null;

  return new DisplayMode(result);
}

export function getWindowIccProfile(this: SDL, window: Window) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });

  const memory = this.symbols.SDL_GetWindowICCProfile(
    window,
    sizeStruct.$memory
  );

  if (!memory) return null;

  const size = Number(sizeStruct.getValue(0, 'i64'));
  const data = new CStruct({
    length: size,
    address: memory,
  }).clone().$memory;

  this.symbols.SDL_free(memory);

  return {
    size,
    data,
  };
}

export function getWindowPixelFormat(this: SDL, window: Window) {
  const result = this.symbols.SDL_GetWindowPixelFormat(window);

  return result as PixelFormat;
}

export function getWindows(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetWindows(countStruct.$memory);

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const result = CStruct.readArrayPrimitive(listPtr, count, 'ptr') as Window[];

  this.symbols.SDL_free(listPtr);

  return result;
}

export function createWindow(
  this: SDL,
  options: {
    title: string;
    w: Int32;
    h: Int32;
    flags: WindowFlags;
  }
) {
  return this.symbols.SDL_CreateWindow(
    stringToCString(options.title).ptr,
    options.w,
    options.h,
    options.flags
  ) as Window | null;
}

export function createPopupWindow(
  this: SDL,
  options: {
    parent: Window;
    x: Int32;
    y: Int32;
    w: Int32;
    h: Int32;
    flags: WindowFlags;
  }
) {
  return this.symbols.SDL_CreatePopupWindow(
    options.parent,
    options.x,
    options.y,
    options.w,
    options.h,
    options.flags
  ) as Window | null;
}

export function createWindowWithProperties(this: SDL, props: UInt32) {
  return this.symbols.SDL_CreateWindowWithProperties(props) as Window | null;
}

export function getWindowId(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowID(window) as UInt32;
}

export function getWindowFromId(this: SDL, id: UInt32) {
  return this.symbols.SDL_GetWindowFromID(id) as Window | null;
}

export function getWindowParent(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowParent(window) as Window | null;
}

export function getWindowProperties(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowProperties(window) as UInt32;
}

export function getWindowFlags(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowFlags(window) as WindowFlags;
}

export function setWindowTitle(
  this: SDL,
  options: {
    window: Window;
    title: string;
  }
) {
  return this.symbols.SDL_SetWindowTitle(
    options.window,
    stringToCString(options.title).ptr
  );
}

export function getWindowTitle(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowTitle(window).toString();
}

export function setWindowIcon(
  this: SDL,
  options: {
    window: Window;
    icon: Surface;
  }
) {
  return this.symbols.SDL_SetWindowIcon(options.window, options.icon.$memory);
}

export function setWindowPosition(
  this: SDL,
  options: {
    window: Window;
    x: Int32;
    y: Int32;
  }
) {
  return this.symbols.SDL_SetWindowPosition(
    options.window,
    options.x,
    options.y
  );
}

export function getWindowPosition(this: SDL, window: Window) {
  const posXStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const posYStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowPosition(
    window,
    posXStruct.$memory,
    posYStruct.$memory
  );

  if (!success) return null;

  return {
    x: posXStruct.getValue(0, 'i32') as Int32,
    y: posYStruct.getValue(0, 'i32') as Int32,
  };
}

export function setWindowSize(
  this: SDL,
  options: {
    window: Window;
    w: Int32;
    h: Int32;
  }
) {
  return this.symbols.SDL_SetWindowSize(options.window, options.w, options.h);
}

export function getWindowSize(this: SDL, window: Window) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowSize(
    window,
    wStruct.$memory,
    hStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32') as Int32,
    h: hStruct.getValue(0, 'i32') as Int32,
  };
}

export function getWindowSafeArea(this: SDL, window: Window) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetWindowSafeArea(window, rect.$memory);

  if (!success) return null;

  return rect;
}

export function setWindowAspectRatio(
  this: SDL,
  options: {
    window: Window;
    minAspect: Float;
    maxAspect: Float;
  }
) {
  return this.symbols.SDL_SetWindowAspectRatio(
    options.window,
    options.minAspect,
    options.maxAspect
  );
}

export function getWindowAspectRatio(this: SDL, window: Window) {
  const minAspectStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const maxAspectStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetWindowAspectRatio(
    window,
    minAspectStruct.$memory,
    maxAspectStruct.$memory
  );

  if (!success) return null;

  return {
    minAspect: minAspectStruct.getValue(0, 'f32') as Float,
    maxAspect: maxAspectStruct.getValue(0, 'f32') as Float,
  };
}

export function getWindowBordersSize(this: SDL, window: Window) {
  const topStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const leftStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const bottomStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const rightStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowBordersSize(
    window,
    topStruct.$memory,
    leftStruct.$memory,
    bottomStruct.$memory,
    rightStruct.$memory
  );

  if (!success) return null;

  return {
    top: topStruct.getValue(0, 'i32') as Int32,
    left: leftStruct.getValue(0, 'i32') as Int32,
    bottom: bottomStruct.getValue(0, 'i32') as Int32,
    right: rightStruct.getValue(0, 'i32') as Int32,
  };
}

export function getWindowSizeInPixels(this: SDL, window: Window) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowSizeInPixels(
    window,
    wStruct.$memory,
    hStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32') as Int32,
    h: hStruct.getValue(0, 'i32') as Int32,
  };
}

export function setWindowMinimumSize(
  this: SDL,
  options: {
    window: Window;
    minW: Int32;
    minH: Int32;
  }
) {
  return this.symbols.SDL_SetWindowMinimumSize(
    options.window,
    options.minW,
    options.minH
  );
}

export function getWindowMinimumSize(this: SDL, window: Window) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowMinimumSize(
    window,
    wStruct.$memory,
    hStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32') as Int32,
    h: hStruct.getValue(0, 'i32') as Int32,
  };
}

export function setWindowMaximumSize(
  this: SDL,
  options: {
    window: Window;
    maxW: Int32;
    maxH: Int32;
  }
) {
  return this.symbols.SDL_SetWindowMaximumSize(
    options.window,
    options.maxW,
    options.maxH
  );
}

export function getWindowMaximumSize(this: SDL, window: Window) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowMaximumSize(
    window,
    wStruct.$memory,
    hStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32') as Int32,
    h: hStruct.getValue(0, 'i32') as Int32,
  };
}

export function setWindowBordered(
  this: SDL,
  options: {
    window: Window;
    bordered: boolean;
  }
) {
  return this.symbols.SDL_SetWindowBordered(options.window, options.bordered);
}

export function setWindowResizable(
  this: SDL,
  options: {
    window: Window;
    resizable: boolean;
  }
) {
  return this.symbols.SDL_SetWindowResizable(options.window, options.resizable);
}

export function setWindowAlwaysOnTop(
  this: SDL,
  options: {
    window: Window;
    onTop: boolean;
  }
) {
  return this.symbols.SDL_SetWindowAlwaysOnTop(options.window, options.onTop);
}

export function setWindowFillDocument(
  this: SDL,
  options: {
    window: Window;
    fillDocument: boolean;
  }
) {
  return this.symbols.SDL_SetWindowFillDocument(
    options.window,
    options.fillDocument
  );
}

export function showWindow(this: SDL, window: Window) {
  return this.symbols.SDL_ShowWindow(window);
}

export function hideWindow(this: SDL, window: Window) {
  return this.symbols.SDL_HideWindow(window);
}

export function raiseWindow(this: SDL, window: Window) {
  return this.symbols.SDL_RaiseWindow(window);
}

export function maximizeWindow(this: SDL, window: Window) {
  return this.symbols.SDL_MaximizeWindow(window);
}

export function minimizeWindow(this: SDL, window: Window) {
  return this.symbols.SDL_MinimizeWindow(window);
}

export function restoreWindow(this: SDL, window: Window) {
  return this.symbols.SDL_RestoreWindow(window);
}

export function setWindowFullscreen(
  this: SDL,
  options: {
    window: Window;
    fullscreen: boolean;
  }
) {
  return this.symbols.SDL_SetWindowFullscreen(
    options.window,
    options.fullscreen
  );
}

export function syncWindow(this: SDL, window: Window) {
  return this.symbols.SDL_SyncWindow(window);
}

export function windowHasSurface(this: SDL, window: Window) {
  return this.symbols.SDL_WindowHasSurface(window);
}

export function getWindowSurface(this: SDL, window: Window) {
  const surfacePtr = this.symbols.SDL_GetWindowSurface(window);

  if (!surfacePtr) return null;

  return new Surface(surfacePtr);
}

export function setWindowSurfaceVSync(
  this: SDL,
  options: {
    window: Window;
    vsync: Int32;
  }
) {
  return this.symbols.SDL_SetWindowSurfaceVSync(options.window, options.vsync);
}

export function getWindowSurfaceVSync(this: SDL, window: Window) {
  const vsyncStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowSurfaceVSync(
    window,
    vsyncStruct.$memory
  );

  return success ? (vsyncStruct.getValue(0, 'i32') as Int32) : null;
}

export function updateWindowSurface(this: SDL, window: Window) {
  return this.symbols.SDL_UpdateWindowSurface(window);
}

export function updateWindowSurfaceRects(
  this: SDL,
  options: {
    window: Window;
    rects: Rect[];
  }
) {
  const { buffer: rects } = CStruct.writeArray(options.rects, Rect.BYTE_SIZE);

  return this.symbols.SDL_UpdateWindowSurfaceRects(
    options.window,
    rects,
    options.rects.length
  );
}

export function destroyWindowSurface(this: SDL, window: Window) {
  return this.symbols.SDL_DestroyWindowSurface(window);
}

export function setWindowKeyboardGrab(
  this: SDL,
  options: {
    window: Window;
    grab: boolean;
  }
) {
  return this.symbols.SDL_SetWindowKeyboardGrab(options.window, options.grab);
}

export function setWindowMouseGrab(
  this: SDL,
  options: {
    window: Window;
    grab: boolean;
  }
) {
  return this.symbols.SDL_SetWindowMouseGrab(options.window, options.grab);
}

export function getWindowMouseGrab(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowMouseGrab(window);
}

export function getWindowKeyboardGrab(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowKeyboardGrab(window);
}

export function getGrabbedWindow(this: SDL) {
  return this.symbols.SDL_GetGrabbedWindow() as Window | null;
}

export function setWindowMouseRect(
  this: SDL,
  options: {
    window: Window;
    rect: Rect;
  }
) {
  return this.symbols.SDL_SetWindowMouseRect(
    options.window,
    options.rect.$memory
  );
}

export function getWindowMouseRect(this: SDL, window: Window) {
  const rect = this.symbols.SDL_GetWindowMouseRect(window);

  return rect ? new Rect(rect) : null;
}

export function setWindowOpacity(
  this: SDL,
  options: {
    window: Window;
    opacity: Float;
  }
) {
  return this.symbols.SDL_SetWindowOpacity(options.window, options.opacity);
}

export function getWindowOpacity(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowOpacity(window) as Float;
}

export function setWindowParent(
  this: SDL,
  options: {
    window: Window;
    parent: Window;
  }
) {
  return this.symbols.SDL_SetWindowParent(options.window, options.parent);
}

export function setWindowModal(
  this: SDL,
  options: {
    window: Window;
    modal: boolean;
  }
) {
  return this.symbols.SDL_SetWindowModal(options.window, options.modal);
}

export function setWindowFocusable(
  this: SDL,
  options: {
    window: Window;
    focusable: boolean;
  }
) {
  return this.symbols.SDL_SetWindowFocusable(options.window, options.focusable);
}

export function showWindowSystemMenu(
  this: SDL,
  options: {
    window: Window;
    x: Int32;
    y: Int32;
  }
) {
  return this.symbols.SDL_ShowWindowSystemMenu(
    options.window,
    options.x,
    options.y
  );
}

export function setWindowHitTest(
  this: SDL,
  options: {
    window: Window;
    callback: WindowHitTestCallbackFn | null;
  }
) {
  // Unregister any existing callback for this window
  unregisterWindowHitTestCallback(options.window);

  if (!options.callback) {
    return this.symbols.SDL_SetWindowHitTest(options.window, null, null);
  }

  const cb = createWindowHitTestCallback(options.callback);
  registerWindowHitTestCallback(options.window, cb);

  return this.symbols.SDL_SetWindowHitTest(options.window, cb.ptr, null);
}

export function setWindowShape(
  this: SDL,
  options: {
    window: Window;
    shape: Surface;
  }
) {
  return this.symbols.SDL_SetWindowShape(options.window, options.shape.$memory);
}

export function flashWindow(
  this: SDL,
  options: {
    window: Window;
    operation: FlashOperation;
  }
) {
  return this.symbols.SDL_FlashWindow(options.window, options.operation);
}

export function setWindowProgressState(
  this: SDL,
  options: {
    window: Window;
    state: ProgressState;
  }
) {
  return this.symbols.SDL_SetWindowProgressState(options.window, options.state);
}

export function getWindowProgressState(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowProgressState(window) as ProgressState;
}

export function setWindowProgressValue(
  this: SDL,
  options: {
    window: Window;
    value: Float;
  }
) {
  return this.symbols.SDL_SetWindowProgressValue(options.window, options.value);
}

export function getWindowProgressValue(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowProgressValue(window) as Float;
}

export function destroyWindow(this: SDL, window: Window) {
  // Clean up hit test callback if any
  unregisterWindowHitTestCallback(window);
  this.symbols.SDL_DestroyWindow(window);
}
