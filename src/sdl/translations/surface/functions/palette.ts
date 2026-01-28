import type { SDL } from '@/sdl';
import { Palette } from '../../pixels/utility';
import { Surface } from '../utility';

// Palette

export function createSurfacePalette(this: SDL, surface: Surface) {
  const palettePtr = this.symbols.SDL_CreateSurfacePalette(surface.$address);

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
    options.surface.$address,
    options.palette.$address
  );
}

export function getSurfacePalette(this: SDL, surface: Surface) {
  const palettePtr = this.symbols.SDL_GetSurfacePalette(surface.$address);

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}
