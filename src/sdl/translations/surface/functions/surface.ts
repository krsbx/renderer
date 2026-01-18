import { ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import { CStruct } from '../../../utility/cstruct';
import { Palette } from '../../pixels/utility';
import { Surface } from '../utility';

// Create/Destroy

export function createSurface(
  this: SDL,
  options: {
    width: number;
    height: number;
    format: PixelFormat;
  }
) {
  const surface = this.symbols.SDL_CreateSurface(
    options.width,
    options.height,
    options.format
  );

  if (!surface) return null;

  return new Surface(surface);
}

export function createSurfaceFrom(
  this: SDL,
  options: {
    width: number;
    height: number;
    format: PixelFormat;
    pixels: Pointer | Uint8Array;
    pitch: number;
  }
) {
  const pixelsPtr =
    options.pixels instanceof Uint8Array ? ptr(options.pixels) : options.pixels;

  const surface = this.symbols.SDL_CreateSurfaceFrom(
    options.width,
    options.height,
    options.format,
    pixelsPtr,
    options.pitch
  );

  if (!surface) return null;

  return new Surface(surface);
}

export function destroySurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  this.symbols.SDL_DestroySurface(surfacePtr);
}

// Properties

export function getSurfaceProperties(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_GetSurfaceProperties(surfacePtr);
}

// Colorspace

export function setSurfaceColorspace(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    colorspace: Colorspace;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SetSurfaceColorspace(surfacePtr, options.colorspace);
}

export function getSurfaceColorspace(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_GetSurfaceColorspace(surfacePtr) as Colorspace;
}

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

// Lock/Unlock

export function lockSurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_LockSurface(surfacePtr);
}

export function unlockSurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  this.symbols.SDL_UnlockSurface(surfacePtr);
}

// Duplicate/Convert

export function duplicateSurface(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  const newSurfacePtr = this.symbols.SDL_DuplicateSurface(surfacePtr);

  if (!newSurfacePtr) return null;

  return new Surface(newSurfacePtr);
}

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
