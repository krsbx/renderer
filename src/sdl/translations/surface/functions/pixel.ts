import type { SDL } from '@/sdl';
import type { Float, Int32, UInt8, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import { Rect } from '../../rect/struct';
import { Surface } from '../struct';

// Convert Pixels

export function convertPixels(
  this: SDL,
  options: {
    width: Int32;
    height: Int32;
    srcFormat: PixelFormat;
    src: Uint8Array;
    srcPitch: Int32;
    dstFormat: PixelFormat;
    dst: Uint8Array;
    dstPitch: Int32;
  }
) {
  return this.symbols.SDL_ConvertPixels(
    options.width,
    options.height,
    options.srcFormat,
    options.src,
    options.srcPitch,
    options.dstFormat,
    options.dst,
    options.dstPitch
  );
}

export function convertPixelsAndColorspace(
  this: SDL,
  options: {
    width: Int32;
    height: Int32;
    srcFormat: PixelFormat;
    srcColorspace: Colorspace;
    srcProperties?: UInt32;
    src: Uint8Array;
    srcPitch: Int32;
    dstFormat: PixelFormat;
    dstColorspace: Colorspace;
    dstProperties?: UInt32;
    dst: Uint8Array;
    dstPitch: Int32;
  }
) {
  return this.symbols.SDL_ConvertPixelsAndColorspace(
    options.width,
    options.height,
    options.srcFormat,
    options.srcColorspace,
    options.srcProperties ?? 0,
    options.src,
    options.srcPitch,
    options.dstFormat,
    options.dstColorspace,
    options.dstProperties ?? 0,
    options.dst,
    options.dstPitch
  );
}

// Premultiply Alpha

export function premultiplyAlpha(
  this: SDL,
  options: {
    width: Int32;
    height: Int32;
    srcFormat: PixelFormat;
    src: Uint8Array;
    srcPitch: Int32;
    dstFormat: PixelFormat;
    dst: Uint8Array;
    dstPitch: Int32;
    linear: boolean;
  }
) {
  return this.symbols.SDL_PremultiplyAlpha(
    options.width,
    options.height,
    options.srcFormat,
    options.src,
    options.srcPitch,
    options.dstFormat,
    options.dst,
    options.dstPitch,
    options.linear
  );
}

export function premultiplySurfaceAlpha(
  this: SDL,
  options: {
    surface: Surface;
    linear: boolean;
  }
) {
  return this.symbols.SDL_PremultiplySurfaceAlpha(
    options.surface.$memory,
    options.linear
  );
}

// Fill

export function clearSurface(
  this: SDL,
  options: {
    surface: Surface;
    r: Float;
    g: Float;
    b: Float;
    a: Float;
  }
) {
  return this.symbols.SDL_ClearSurface(
    options.surface.$memory,
    options.r,
    options.g,
    options.b,
    options.a
  );
}

export function fillSurfaceRect(
  this: SDL,
  options: {
    dst: Surface;
    rect?: Rect | null;
    color: UInt32;
  }
) {
  return this.symbols.SDL_FillSurfaceRect(
    options.dst.$memory,
    options.rect?.$memory ?? null,
    options.color
  );
}

export function fillSurfaceRects(
  this: SDL,
  options: {
    dst: Surface;
    rects: Rect[];
    color: UInt32;
  }
) {
  const { buffer: rects } = CStruct.writeArray(options.rects, Rect.BYTE_SIZE);

  return this.symbols.SDL_FillSurfaceRects(
    options.dst.$memory,
    rects,
    options.rects.length,
    options.color
  );
}

// Map RGB/RGBA

export function mapSurfaceRGB(
  this: SDL,
  options: {
    surface: Surface;
    r: UInt8;
    g: UInt8;
    b: UInt8;
  }
) {
  return this.symbols.SDL_MapSurfaceRGB(
    options.surface.$memory,
    options.r,
    options.g,
    options.b
  );
}

export function mapSurfaceRGBA(
  this: SDL,
  options: {
    surface: Surface;
    r: UInt8;
    g: UInt8;
    b: UInt8;
    a: UInt8;
  }
) {
  return this.symbols.SDL_MapSurfaceRGBA(
    options.surface.$memory,
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
    surface: Surface;
    x: Int32;
    y: Int32;
  }
) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_ReadSurfacePixel(
    options.surface.$memory,
    options.x,
    options.y,
    rStruct.$memory,
    gStruct.$memory,
    bStruct.$memory,
    aStruct.$memory
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'u8') as UInt8,
    g: gStruct.getValue(0, 'u8') as UInt8,
    b: bStruct.getValue(0, 'u8') as UInt8,
    a: aStruct.getValue(0, 'u8') as UInt8,
  };
}

export function readSurfacePixelFloat(
  this: SDL,
  options: {
    surface: Surface;
    x: Int32;
    y: Int32;
  }
) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_ReadSurfacePixelFloat(
    options.surface.$memory,
    options.x,
    options.y,
    rStruct.$memory,
    gStruct.$memory,
    bStruct.$memory,
    aStruct.$memory
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'f32') as Float,
    g: gStruct.getValue(0, 'f32') as Float,
    b: bStruct.getValue(0, 'f32') as Float,
    a: aStruct.getValue(0, 'f32') as Float,
  };
}

// Write Pixel

export function writeSurfacePixel(
  this: SDL,
  options: {
    surface: Surface;
    x: Int32;
    y: Int32;
    r: UInt8;
    g: UInt8;
    b: UInt8;
    a: UInt8;
  }
) {
  return this.symbols.SDL_WriteSurfacePixel(
    options.surface.$memory,
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
    surface: Surface;
    x: Int32;
    y: Int32;
    r: Float;
    g: Float;
    b: Float;
    a: Float;
  }
) {
  return this.symbols.SDL_WriteSurfacePixelFloat(
    options.surface.$memory,
    options.x,
    options.y,
    options.r,
    options.g,
    options.b,
    options.a
  );
}
