import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import type { FlipMode, ScaleMode } from '../../../ffi/surface/constant';
import { Palette } from '../../pixels/utility';
import { Surface } from '../utility';

// Flip

export function flipSurface(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    flip: FlipMode;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_FlipSurface(surfacePtr, options.flip);
}

// Rotate

export function rotateSurface(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    angle: number;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  const surface = this.symbols.SDL_RotateSurface(surfacePtr, options.angle);

  if (!surface) return null;

  return new Surface(surface);
}

// Duplicate

export function duplicateSurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  const newSurfacePtr = this.symbols.SDL_DuplicateSurface(surfacePtr);

  if (!newSurfacePtr) return null;

  return new Surface(newSurfacePtr);
}

// Scale

export function scaleSurface(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    width: number;
    height: number;
    scaleMode: ScaleMode;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  const surface = this.symbols.SDL_ScaleSurface(
    surfacePtr,
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
    surface: Surface | Pointer;
    format: PixelFormat;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  const surface = this.symbols.SDL_ConvertSurface(surfacePtr, options.format);

  if (!surface) return null;

  return new Surface(surface);
}

export function convertSurfaceAndColorspace(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    format: PixelFormat;
    palette?: Palette | Pointer | null;
    colorspace: Colorspace;
    props?: number;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;
  const palettePtr =
    options.palette instanceof Palette
      ? options.palette.$address
      : options.palette;

  const surface = this.symbols.SDL_ConvertSurfaceAndColorspace(
    surfacePtr,
    options.format,
    palettePtr ?? null,
    options.colorspace,
    options.props ?? 0
  );

  if (!surface) return null;

  return new Surface(surface);
}
