import { ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
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
  const pixelsPtr =
    options.pixels instanceof Uint8Array ? ptr(options.pixels) : options.pixels;

  const surface = this.symbols.SDL_CreateSurfaceFrom(
    options.width,
    options.height,
    options.format,
    pixelsPtr,
    options.pitch
  );

  if (!surface) return null;

  return new Surface(surface);
}

export function destroySurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  this.symbols.SDL_DestroySurface(surfacePtr);
}

// Properties

export function getSurfaceProperties(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_GetSurfaceProperties(surfacePtr);
}

// Colorspace

export function setSurfaceColorspace(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    colorspace: Colorspace;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SetSurfaceColorspace(surfacePtr, options.colorspace);
}

export function getSurfaceColorspace(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_GetSurfaceColorspace(surfacePtr) as Colorspace;
}

// Lock/Unlock

export function lockSurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_LockSurface(surfacePtr);
}

export function unlockSurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  this.symbols.SDL_UnlockSurface(surfacePtr);
}
