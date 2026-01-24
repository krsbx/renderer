import type { SDL } from '@/sdl';
import { getStructAddress, getStructMemoryAddress } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import { Surface } from '../utility';

// Create/Destroy

export function createSurface(
  this: SDL,
  options: {
    width: number;
    height: number;
    format: PixelFormat;
  }
) {
  const surface = this.symbols.SDL_CreateSurface(
    options.width,
    options.height,
    options.format
  );

  if (!surface) return null;

  return new Surface(surface);
}

export function createSurfaceFrom(
  this: SDL,
  options: {
    width: number;
    height: number;
    format: PixelFormat;
    pixels: Pointer | Uint8Array;
    pitch: number;
  }
) {
  const surface = this.symbols.SDL_CreateSurfaceFrom(
    options.width,
    options.height,
    options.format,
    getStructMemoryAddress(options.pixels),
    options.pitch
  );

  if (!surface) return null;

  return new Surface(surface);
}

export function destroySurface(this: SDL, surface: Surface) {
  this.symbols.SDL_DestroySurface(getStructAddress(surface));
}

// Properties

export function getSurfaceProperties(this: SDL, surface: Surface) {
  return this.symbols.SDL_GetSurfaceProperties(getStructAddress(surface));
}

// Colorspace

export function setSurfaceColorspace(
  this: SDL,
  options: {
    surface: Surface;
    colorspace: Colorspace;
  }
) {
  return this.symbols.SDL_SetSurfaceColorspace(
    getStructAddress(options.surface),
    options.colorspace
  );
}

export function getSurfaceColorspace(this: SDL, surface: Surface) {
  return this.symbols.SDL_GetSurfaceColorspace(
    getStructAddress(surface)
  ) as Colorspace;
}

// Lock/Unlock

export function lockSurface(this: SDL, surface: Surface) {
  return this.symbols.SDL_LockSurface(getStructAddress(surface));
}

export function unlockSurface(this: SDL, surface: Surface) {
  this.symbols.SDL_UnlockSurface(getStructAddress(surface));
}
