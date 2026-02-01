import type { SDL } from '@/sdl';
import type { Window } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import type {
  DisplayOrientation,
  SystemTheme,
} from '../../../ffi/video/constant';
import { Point, Rect } from '../../rect/struct';
import { DisplayMode } from '../struct';

export function getNumVideoDrivers(this: SDL) {
  return this.symbols.SDL_GetNumVideoDrivers();
}

export function getVideoDriver(this: SDL, index: number) {
  return this.symbols.SDL_GetVideoDriver(index).toString();
}

export function getCurrentVideoDriver(this: SDL) {
  return this.symbols.SDL_GetCurrentVideoDriver().toString();
}

export function getSystemTheme(this: SDL) {
  return this.symbols.SDL_GetSystemTheme() as SystemTheme;
}

export function getDisplays(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetDisplays(countStruct.$memory);

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const displayIds = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return displayIds;
}

export function getPrimaryDisplay(this: SDL) {
  return this.symbols.SDL_GetPrimaryDisplay();
}

export function getDisplayProperties(this: SDL, displayID: number) {
  return this.symbols.SDL_GetDisplayProperties(displayID);
}

export function getDisplayName(this: SDL, displayID: number) {
  return this.symbols.SDL_GetDisplayName(displayID).toString();
}

export function getDisplayBounds(this: SDL, displayID: number) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetDisplayBounds(displayID, rect.$memory);

  if (!success) return null;

  return rect;
}

export function getDisplayUsableBounds(this: SDL, displayID: number) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetDisplayUsableBounds(
    displayID,
    rect.$memory
  );

  if (!success) return null;

  return rect;
}

export function getNaturalDisplayOrientation(this: SDL, displayID: number) {
  return this.symbols.SDL_GetNaturalDisplayOrientation(
    displayID
  ) as DisplayOrientation;
}

export function getCurrentDisplayOrientation(this: SDL, displayID: number) {
  return this.symbols.SDL_GetCurrentDisplayOrientation(
    displayID
  ) as DisplayOrientation;
}

export function getDisplayContentScale(this: SDL, displayID: number) {
  return this.symbols.SDL_GetDisplayContentScale(displayID);
}

export function getFullscreenDisplayModes(this: SDL, displayID: number) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetFullscreenDisplayModes(
    displayID,
    countStruct.$memory
  );

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const modes = CStruct.readArrayPointer(DisplayMode, listPtr, count, true);

  this.symbols.SDL_free(listPtr);

  return modes;
}

export function getClosestFullscreenDisplayMode(
  this: SDL,
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
  const displayMode = DisplayMode.create();

  const success = this.symbols.SDL_GetClosestFullscreenDisplayMode(
    options.displayID,
    options.w,
    options.h,
    options.refreshRate,
    options.include_high_density_modes ?? true,
    displayMode.$memory
  );

  if (!success) return null;

  return displayMode;
}

export function getDesktopDisplayMode(this: SDL, displayID: number) {
  const result = this.symbols.SDL_GetDesktopDisplayMode(displayID);

  if (!result) return null;

  return new DisplayMode(result);
}

export function getCurrentDisplayMode(this: SDL, displayID: number) {
  const result = this.symbols.SDL_GetCurrentDisplayMode(displayID);

  if (!result) return null;

  return new DisplayMode(result);
}

export function getDisplayForPoint(this: SDL, point: Point) {
  return this.symbols.SDL_GetDisplayForPoint(point.$memory);
}

export function getDisplayForRect(this: SDL, rect: Rect) {
  return this.symbols.SDL_GetDisplayForRect(rect.$memory);
}

export function getDisplayForWindow(this: SDL, window: Window) {
  return this.symbols.SDL_GetDisplayForWindow(window);
}
