import type { SDL } from '@/sdl';
import type { Cursor, Window } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@cstruct';
import type {
  MouseButtonFlags,
  SystemCursor,
} from '../../../ffi/mouse/constant';
import { Surface } from '../../surface/struct';
import { CursorFrameInfo } from '../struct';
import type { MouseMotionTransformCallbackFn } from '../types/callback';
import {
  createMouseMotionTransformCallback,
  MouseMotionTransformCallbackRegistryKey,
} from '../utility/callback';

export function hasMouse(this: SDL) {
  return this.symbols.SDL_HasMouse();
}

export function getMice(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetMice(countStruct.$memory);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const mice = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return mice;
}

export function getMouseNameForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetMouseNameForID(instanceId).toString();
}

export function getMouseFocus(this: SDL) {
  return this.symbols.SDL_GetMouseFocus() as Window | null;
}

export function getMouseState(this: SDL) {
  const xStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const yStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const buttons = this.symbols.SDL_GetMouseState(
    xStruct.$memory,
    yStruct.$memory
  ) as MouseButtonFlags;

  return {
    buttons,
    x: xStruct.getValue(0, 'f32'),
    y: yStruct.getValue(0, 'f32'),
  };
}

export function getGlobalMouseState(this: SDL) {
  const xStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const yStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const buttons = this.symbols.SDL_GetGlobalMouseState(
    xStruct.$memory,
    yStruct.$memory
  ) as MouseButtonFlags;

  return {
    buttons,
    x: xStruct.getValue(0, 'f32'),
    y: yStruct.getValue(0, 'f32'),
  };
}

export function getRelativeMouseState(this: SDL) {
  const xStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const yStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const buttons = this.symbols.SDL_GetRelativeMouseState(
    xStruct.$memory,
    yStruct.$memory
  ) as MouseButtonFlags;

  return {
    buttons,
    x: xStruct.getValue(0, 'f32'),
    y: yStruct.getValue(0, 'f32'),
  };
}

export function warpMouseInWindow(
  this: SDL,
  options: {
    window: Window;
    x: number;
    y: number;
  }
) {
  this.symbols.SDL_WarpMouseInWindow(options.window, options.x, options.y);
}

export function warpMouseGlobal(
  this: SDL,
  options: {
    x: number;
    y: number;
  }
) {
  return this.symbols.SDL_WarpMouseGlobal(options.x, options.y);
}

export function setRelativeMouseTransform(
  this: SDL,
  callback: MouseMotionTransformCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister(MouseMotionTransformCallbackRegistryKey);
    return this.symbols.SDL_SetRelativeMouseTransform(null, null);
  }

  const cb = createMouseMotionTransformCallback(callback);

  const success = this.symbols.SDL_SetRelativeMouseTransform(cb.ptr, null);

  if (!success) {
    cb.close();
  } else {
    CallbackManager.register(MouseMotionTransformCallbackRegistryKey, cb);
  }

  return success;
}

export function setWindowRelativeMouseMode(
  this: SDL,
  options: {
    window: Window;
    enabled: boolean;
  }
) {
  return this.symbols.SDL_SetWindowRelativeMouseMode(
    options.window,
    options.enabled
  );
}

export function getWindowRelativeMouseMode(this: SDL, window: Window) {
  return this.symbols.SDL_GetWindowRelativeMouseMode(window);
}

export function captureMouse(this: SDL, enabled: boolean) {
  return this.symbols.SDL_CaptureMouse(enabled);
}

export function createCursor(
  this: SDL,
  options: {
    data: Uint8Array;
    mask: Uint8Array;
    w: number;
    h: number;
    hotX: number;
    hotY: number;
  }
) {
  return this.symbols.SDL_CreateCursor(
    options.data,
    options.mask,
    options.w,
    options.h,
    options.hotX,
    options.hotY
  ) as Cursor | null;
}

export function createColorCursor(
  this: SDL,
  options: {
    surface: Surface;
    hotX: number;
    hotY: number;
  }
) {
  return this.symbols.SDL_CreateColorCursor(
    options.surface.$memory,
    options.hotX,
    options.hotY
  ) as Cursor | null;
}

export function createAnimatedCursor(
  this: SDL,
  options: {
    frames: CursorFrameInfo[];
    hotX: number;
    hotY: number;
  }
) {
  const { buffer: frames } = CStruct.writeArray(
    options.frames,
    CursorFrameInfo.BYTE_SIZE
  );

  return this.symbols.SDL_CreateAnimatedCursor(
    frames,
    options.frames.length,
    options.hotX,
    options.hotY
  ) as Cursor | null;
}

export function createSystemCursor(this: SDL, id: SystemCursor) {
  return this.symbols.SDL_CreateSystemCursor(id) as Cursor | null;
}

export function setCursor(this: SDL, cursor: Cursor) {
  return this.symbols.SDL_SetCursor(cursor);
}

export function getCursor(this: SDL) {
  return this.symbols.SDL_GetCursor() as Cursor | null;
}

export function getDefaultCursor(this: SDL) {
  return this.symbols.SDL_GetDefaultCursor() as Cursor | null;
}

export function destroyCursor(this: SDL, cursor: Cursor) {
  this.symbols.SDL_DestroyCursor(cursor);
}

export function showCursor(this: SDL) {
  return this.symbols.SDL_ShowCursor();
}

export function hideCursor(this: SDL) {
  return this.symbols.SDL_HideCursor();
}

export function cursorVisible(this: SDL) {
  return this.symbols.SDL_CursorVisible();
}
