import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { FlipMode, ScaleMode } from '../../../ffi/surface/constant';
import { Surface } from '../utility';

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
