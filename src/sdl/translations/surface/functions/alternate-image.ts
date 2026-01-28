import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { Surface } from '../utility';

// Alternate Images

export function addSurfaceAlternateImage(
  this: SDL,
  options: {
    surface: Surface;
    image: Surface;
  }
) {
  return this.symbols.SDL_AddSurfaceAlternateImage(
    options.surface.$address,
    options.image.$address
  );
}

export function surfaceHasAlternateImages(this: SDL, surface: Surface) {
  return this.symbols.SDL_SurfaceHasAlternateImages(surface.$address);
}

export function getSurfaceImages(this: SDL, surface: Surface) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetSurfaceImages(
    surface.$address,
    countStruct.$address
  );

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const images = CStruct.readArray(Surface, list.$address, count, true);

  this.symbols.SDL_free(listPtr);

  return images;
}

export function removeSurfaceAlternateImages(this: SDL, surface: Surface) {
  this.symbols.SDL_RemoveSurfaceAlternateImages(surface.$address);
}
