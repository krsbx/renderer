import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructAddress } from '@utility/common';
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
    getStructAddress(options.surface),
    getStructAddress(options.image)
  );
}

export function surfaceHasAlternateImages(this: SDL, surface: Surface) {
  return this.symbols.SDL_SurfaceHasAlternateImages(getStructAddress(surface));
}

export function getSurfaceImages(this: SDL, surface: Surface) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetSurfaceImages(
    getStructAddress(surface),
    countStruct.$address
  );

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const images: Surface[] = [];

  for (let i = 0; i < count; i++) {
    const imagePtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!imagePtr) continue;

    const sdlImage = new Surface(imagePtr);
    // Clone the image so it become a snapshot
    const image = new Surface(sdlImage.$memory.slice());

    images.push(image);
  }

  this.symbols.SDL_free(listPtr);

  return images;
}

export function removeSurfaceAlternateImages(this: SDL, surface: Surface) {
  this.symbols.SDL_RemoveSurfaceAlternateImages(getStructAddress(surface));
}
