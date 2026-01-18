import { ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import { CStruct } from '../../../utility/cstruct';
import { Rect } from '../../rect/utility';
import { Surface } from '../utility';

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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_MapSurfaceRGB(
    surfacePtr,
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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_MapSurfaceRGBA(
    surfacePtr,
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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_ReadSurfacePixel(
    surfacePtr,
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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_ReadSurfacePixelFloat(
    surfacePtr,
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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_WriteSurfacePixel(
    surfacePtr,
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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_WriteSurfacePixelFloat(
    surfacePtr,
    options.x,
    options.y,
    options.r,
    options.g,
    options.b,
    options.a
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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_ClearSurface(
    surfacePtr,
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
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;

  return this.symbols.SDL_FillSurfaceRect(
    dstPtr,
    rectPtr ?? null,
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

  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;

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
    dstPtr,
    rectsStruct.$address,
    options.count,
    options.color
  );
}

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
  const srcPtr =
    options.src instanceof Uint8Array ? ptr(options.src) : options.src;
  const dstPtr =
    options.dst instanceof Uint8Array ? ptr(options.dst) : options.dst;

  return this.symbols.SDL_ConvertPixels(
    options.width,
    options.height,
    options.srcFormat,
    srcPtr,
    options.srcPitch,
    options.dstFormat,
    dstPtr,
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
  const srcPtr =
    options.src instanceof Uint8Array ? ptr(options.src) : options.src;
  const dstPtr =
    options.dst instanceof Uint8Array ? ptr(options.dst) : options.dst;

  return this.symbols.SDL_ConvertPixelsAndColorspace(
    options.width,
    options.height,
    options.srcFormat,
    options.srcColorspace,
    options.srcProperties ?? 0,
    srcPtr,
    options.srcPitch,
    options.dstFormat,
    options.dstColorspace,
    options.dstProperties ?? 0,
    dstPtr,
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
  const srcPtr =
    options.src instanceof Uint8Array ? ptr(options.src) : options.src;
  const dstPtr =
    options.dst instanceof Uint8Array ? ptr(options.dst) : options.dst;

  return this.symbols.SDL_PremultiplyAlpha(
    options.width,
    options.height,
    options.srcFormat,
    srcPtr,
    options.srcPitch,
    options.dstFormat,
    dstPtr,
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
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_PremultiplySurfaceAlpha(surfacePtr, options.linear);
}
