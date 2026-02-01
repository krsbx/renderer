import type { SDL } from '@/sdl';
import { Palette } from '../../pixels/struct';
import { Surface } from '../struct';

// Palette

export function createSurfacePalette(this: SDL, surface: Surface) {
  const palettePtr = this.symbols.SDL_CreateSurfacePalette(surface.$memory);

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
    options.surface.$memory,
    options.palette.$memory
  );
}

export function getSurfacePalette(this: SDL, surface: Surface) {
  const palettePtr = this.symbols.SDL_GetSurfacePalette(surface.$memory);

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}
