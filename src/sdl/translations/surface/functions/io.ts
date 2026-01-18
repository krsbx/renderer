import type { CString, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
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

export function loadSurface(this: SDL, file: CString) {
  const surface = this.symbols.SDL_LoadSurface(file.ptr);

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

export function loadBMP(this: SDL, file: CString) {
  const surface = this.symbols.SDL_LoadBMP(file.ptr);

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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SaveBMP_IO(surfacePtr, options.dst, options.closeio);
}

export function saveBMP(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    file: CString;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SaveBMP(surfacePtr, options.file.ptr);
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

export function loadPNG(this: SDL, file: CString) {
  const surface = this.symbols.SDL_LoadPNG(file.ptr);

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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SavePNG_IO(surfacePtr, options.dst, options.closeio);
}

export function savePNG(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    file: CString;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SavePNG(surfacePtr, options.file.ptr);
}
