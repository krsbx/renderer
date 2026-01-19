import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { Surface } from '../utility';

// Alternate Images

export function addSurfaceAlternateImage(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    image: Surface | Pointer;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;
  const imagePtr =
    options.image instanceof Surface ? options.image.$address : options.image;

  return this.symbols.SDL_AddSurfaceAlternateImage(surfacePtr, imagePtr);
}

export function surfaceHasAlternateImages(
  this: SDL,
  surface: Surface | Pointer
) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_SurfaceHasAlternateImages(surfacePtr);
}

export function getSurfaceImages(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetSurfaceImages(
    surfacePtr,
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

export function removeSurfaceAlternateImages(
  this: SDL,
  surface: Surface | Pointer
) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  this.symbols.SDL_RemoveSurfaceAlternateImages(surfacePtr);
}
