import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { Palette } from '../../pixels/utility';
import { Surface } from '../utility';

// Palette

export function createSurfacePalette(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  const palettePtr = this.symbols.SDL_CreateSurfacePalette(surfacePtr);

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}

export function setSurfacePalette(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    palette: Palette | Pointer;
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

  return this.symbols.SDL_SetSurfacePalette(surfacePtr, palettePtr);
}

export function getSurfacePalette(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  const palettePtr = this.symbols.SDL_GetSurfacePalette(surfacePtr);

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}
