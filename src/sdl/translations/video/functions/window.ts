import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { JSCallback, Pointer } from 'bun:ffi';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import type {
  FlashOperation,
  ProgressState,
  WindowFlags,
} from '../../../ffi/video/constant';
import { Rect } from '../../rect/utility';
import { Surface } from '../../surface/utility';
import { DisplayMode } from '../utility';

export function getWindowPixelDensity(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowPixelDensity(window);
}

export function getWindowDisplayScale(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowDisplayScale(window);
}

export function setWindowFullscreenMode(
  this: SDL,
  options: {
    window: Pointer;
    mode: DisplayMode;
  }
) {
  return this.symbols.SDL_SetWindowFullscreenMode(
    options.window,
    options.mode.$address
  );
}

export function getWindowFullscreenMode(this: SDL, window: Pointer) {
  const result = this.symbols.SDL_GetWindowFullscreenMode(window);

  if (!result) return null;

  return new DisplayMode(result);
}

export function getWindowIccProfile(this: SDL, window: Pointer) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });

  const memory = this.symbols.SDL_GetWindowICCProfile(
    window,
    sizeStruct.$address
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

export function getWindowPixelFormat(this: SDL, window: Pointer) {
  const result = this.symbols.SDL_GetWindowPixelFormat(window);

  return result as PixelFormat;
}

export function getWindows(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetWindows(countStruct.$address);

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const result = CStruct.readArrayPrimitive(listPtr, count, 'ptr');

  this.symbols.SDL_free(listPtr);

  return result;
}

export function createWindow(
  this: SDL,
  options: {
    title: string;
    w: number;
    h: number;
    flags: WindowFlags;
  }
) {
  return this.symbols.SDL_CreateWindow(
    stringToCString(options.title).ptr,
    options.w,
    options.h,
    options.flags
  );
}

export function createPopupWindow(
  this: SDL,
  options: {
    parent: Pointer;
    x: number;
    y: number;
    w: number;
    h: number;
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
  );
}

export function createWindowWithProperties(this: SDL, props: number) {
  return this.symbols.SDL_CreateWindowWithProperties(props);
}

export function getWindowId(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowID(window);
}

export function getWindowFromId(this: SDL, id: number) {
  return this.symbols.SDL_GetWindowFromID(id);
}

export function getWindowParent(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowParent(window);
}

export function getWindowProperties(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowProperties(window);
}

export function getWindowFlags(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowFlags(window) as WindowFlags;
}

export function setWindowTitle(
  this: SDL,
  options: {
    window: Pointer;
    title: string;
  }
) {
  return this.symbols.SDL_SetWindowTitle(
    options.window,
    stringToCString(options.title).ptr
  );
}

export function getWindowTitle(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowTitle(window).toString();
}

export function setWindowIcon(
  this: SDL,
  options: {
    window: Pointer;
    icon: Surface;
  }
) {
  return this.symbols.SDL_SetWindowIcon(options.window, options.icon.$address);
}

export function setWindowPosition(
  this: SDL,
  options: {
    window: Pointer;
    x: number;
    y: number;
  }
) {
  return this.symbols.SDL_SetWindowPosition(
    options.window,
    options.x,
    options.y
  );
}

export function getWindowPosition(this: SDL, window: Pointer) {
  const posXStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const posYStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowPosition(
    window,
    posXStruct.$address,
    posYStruct.$address
  );

  if (!success) return null;

  return {
    x: posXStruct.getValue(0, 'i32'),
    y: posYStruct.getValue(0, 'i32'),
  };
}

export function setWindowSize(
  this: SDL,
  options: {
    window: Pointer;
    w: number;
    h: number;
  }
) {
  return this.symbols.SDL_SetWindowSize(options.window, options.w, options.h);
}

export function getWindowSize(this: SDL, window: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowSize(
    window,
    wStruct.$address,
    hStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32'),
    h: hStruct.getValue(0, 'i32'),
  };
}

export function getWindowSafeArea(this: SDL, window: Pointer) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetWindowSafeArea(window, rect.$address);

  if (!success) return null;

  return rect;
}

export function setWindowAspectRatio(
  this: SDL,
  options: {
    window: Pointer;
    minAspect: number;
    maxAspect: number;
  }
) {
  return this.symbols.SDL_SetWindowAspectRatio(
    options.window,
    options.minAspect,
    options.maxAspect
  );
}

export function getWindowAspectRatio(this: SDL, window: Pointer) {
  const minAspectStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const maxAspectStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetWindowAspectRatio(
    window,
    minAspectStruct.$address,
    maxAspectStruct.$address
  );

  if (!success) return null;

  return {
    minAspect: minAspectStruct.getValue(0, 'f32'),
    maxAspect: maxAspectStruct.getValue(0, 'f32'),
  };
}

export function getWindowBordersSize(this: SDL, window: Pointer) {
  const topStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const leftStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const bottomStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const rightStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowBordersSize(
    window,
    topStruct.$address,
    leftStruct.$address,
    bottomStruct.$address,
    rightStruct.$address
  );

  if (!success) return null;

  return {
    top: topStruct.getValue(0, 'i32'),
    left: leftStruct.getValue(0, 'i32'),
    bottom: bottomStruct.getValue(0, 'i32'),
    right: rightStruct.getValue(0, 'i32'),
  };
}

export function getWindowSizeInPixels(this: SDL, window: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowSizeInPixels(
    window,
    wStruct.$address,
    hStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32'),
    h: hStruct.getValue(0, 'i32'),
  };
}

export function setWindowMinimumSize(
  this: SDL,
  options: {
    window: Pointer;
    minW: number;
    minH: number;
  }
) {
  return this.symbols.SDL_SetWindowMinimumSize(
    options.window,
    options.minW,
    options.minH
  );
}

export function getWindowMinimumSize(this: SDL, window: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowMinimumSize(
    window,
    wStruct.$address,
    hStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32'),
    h: hStruct.getValue(0, 'i32'),
  };
}

export function setWindowMaximumSize(
  this: SDL,
  options: {
    window: Pointer;
    maxW: number;
    maxH: number;
  }
) {
  return this.symbols.SDL_SetWindowMaximumSize(
    options.window,
    options.maxW,
    options.maxH
  );
}

export function getWindowMaximumSize(this: SDL, window: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowMaximumSize(
    window,
    wStruct.$address,
    hStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32'),
    h: hStruct.getValue(0, 'i32'),
  };
}

export function setWindowBordered(
  this: SDL,
  options: {
    window: Pointer;
    bordered: boolean;
  }
) {
  return this.symbols.SDL_SetWindowBordered(options.window, options.bordered);
}

export function setWindowResizable(
  this: SDL,
  options: {
    window: Pointer;
    resizable: boolean;
  }
) {
  return this.symbols.SDL_SetWindowResizable(options.window, options.resizable);
}

export function setWindowAlwaysOnTop(
  this: SDL,
  options: {
    window: Pointer;
    onTop: boolean;
  }
) {
  return this.symbols.SDL_SetWindowAlwaysOnTop(options.window, options.onTop);
}

export function setWindowFillDocument(
  this: SDL,
  options: {
    window: Pointer;
    fillDocument: boolean;
  }
) {
  return this.symbols.SDL_SetWindowFillDocument(
    options.window,
    options.fillDocument
  );
}

export function showWindow(this: SDL, window: Pointer) {
  return this.symbols.SDL_ShowWindow(window);
}

export function hideWindow(this: SDL, window: Pointer) {
  return this.symbols.SDL_HideWindow(window);
}

export function raiseWindow(this: SDL, window: Pointer) {
  return this.symbols.SDL_RaiseWindow(window);
}

export function maximizeWindow(this: SDL, window: Pointer) {
  return this.symbols.SDL_MaximizeWindow(window);
}

export function minimizeWindow(this: SDL, window: Pointer) {
  return this.symbols.SDL_MinimizeWindow(window);
}

export function restoreWindow(this: SDL, window: Pointer) {
  return this.symbols.SDL_RestoreWindow(window);
}

export function setWindowFullscreen(
  this: SDL,
  options: {
    window: Pointer;
    fullscreen: boolean;
  }
) {
  return this.symbols.SDL_SetWindowFullscreen(
    options.window,
    options.fullscreen
  );
}

export function syncWindow(this: SDL, window: Pointer) {
  return this.symbols.SDL_SyncWindow(window);
}

export function windowHasSurface(this: SDL, window: Pointer) {
  return this.symbols.SDL_WindowHasSurface(window);
}

export function getWindowSurface(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowSurface(window);
}

export function setWindowSurfaceVSync(
  this: SDL,
  options: {
    window: Pointer;
    vsync: number;
  }
) {
  return this.symbols.SDL_SetWindowSurfaceVSync(options.window, options.vsync);
}

export function getWindowSurfaceVSync(this: SDL, window: Pointer) {
  const vsyncStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetWindowSurfaceVSync(
    window,
    vsyncStruct.$address
  );

  return success ? vsyncStruct.getValue(0, 'i32') : null;
}

export function updateWindowSurface(this: SDL, window: Pointer) {
  return this.symbols.SDL_UpdateWindowSurface(window);
}

export function updateWindowSurfaceRects(
  this: SDL,
  options: {
    window: Pointer;
    rects: Rect[];
  }
) {
  const { buffer } = CStruct.writeArray(options.rects, Rect.BYTE_SIZE);

  return this.symbols.SDL_UpdateWindowSurfaceRects(
    options.window,
    buffer,
    options.rects.length
  );
}

export function destroyWindowSurface(this: SDL, window: Pointer) {
  return this.symbols.SDL_DestroyWindowSurface(window);
}

export function setWindowKeyboardGrab(
  this: SDL,
  options: {
    window: Pointer;
    grab: boolean;
  }
) {
  return this.symbols.SDL_SetWindowKeyboardGrab(options.window, options.grab);
}

export function setWindowMouseGrab(
  this: SDL,
  options: {
    window: Pointer;
    grab: boolean;
  }
) {
  return this.symbols.SDL_SetWindowMouseGrab(options.window, options.grab);
}

export function getWindowMouseGrab(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowMouseGrab(window);
}

export function getWindowKeyboardGrab(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowKeyboardGrab(window);
}

export function getGrabbedWindow(this: SDL) {
  return this.symbols.SDL_GetGrabbedWindow();
}

export function setWindowMouseRect(
  this: SDL,
  options: {
    window: Pointer;
    rect: Rect;
  }
) {
  return this.symbols.SDL_SetWindowMouseRect(
    options.window,
    options.rect.$address
  );
}

export function getWindowMouseRect(this: SDL, window: Pointer) {
  const rect = this.symbols.SDL_GetWindowMouseRect(window);

  return rect ? new Rect(rect) : null;
}

export function setWindowOpacity(
  this: SDL,
  options: {
    window: Pointer;
    opacity: number;
  }
) {
  return this.symbols.SDL_SetWindowOpacity(options.window, options.opacity);
}

export function getWindowOpacity(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowOpacity(window);
}

export function setWindowParent(
  this: SDL,
  options: {
    window: Pointer;
    parent: Pointer;
  }
) {
  return this.symbols.SDL_SetWindowParent(options.window, options.parent);
}

export function setWindowModal(
  this: SDL,
  options: {
    window: Pointer;
    modal: boolean;
  }
) {
  return this.symbols.SDL_SetWindowModal(options.window, options.modal);
}

export function setWindowFocusable(
  this: SDL,
  options: {
    window: Pointer;
    focusable: boolean;
  }
) {
  return this.symbols.SDL_SetWindowFocusable(options.window, options.focusable);
}

export function showWindowSystemMenu(
  this: SDL,
  options: {
    window: Pointer;
    x: number;
    y: number;
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
    window: Pointer;
    callback: JSCallback;
    callbackData?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetWindowHitTest(
    options.window,
    options.callback.ptr,
    options.callbackData ?? null
  );
}

export function setWindowShape(
  this: SDL,
  options: {
    window: Pointer;
    shape: Surface;
  }
) {
  return this.symbols.SDL_SetWindowShape(
    options.window,
    options.shape.$address
  );
}

export function flashWindow(
  this: SDL,
  options: {
    window: Pointer;
    operation: FlashOperation;
  }
) {
  return this.symbols.SDL_FlashWindow(options.window, options.operation);
}

export function setWindowProgressState(
  this: SDL,
  options: {
    window: Pointer;
    state: ProgressState;
  }
) {
  return this.symbols.SDL_SetWindowProgressState(options.window, options.state);
}

export function getWindowProgressState(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowProgressState(window) as ProgressState;
}

export function setWindowProgressValue(
  this: SDL,
  options: {
    window: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_SetWindowProgressValue(options.window, options.value);
}

export function getWindowProgressValue(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowProgressValue(window);
}

export function destroyWindow(this: SDL, window: Pointer) {
  this.symbols.SDL_DestroyWindow(window);
}
