import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import {
  getStructAddress,
  getStructMemoryAddress,
} from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';
import { Rect } from '../../rect/utility';
import { Surface } from '../utility';

// Convert Pixels

export function convertPixels(
  this: SDL,
  options: {
    width: number;
    height: number;
    srcFormat: PixelFormat;
    src: Pointer | Uint8Array;
    srcPitch: number;
    dstFormat: PixelFormat;
    dst: Pointer | Uint8Array;
    dstPitch: number;
  }
) {
  return this.symbols.SDL_ConvertPixels(
    options.width,
    options.height,
    options.srcFormat,
    getStructMemoryAddress(options.src),
    options.srcPitch,
    options.dstFormat,
    getStructMemoryAddress(options.dst),
    options.dstPitch
  );
}

export function convertPixelsAndColorspace(
  this: SDL,
  options: {
    width: number;
    height: number;
    srcFormat: PixelFormat;
    srcColorspace: Colorspace;
    srcProperties?: number;
    src: Pointer | Uint8Array;
    srcPitch: number;
    dstFormat: PixelFormat;
    dstColorspace: Colorspace;
    dstProperties?: number;
    dst: Pointer | Uint8Array;
    dstPitch: number;
  }
) {
  return this.symbols.SDL_ConvertPixelsAndColorspace(
    options.width,
    options.height,
    options.srcFormat,
    options.srcColorspace,
    options.srcProperties ?? 0,
    getStructMemoryAddress(options.src),
    options.srcPitch,
    options.dstFormat,
    options.dstColorspace,
    options.dstProperties ?? 0,
    getStructMemoryAddress(options.dst),
    options.dstPitch
  );
}

// Premultiply Alpha

export function premultiplyAlpha(
  this: SDL,
  options: {
    width: number;
    height: number;
    srcFormat: PixelFormat;
    src: Pointer | Uint8Array;
    srcPitch: number;
    dstFormat: PixelFormat;
    dst: Pointer | Uint8Array;
    dstPitch: number;
    linear: boolean;
  }
) {
  return this.symbols.SDL_PremultiplyAlpha(
    options.width,
    options.height,
    options.srcFormat,
    getStructMemoryAddress(options.src),
    options.srcPitch,
    options.dstFormat,
    getStructMemoryAddress(options.dst),
    options.dstPitch,
    options.linear
  );
}

export function premultiplySurfaceAlpha(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    linear: boolean;
  }
) {
  return this.symbols.SDL_PremultiplySurfaceAlpha(
    getStructAddress(options.surface),
    options.linear
  );
}

// Fill

export function clearSurface(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    r: number;
    g: number;
    b: number;
    a: number;
  }
) {
  return this.symbols.SDL_ClearSurface(
    getStructAddress(options.surface),
    options.r,
    options.g,
    options.b,
    options.a
  );
}

export function fillSurfaceRect(
  this: SDL,
  options: {
    dst: Surface | Pointer;
    rect?: Rect | Pointer | null;
    color: number;
  }
) {
  return this.symbols.SDL_FillSurfaceRect(
    getStructAddress(options.dst),
    options.rect ? getStructAddress(options.rect) : null,
    options.color
  );
}

export function fillSurfaceRects(
  this: SDL,
  options: {
    dst: Surface | Pointer;
    rects: Rect[];
    count: number;
    color: number;
  }
) {
  const rectsStruct = new CStruct({
    length: Rect.BYTE_SIZE * options.rects.length,
  });

  for (let i = 0; i < options.rects.length; i++) {
    const offset = i * Rect.BYTE_SIZE;
    const rect = options.rects[i];

    if (!rect) continue;

    rectsStruct.setValue(offset + 0, rect.x, 'i32');
    rectsStruct.setValue(offset + 4, rect.y, 'i32');
    rectsStruct.setValue(offset + 8, rect.w, 'i32');
    rectsStruct.setValue(offset + 12, rect.h, 'i32');
  }

  return this.symbols.SDL_FillSurfaceRects(
    getStructAddress(options.dst),
    rectsStruct.$address,
    options.count,
    options.color
  );
}

// Map RGB/RGBA

export function mapSurfaceRGB(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    r: number;
    g: number;
    b: number;
  }
) {
  return this.symbols.SDL_MapSurfaceRGB(
    getStructAddress(options.surface),
    options.r,
    options.g,
    options.b
  );
}

export function mapSurfaceRGBA(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    r: number;
    g: number;
    b: number;
    a: number;
  }
) {
  return this.symbols.SDL_MapSurfaceRGBA(
    getStructAddress(options.surface),
    options.r,
    options.g,
    options.b,
    options.a
  );
}

// Read Pixel

export function readSurfacePixel(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    x: number;
    y: number;
  }
) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_ReadSurfacePixel(
    getStructAddress(options.surface),
    options.x,
    options.y,
    rStruct.$address,
    gStruct.$address,
    bStruct.$address,
    aStruct.$address
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'u8'),
    g: gStruct.getValue(0, 'u8'),
    b: bStruct.getValue(0, 'u8'),
    a: aStruct.getValue(0, 'u8'),
  };
}

export function readSurfacePixelFloat(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    x: number;
    y: number;
  }
) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_ReadSurfacePixelFloat(
    getStructAddress(options.surface),
    options.x,
    options.y,
    rStruct.$address,
    gStruct.$address,
    bStruct.$address,
    aStruct.$address
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'f32'),
    g: gStruct.getValue(0, 'f32'),
    b: bStruct.getValue(0, 'f32'),
    a: aStruct.getValue(0, 'f32'),
  };
}

// Write Pixel

export function writeSurfacePixel(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    x: number;
    y: number;
    r: number;
    g: number;
    b: number;
    a: number;
  }
) {
  return this.symbols.SDL_WriteSurfacePixel(
    getStructAddress(options.surface),
    options.x,
    options.y,
    options.r,
    options.g,
    options.b,
    options.a
  );
}

export function writeSurfacePixelFloat(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    x: number;
    y: number;
    r: number;
    g: number;
    b: number;
    a: number;
  }
) {
  return this.symbols.SDL_WriteSurfacePixelFloat(
    getStructAddress(options.surface),
    options.x,
    options.y,
    options.r,
    options.g,
    options.b,
    options.a
  );
}
