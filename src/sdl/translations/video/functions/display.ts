import { ptr, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  DisplayOrientation,
  SystemTheme,
} from '../../../ffi/video/constant';
import type {
  FreeAddress,
  MemoryAddress,
  Vector2,
} from '../../../types/shared';
import { Rect } from '../../rect/rect';
import { DisplayMode } from '../display-mode';

export function getNumVideoDrivers(this: BaseSDL) {
  return this.symbols.SDL_GetNumVideoDrivers();
}

export function getVideoDriver(this: BaseSDL, index: number) {
  return this.symbols.SDL_GetVideoDriver(index);
}

export function getCurrentVideoDriver(this: BaseSDL) {
  return this.symbols.SDL_GetCurrentVideoDriver();
}

export function getSystemTheme(this: BaseSDL) {
  return this.symbols.SDL_GetSystemTheme() as SystemTheme;
}

export function getDisplays(this: BaseSDL) {
  const countBuf = new Int32Array(1);

  const listPtr = this.symbols.SDL_GetDisplays(ptr(countBuf));

  const count = countBuf[0] || 0n;
  const result: number[] = [];

  if (count !== 0n && count > 0) {
    for (let i = 0; i < count; i++) {
      if (!listPtr) continue;

      const displayID = read.u32(listPtr, i * 4);

      result.push(displayID);
    }
  }

  this.symbols.SDL_free(listPtr);

  return result;
}

export function getPrimaryDisplay(this: BaseSDL) {
  return this.symbols.SDL_GetPrimaryDisplay();
}

export function getDisplayProperties(this: BaseSDL, displayID: number) {
  return this.symbols.SDL_GetDisplayProperties(displayID);
}

export function getDisplayName(this: BaseSDL, displayID: number) {
  return this.symbols.SDL_GetDisplayName(displayID);
}

export function getDisplayBounds(this: BaseSDL, displayID: number) {
  const rect = new Int32Array(4);

  const success = this.symbols.SDL_GetDisplayBounds(displayID, ptr(rect));

  if (!success) return null;

  return Rect.fromMemory(rect);
}

export function getDisplayUsableBounds(this: BaseSDL, displayID: number) {
  const rect = new Int32Array(4);

  const success = this.symbols.SDL_GetDisplayUsableBounds(displayID, ptr(rect));

  if (!success) return null;

  return Rect.fromMemory(rect);
}

export function getNaturalDisplayOrientation(this: BaseSDL, displayID: number) {
  return this.symbols.SDL_GetNaturalDisplayOrientation(
    displayID
  ) as DisplayOrientation;
}

export function getCurrentDisplayOrientation(this: BaseSDL, displayID: number) {
  return this.symbols.SDL_GetCurrentDisplayOrientation(
    displayID
  ) as DisplayOrientation;
}

export function getDisplayContentScale(this: BaseSDL, displayID: number) {
  return this.symbols.SDL_GetDisplayContentScale(displayID);
}

export function getFullscreenDisplayModes(this: BaseSDL, displayID: number) {
  const countBuf = new Int32Array(1);

  const listPtr = this.symbols.SDL_GetFullscreenDisplayModes(
    displayID,
    ptr(countBuf)
  );

  const count = countBuf[0] || 0n;
  const results: {
    modes: DisplayMode[];
  } & FreeAddress &
    MemoryAddress = {
    address: listPtr,
    free: () => {
      this.symbols.SDL_free(listPtr);
    },
    modes: [],
  };

  if (!listPtr) return results;

  if (count !== 0n && count > 0) {
    for (let i = 0; i < count; i++) {
      const modePtr = read.ptr(listPtr, i * 8) as Pointer;

      if (!modePtr) continue;

      const mode = DisplayMode.fromPointer(modePtr, this);

      results.modes.push(mode);
    }
  }

  return results;
}

export function getClosestFullscreenDisplayMode(
  this: BaseSDL,
  options: {
    displayID: number;
    w: number;
    h: number;
    refreshRate: number;
    /**
     * @default true
     */
    include_high_density_modes?: boolean;
  }
) {
  const closestBuf = new Int32Array(40);

  const success = this.symbols.SDL_GetClosestFullscreenDisplayMode(
    options.displayID,
    options.w,
    options.h,
    options.refreshRate,
    options.include_high_density_modes || true,
    ptr(closestBuf)
  );

  if (!success) return null;

  return DisplayMode.fromMemory(closestBuf);
}

export function getDesktopDisplayMode(this: BaseSDL, displayID: number) {
  const result = this.symbols.SDL_GetDesktopDisplayMode(displayID);

  if (!result) return null;

  return DisplayMode.fromPointer(result, this);
}

export function getCurrentDisplayMode(this: BaseSDL, displayID: number) {
  const result = this.symbols.SDL_GetCurrentDisplayMode(displayID);

  if (!result) return null;

  return DisplayMode.fromPointer(result, this);
}

export function getDisplayForPoint(this: BaseSDL, point: Vector2) {
  const pointBuf = new Int32Array([point.x, point.y]);

  return this.symbols.SDL_GetDisplayForPoint(ptr(pointBuf));
}

export function getDisplayForRect(this: BaseSDL, rect: Rect) {
  const rectBuf = new Int32Array([rect.x, rect.y, rect.w, rect.h]);

  return this.symbols.SDL_GetDisplayForRect(ptr(rectBuf));
}
