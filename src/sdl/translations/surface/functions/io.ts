import type { SDL } from '@/sdl';
import { getStructAddress, stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import { Surface } from '../utility';

// Load Surface (BMP or PNG)

export function loadSurfaceIO(
  this: SDL,
  options: {
    src: Pointer;
    closeio: boolean;
  }
) {
  const surface = this.symbols.SDL_LoadSurface_IO(options.src, options.closeio);

  if (!surface) return null;

  return new Surface(surface);
}

export function loadSurface(this: SDL, file: string) {
  const surface = this.symbols.SDL_LoadSurface(stringToCString(file).ptr);

  if (!surface) return null;

  return new Surface(surface);
}

// Load BMP

export function loadBMPIO(
  this: SDL,
  options: {
    src: Pointer;
    closeio: boolean;
  }
) {
  const surface = this.symbols.SDL_LoadBMP_IO(options.src, options.closeio);

  if (!surface) return null;

  return new Surface(surface);
}

export function loadBMP(this: SDL, file: string) {
  const surface = this.symbols.SDL_LoadBMP(stringToCString(file).ptr);

  if (!surface) return null;

  return new Surface(surface);
}

// Save BMP

export function saveBMPIO(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    dst: Pointer;
    closeio: boolean;
  }
) {
  return this.symbols.SDL_SaveBMP_IO(
    getStructAddress(options.surface),
    options.dst,
    options.closeio
  );
}

export function saveBMP(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    file: string;
  }
) {
  return this.symbols.SDL_SaveBMP(
    getStructAddress(options.surface),
    stringToCString(options.file).ptr
  );
}

// Load PNG

export function loadPNGIO(
  this: SDL,
  options: {
    src: Pointer;
    closeio: boolean;
  }
) {
  const surface = this.symbols.SDL_LoadPNG_IO(options.src, options.closeio);

  if (!surface) return null;

  return new Surface(surface);
}

export function loadPNG(this: SDL, file: string) {
  const surface = this.symbols.SDL_LoadPNG(stringToCString(file).ptr);

  if (!surface) return null;

  return new Surface(surface);
}

// Save PNG

export function savePNGIO(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    dst: Pointer;
    closeio: boolean;
  }
) {
  return this.symbols.SDL_SavePNG_IO(
    getStructAddress(options.surface),
    options.dst,
    options.closeio
  );
}

export function savePNG(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    file: string;
  }
) {
  return this.symbols.SDL_SavePNG(
    getStructAddress(options.surface),
    stringToCString(options.file).ptr
  );
}
