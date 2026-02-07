import type { SDL } from '@/sdl';
import type { PropertiesID } from '@/sdl/types/definition';
import type { Float, Int32 } from '@/types/primitive';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import type { FlipMode, ScaleMode } from '../../../ffi/surface/constant';
import { Palette } from '../../pixels/struct';
import { Surface } from '../struct';

// Flip

export function flipSurface(
  this: SDL,
  options: {
    surface: Surface;
    flip: FlipMode;
  }
) {
  return this.symbols.SDL_FlipSurface(options.surface.$memory, options.flip);
}

// Rotate

export function rotateSurface(
  this: SDL,
  options: {
    surface: Surface;
    angle: Float;
  }
) {
  const surface = this.symbols.SDL_RotateSurface(
    options.surface.$memory,
    options.angle
  );

  if (!surface) return null;

  return new Surface(surface);
}

// Duplicate

export function duplicateSurface(this: SDL, surface: Surface) {
  const newSurfacePtr = this.symbols.SDL_DuplicateSurface(surface.$memory);

  if (!newSurfacePtr) return null;

  return new Surface(newSurfacePtr);
}

// Scale

export function scaleSurface(
  this: SDL,
  options: {
    surface: Surface;
    width: Int32;
    height: Int32;
    scaleMode: ScaleMode;
  }
) {
  const surface = this.symbols.SDL_ScaleSurface(
    options.surface.$memory,
    options.width,
    options.height,
    options.scaleMode
  );

  if (!surface) return null;

  return new Surface(surface);
}

// Convert

export function convertSurface(
  this: SDL,
  options: {
    surface: Surface;
    format: PixelFormat;
  }
) {
  const surface = this.symbols.SDL_ConvertSurface(
    options.surface.$memory,
    options.format
  );

  if (!surface) return null;

  return new Surface(surface);
}

export function convertSurfaceAndColorspace(
  this: SDL,
  options: {
    surface: Surface;
    format: PixelFormat;
    palette?: Palette | null;
    colorspace: Colorspace;
    props?: PropertiesID;
  }
) {
  const surface = this.symbols.SDL_ConvertSurfaceAndColorspace(
    options.surface.$memory,
    options.format,
    options.palette?.$memory ?? null,
    options.colorspace,
    options.props ?? 0
  );

  if (!surface) return null;

  return new Surface(surface);
}
