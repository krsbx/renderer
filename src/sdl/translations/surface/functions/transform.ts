import type { SDL } from '@/sdl';
import { getStructAddress } from '@utility/common';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import type { FlipMode, ScaleMode } from '../../../ffi/surface/constant';
import { Palette } from '../../pixels/utility';
import { Surface } from '../utility';

// Flip

export function flipSurface(
  this: SDL,
  options: {
    surface: Surface;
    flip: FlipMode;
  }
) {
  return this.symbols.SDL_FlipSurface(
    getStructAddress(options.surface),
    options.flip
  );
}

// Rotate

export function rotateSurface(
  this: SDL,
  options: {
    surface: Surface;
    angle: number;
  }
) {
  const surface = this.symbols.SDL_RotateSurface(
    getStructAddress(options.surface),
    options.angle
  );

  if (!surface) return null;

  return new Surface(surface);
}

// Duplicate

export function duplicateSurface(this: SDL, surface: Surface) {
  const newSurfacePtr = this.symbols.SDL_DuplicateSurface(
    getStructAddress(surface)
  );

  if (!newSurfacePtr) return null;

  return new Surface(newSurfacePtr);
}

// Scale

export function scaleSurface(
  this: SDL,
  options: {
    surface: Surface;
    width: number;
    height: number;
    scaleMode: ScaleMode;
  }
) {
  const surface = this.symbols.SDL_ScaleSurface(
    getStructAddress(options.surface),
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
    getStructAddress(options.surface),
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
    props?: number;
  }
) {
  const surface = this.symbols.SDL_ConvertSurfaceAndColorspace(
    getStructAddress(options.surface),
    options.format,
    options.palette ? getStructAddress(options.palette) : null,
    options.colorspace,
    options.props ?? 0
  );

  if (!surface) return null;

  return new Surface(surface);
}
