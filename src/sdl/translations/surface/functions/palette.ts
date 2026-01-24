import type { SDL } from '@/sdl';
import { getStructAddress } from '@utility/common';
import { Palette } from '../../pixels/utility';
import { Surface } from '../utility';

// Palette

export function createSurfacePalette(this: SDL, surface: Surface) {
  const palettePtr = this.symbols.SDL_CreateSurfacePalette(
    getStructAddress(surface)
  );

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}

export function setSurfacePalette(
  this: SDL,
  options: {
    surface: Surface;
    palette: Palette;
  }
) {
  return this.symbols.SDL_SetSurfacePalette(
    getStructAddress(options.surface),
    getStructAddress(options.palette)
  );
}

export function getSurfacePalette(this: SDL, surface: Surface) {
  const palettePtr = this.symbols.SDL_GetSurfacePalette(
    getStructAddress(surface)
  );

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}
