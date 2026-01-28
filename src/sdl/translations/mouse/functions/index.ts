import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructAddress, getStructMemoryAddress } from '@utility/common';
import { type JSCallback, type Pointer } from 'bun:ffi';
import type {
  MouseButtonFlags,
  SystemCursor,
} from '../../../ffi/mouse/constant';
import { Surface } from '../../surface/utility';
import { CursorFrameInfo } from '../utility';

export function hasMouse(this: SDL) {
  return this.symbols.SDL_HasMouse();
}

export function getMice(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetMice(countStruct.$address);

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
  return this.symbols.SDL_GetMouseFocus();
}

export function getMouseState(this: SDL) {
  const xStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const yStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const buttons = this.symbols.SDL_GetMouseState(
    xStruct.$address,
    yStruct.$address
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
    xStruct.$address,
    yStruct.$address
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
    xStruct.$address,
    yStruct.$address
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
    window: Pointer;
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
  options: {
    callback: JSCallback | null;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetRelativeMouseTransform(
    options.callback?.ptr ?? null,
    options.userdata ?? null
  );
}

export function setWindowRelativeMouseMode(
  this: SDL,
  options: {
    window: Pointer;
    enabled: boolean;
  }
) {
  return this.symbols.SDL_SetWindowRelativeMouseMode(
    options.window,
    options.enabled
  );
}

export function getWindowRelativeMouseMode(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetWindowRelativeMouseMode(window);
}

export function captureMouse(this: SDL, enabled: boolean) {
  return this.symbols.SDL_CaptureMouse(enabled);
}

export function createCursor(
  this: SDL,
  options: {
    data: Pointer | Uint8Array;
    mask: Pointer | Uint8Array;
    w: number;
    h: number;
    hotX: number;
    hotY: number;
  }
) {
  return this.symbols.SDL_CreateCursor(
    getStructMemoryAddress(options.data),
    getStructMemoryAddress(options.mask),
    options.w,
    options.h,
    options.hotX,
    options.hotY
  );
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
    getStructAddress(options.surface),
    options.hotX,
    options.hotY
  );
}

export function createAnimatedCursor(
  this: SDL,
  options: {
    frames: CursorFrameInfo;
    frameCount: number;
    hotX: number;
    hotY: number;
  }
) {
  return this.symbols.SDL_CreateAnimatedCursor(
    getStructAddress(options.frames),
    options.frameCount,
    options.hotX,
    options.hotY
  );
}

export function createSystemCursor(this: SDL, id: SystemCursor) {
  return this.symbols.SDL_CreateSystemCursor(id);
}

export function setCursor(this: SDL, cursor: Pointer) {
  return this.symbols.SDL_SetCursor(cursor);
}

export function getCursor(this: SDL) {
  return this.symbols.SDL_GetCursor();
}

export function getDefaultCursor(this: SDL) {
  return this.symbols.SDL_GetDefaultCursor();
}

export function destroyCursor(this: SDL, cursor: Pointer) {
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
