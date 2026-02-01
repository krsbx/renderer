import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import { Color, Palette, PixelFormatDetails } from '../struct';

export function getPixelFormatName(this: SDL, format: PixelFormat) {
  return this.symbols.SDL_GetPixelFormatName(format).toString();
}

export function getMasksForPixelFormat(this: SDL, format: PixelFormat) {
  const bppStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const rMaskStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const gMaskStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const bMaskStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const aMaskStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_GetMasksForPixelFormat(
    format,
    bppStruct.$address,
    rMaskStruct.$address,
    gMaskStruct.$address,
    bMaskStruct.$address,
    aMaskStruct.$address
  );

  if (!success) return null;

  return {
    bpp: bppStruct.getValue(0, 'i32'),
    rMask: rMaskStruct.getValue(0, 'u32'),
    gMask: gMaskStruct.getValue(0, 'u32'),
    bMask: bMaskStruct.getValue(0, 'u32'),
    aMask: aMaskStruct.getValue(0, 'u32'),
  };
}

export function getPixelFormatForMasks(
  this: SDL,
  options: {
    bpp: number;
    rMask: number;
    gMask: number;
    bMask: number;
    aMask: number;
  }
) {
  return this.symbols.SDL_GetPixelFormatForMasks(
    options.bpp,
    options.rMask,
    options.gMask,
    options.bMask,
    options.aMask
  ) as PixelFormat;
}

export function getPixelFormatDetails(this: SDL, format: PixelFormat) {
  const ptr = this.symbols.SDL_GetPixelFormatDetails(format);

  if (!ptr) return null;

  return new PixelFormatDetails(ptr);
}

export function createPalette(this: SDL, ncolors: number) {
  const ptr = this.symbols.SDL_CreatePalette(ncolors);

  if (!ptr) return null;

  return new Palette(ptr);
}

export function setPaletteColors(
  this: SDL,
  options: {
    palette: Palette;
    colors: Color[];
    firstcolor: number;
  }
) {
  const { buffer: colors } = CStruct.writeArray(
    options.colors,
    Color.BYTE_SIZE
  );

  return this.symbols.SDL_SetPaletteColors(
    options.palette.$address,
    colors,
    options.firstcolor,
    options.colors.length
  );
}

export function destroyPalette(this: SDL, palette: Palette) {
  this.symbols.SDL_DestroyPalette(palette.$address);
}

export function mapRGB(
  this: SDL,
  options: {
    format: PixelFormatDetails;
    palette?: Palette | null;
    r: number;
    g: number;
    b: number;
  }
) {
  return this.symbols.SDL_MapRGB(
    options.format.$address,
    options.palette?.$address ?? null,
    options.r,
    options.g,
    options.b
  );
}

export function mapRGBA(
  this: SDL,
  options: {
    format: PixelFormatDetails;
    palette?: Palette | null;
    r: number;
    g: number;
    b: number;
    a: number;
  }
) {
  return this.symbols.SDL_MapRGBA(
    options.format.$address,
    options.palette?.$address ?? null,
    options.r,
    options.g,
    options.b,
    options.a
  );
}

export function getRGB(
  this: SDL,
  options: {
    pixel: number;
    format: PixelFormatDetails;
    palette?: Palette | null;
  }
) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  this.symbols.SDL_GetRGB(
    options.pixel,
    options.format.$address,
    options.palette?.$address ?? null,
    rStruct.$address,
    gStruct.$address,
    bStruct.$address
  );

  return {
    r: rStruct.getValue(0, 'u8'),
    g: gStruct.getValue(0, 'u8'),
    b: bStruct.getValue(0, 'u8'),
  };
}

export function getRGBA(
  this: SDL,
  options: {
    pixel: number;
    format: PixelFormatDetails;
    palette?: Palette | null;
  }
) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  this.symbols.SDL_GetRGBA(
    options.pixel,
    options.format.$address,
    options.palette?.$address ?? null,
    rStruct.$address,
    gStruct.$address,
    bStruct.$address,
    aStruct.$address
  );

  return {
    r: rStruct.getValue(0, 'u8'),
    g: gStruct.getValue(0, 'u8'),
    b: bStruct.getValue(0, 'u8'),
    a: aStruct.getValue(0, 'u8'),
  };
}
