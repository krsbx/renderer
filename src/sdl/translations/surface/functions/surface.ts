import type { SDL } from '@/sdl';
import type { Int32, UInt32 } from '@/types/primitive';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import { Surface } from '../struct';

// Create/Destroy

export function createSurface(
  this: SDL,
  options: {
    width: Int32;
    height: Int32;
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
    width: Int32;
    height: Int32;
    format: PixelFormat;
    pixels?: Uint8Array | null;
    pitch?: Int32;
  }
) {
  const surface = this.symbols.SDL_CreateSurfaceFrom(
    options.width,
    options.height,
    options.format,
    options.pixels ?? null,
    options.pitch ?? 0
  );

  if (!surface) return null;

  return new Surface(surface);
}

export function destroySurface(this: SDL, surface: Surface) {
  this.symbols.SDL_DestroySurface(surface.$memory);
}

// Properties

export function getSurfaceProperties(this: SDL, surface: Surface) {
  return this.symbols.SDL_GetSurfaceProperties(surface.$memory) as UInt32;
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
    options.surface.$memory,
    options.colorspace
  );
}

export function getSurfaceColorspace(this: SDL, surface: Surface) {
  return this.symbols.SDL_GetSurfaceColorspace(surface.$memory) as Colorspace;
}

// Lock/Unlock

export function lockSurface(this: SDL, surface: Surface) {
  return this.symbols.SDL_LockSurface(surface.$memory);
}

export function unlockSurface(this: SDL, surface: Surface) {
  this.symbols.SDL_UnlockSurface(surface.$memory);
}
