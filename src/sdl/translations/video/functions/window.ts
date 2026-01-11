import { JSCallback, ptr, read, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import type {
  FlashOperation,
  ProgressState,
  WindowFlags,
} from '../../../ffi/video/constant';
import type { Vector2, WidthHeight } from '../../../types/shared';
import { convertStringToFfi } from '../../../utility/common';
import { Rect } from '../../rect/utility';
import { Surface } from '../../surface/utility';
import { DisplayMode } from '../utility';

export function getDisplayForWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetDisplayForWindow(window);
}

export function getWindowPixelDensity(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowPixelDensity(window);
}

export function getWindowDisplayScale(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowDisplayScale(window);
}

export function setWindowFullscreenMode(
  this: BaseSDL,
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

export function getWindowFullscreenMode(this: BaseSDL, window: Pointer) {
  const result = this.symbols.SDL_GetWindowFullscreenMode(window);

  if (!result) return null;

  return new DisplayMode(result);
}

export function getWindowIccProfile(this: BaseSDL, window: Pointer) {
  const sizeBuf = new BigUint64Array(1);

  const memory = this.symbols.SDL_GetWindowICCProfile(window, ptr(sizeBuf));

  if (!memory) return null;

  const size = Number(sizeBuf[0]);

  return {
    size,
    data: new Uint8Array(toArrayBuffer(memory, 0, size)),
    address: memory,
    free: () => {
      this.symbols.SDL_free(memory);
    },
  };
}

export function getWindowPixelFormat(this: BaseSDL, window: Pointer) {
  const result = this.symbols.SDL_GetWindowPixelFormat(window);

  return result as PixelFormat;
}

export function getWindows(this: BaseSDL) {
  const countBuf = new Int32Array(1);

  const listPtr = this.symbols.SDL_GetWindows(ptr(countBuf));

  const count = countBuf[0] || 0n;
  const result: Pointer[] = [];

  if (!listPtr) return result;

  if (count !== 0n && count > 0) {
    for (let i = 0; i < count; i++) {
      const windowPtr = read.ptr(listPtr, i * 8) as Pointer;

      if (!windowPtr) continue;

      result.push(windowPtr);
    }
  }

  return result;
}

export function createWindow(
  this: BaseSDL,
  options: WidthHeight & {
    title: string;
    flags: WindowFlags;
  }
) {
  return this.symbols.SDL_CreateWindow(
    convertStringToFfi(options.title).reference,
    options.w,
    options.h,
    options.flags
  );
}

export function createPopupWindow(
  this: BaseSDL,
  options: WidthHeight &
    Vector2 & {
      parent: Pointer;
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

export function createWindowWithProperties(this: BaseSDL, props: number) {
  return this.symbols.SDL_CreateWindowWithProperties(props);
}

export function getWindowId(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowID(window);
}

export function getWindowFromId(this: BaseSDL, id: number) {
  return this.symbols.SDL_GetWindowFromID(id);
}

export function getWindowParent(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowParent(window);
}

export function getWindowProperties(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowProperties(window);
}

export function getWindowFlags(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowFlags(window) as WindowFlags;
}

export function setWindowTitle(
  this: BaseSDL,
  options: {
    window: Pointer;
    title: string;
  }
) {
  return this.symbols.SDL_SetWindowTitle(
    options.window,
    convertStringToFfi(options.title).reference
  );
}

export function getWindowTitle(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowTitle(window);
}

export function setWindowIcon(
  this: BaseSDL,
  options: {
    window: Pointer;
    icon: Surface;
  }
) {
  return this.symbols.SDL_SetWindowIcon(options.window, options.icon.$address);
}

export function setWindowPosition(
  this: BaseSDL,
  options: Vector2 & {
    window: Pointer;
  }
) {
  return this.symbols.SDL_SetWindowPosition(
    options.window,
    options.x,
    options.y
  );
}

export function getWindowPosition(this: BaseSDL, window: Pointer) {
  const posX = new Int32Array(1);
  const posY = new Int32Array(1);

  const success = this.symbols.SDL_GetWindowPosition(window, posX, posY);

  if (!success) return null;

  const result = {
    x: posX[0],
    y: posY[0],
  } as Vector2;

  return result;
}

export function setWindowSize(
  this: BaseSDL,
  options: WidthHeight & {
    window: Pointer;
  }
) {
  return this.symbols.SDL_SetWindowSize(options.window, options.w, options.h);
}

export function getWindowSize(this: BaseSDL, window: Pointer) {
  const w = new Int32Array(1);
  const h = new Int32Array(1);

  const success = this.symbols.SDL_GetWindowSize(window, w, h);

  if (!success) return null;

  const result = {
    w: w[0],
    h: h[0],
  } as WidthHeight;

  return result;
}

export function getWindowSafeArea(this: BaseSDL, window: Pointer) {
  const rect = Rect.allocMemory();

  const success = this.symbols.SDL_GetWindowSafeArea(window);

  if (!success) return null;

  return new Rect(rect);
}

export function setWindowAspectRatio(
  this: BaseSDL,
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

export function getWindowAspectRatio(this: BaseSDL, window: Pointer) {
  const minAspect = new Int32Array(1);
  const maxAspect = new Int32Array(1);

  const success = this.symbols.SDL_GetWindowAspectRatio(
    window,
    minAspect,
    maxAspect
  );

  if (!success) return null;

  return {
    minAspect: minAspect[0]!,
    maxAspect: maxAspect[0]!,
  };
}

export function getWindowBordersSize(this: BaseSDL, window: Pointer) {
  const top = new Int32Array(1);
  const left = new Int32Array(1);
  const bottom = new Int32Array(1);
  const right = new Int32Array(1);

  const success = this.symbols.SDL_GetWindowBordersSize(
    window,
    top,
    left,
    bottom,
    right
  );

  if (!success) return null;

  return {
    top: top[0]!,
    left: left[0]!,
    bottom: bottom[0]!,
    right: right[0]!,
  };
}

export function getWindowSizeInPixels(this: BaseSDL, window: Pointer) {
  const w = new Int32Array(1);
  const h = new Int32Array(1);

  const success = this.symbols.SDL_GetWindowSizeInPixels(window, w, h);

  if (!success) return null;

  const result = {
    w: w[0],
    h: h[0],
  } as WidthHeight;

  return result;
}

export function setWindowMinimumSize(
  this: BaseSDL,
  options: WidthHeight & {
    window: Pointer;
  }
) {
  return this.symbols.SDL_SetWindowMinimumSize(
    options.window,
    options.w,
    options.h
  );
}

export function getWindowMinimumSize(this: BaseSDL, window: Pointer) {
  const w = new Int32Array(1);
  const h = new Int32Array(1);

  const success = this.symbols.SDL_GetWindowMinimumSize(window, w, h);

  if (!success) return null;

  const result = {
    w: w[0],
    h: h[0],
  } as WidthHeight;

  return result;
}

export function setWindowMaximumSize(
  this: BaseSDL,
  options: WidthHeight & {
    window: Pointer;
  }
) {
  return this.symbols.SDL_SetWindowMaximumSize(
    options.window,
    options.w,
    options.h
  );
}

export function getWindowMaximumSize(this: BaseSDL, window: Pointer) {
  const w = new Int32Array(1);
  const h = new Int32Array(1);

  const success = this.symbols.SDL_GetWindowMaximumSize(window, w, h);

  if (!success) return null;

  const result = {
    w: w[0],
    h: h[0],
  } as WidthHeight;

  return result;
}

export function setWindowBordered(
  this: BaseSDL,
  options: {
    window: Pointer;
    bordered: boolean;
  }
) {
  return this.symbols.SDL_SetWindowBordered(options.window, options.bordered);
}

export function setWindowResizable(
  this: BaseSDL,
  options: {
    window: Pointer;
    resizable: boolean;
  }
) {
  return this.symbols.SDL_SetWindowResizable(options.window, options.resizable);
}

export function setWindowAlwaysOnTop(
  this: BaseSDL,
  options: {
    window: Pointer;
    onTop: boolean;
  }
) {
  return this.symbols.SDL_SetWindowAlwaysOnTop(options.window, options.onTop);
}

export function setWindowFillDocument(
  this: BaseSDL,
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

export function showWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_ShowWindow(window);
}

export function hideWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_HideWindow(window);
}

export function raiseWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_RaiseWindow(window);
}

export function maximizeWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_MaximizeWindow(window);
}

export function minimizeWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_MinimizeWindow(window);
}

export function restoreWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_RestoreWindow(window);
}

export function syncWindow(this: BaseSDL) {
  return this.symbols.SDL_SyncWindow();
}

export function windowHasSurface(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_WindowHasSurface(window);
}

export function getWidnowSurface(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowSurface(window);
}

export function setWindowSurfaceVScync(
  this: BaseSDL,
  options: {
    window: Pointer;
    vsync: number;
  }
) {
  return this.symbols.SDL_SetWindowSurfaceVSync(options.window, options.vsync);
}

export function getWindowSurfaceVSync(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowSurfaceVSync(window);
}

export function updateWindowSurface(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_UpdateWindowSurface(window);
}

export function updateWindowSurfaceRects(
  this: BaseSDL,
  options: {
    window: Pointer;
    rects: Rect[];
  }
) {
  const rects = new Int32Array(options.rects.length * 4);

  for (let i = 0; i < options.rects.length; i++) {
    const offset = i * 4;
    const rect = options.rects[i];

    if (!rect) continue;

    rects[offset + 0] = rect.x;
    rects[offset + 1] = rect.y;
    rects[offset + 2] = rect.w;
    rects[offset + 3] = rect.h;
  }

  return this.symbols.SDL_UpdateWindowSurfaceRects(
    options.window,
    ptr(rects),
    options.rects.length
  );
}

export function destroyWindowSurface(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_DestroyWindowSurface(window);
}

export function setWindowKeyboardGrab(
  this: BaseSDL,
  options: {
    window: Pointer;
    grab: boolean;
  }
) {
  return this.symbols.SDL_SetWindowKeyboardGrab(options.window, options.grab);
}

export function setWindowMouseGrab(
  this: BaseSDL,
  options: {
    window: Pointer;
    grab: boolean;
  }
) {
  return this.symbols.SDL_SetWindowMouseGrab(options.window, options.grab);
}

export function getWindowMouseGrab(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowMouseGrab(window);
}

export function getWindowKeyboardGrab(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowKeyboardGrab(window);
}

export function getGrabbedWindow(this: BaseSDL) {
  return this.symbols.SDL_GetGrabbedWindow();
}

export function setWindowMouseRect(
  this: BaseSDL,
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

export function getWindowMouseRect(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowMouseRect(window);
}

export function setWindowOpacity(
  this: BaseSDL,
  options: {
    window: Pointer;
    opacity: number;
  }
) {
  return this.symbols.SDL_SetWindowOpacity(options.window, options.opacity);
}

export function getWindowOpacity(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowOpacity(window);
}

export function setWindowParent(
  this: BaseSDL,
  options: {
    window: Pointer;
    parent: Pointer;
  }
) {
  return this.symbols.SDL_SetWindowParent(options.window, options.parent);
}

export function setWindowModal(
  this: BaseSDL,
  options: {
    window: Pointer;
    modal: boolean;
  }
) {
  return this.symbols.SDL_SetWindowModal(options.window, options.modal);
}

export function setWindowFocusable(
  this: BaseSDL,
  options: {
    window: Pointer;
    focusable: boolean;
  }
) {
  return this.symbols.SDL_SetWindowFocusable(options.window, options.focusable);
}

export function showWindowSystemMenu(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_ShowWindowSystemMenu(window);
}

export function setWindowHitTest(
  this: BaseSDL,
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
  this: BaseSDL,
  options: {
    window: Pointer;
    rect: Rect;
  }
) {
  return this.symbols.SDL_SetWindowShape(options.window, options.rect.$address);
}

export function flashWindow(
  this: BaseSDL,
  options: {
    window: Pointer;
    operation: FlashOperation;
  }
) {
  return this.symbols.SDL_FlashWindow(options.window, options.operation);
}

export function setWindowProgressState(
  this: BaseSDL,
  options: {
    window: Pointer;
    state: ProgressState;
  }
) {
  return this.symbols.SDL_SetWindowProgressState(options.window, options.state);
}

export function getWindowProgressState(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowProgressState(window) as ProgressState;
}

export function setWindowProgressValue(
  this: BaseSDL,
  options: {
    window: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_SetWindowProgressValue(options.window, options.value);
}

export function getWindowProgressValue(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GetWindowProgressValue(window);
}

export function destroyWindow(this: BaseSDL, window: Pointer) {
  this.symbols.SDL_DestroyWindow(window);
}
