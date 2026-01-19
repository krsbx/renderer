import { ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { BlendMode } from '../../../ffi/blend-mode/constant';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import type { TextureAccess } from '../../../ffi/render/constant';
import type { ScaleMode } from '../../../ffi/surface/constant';
import { CStruct } from '../../../utility/cstruct';
import { Palette } from '../../pixels/utility';
import { Rect } from '../../rect/utility';
import { Surface } from '../../surface/utility';

export function createTexture(
  this: SDL,
  options: {
    renderer: Pointer;
    format: PixelFormat;
    access: TextureAccess;
    w: number;
    h: number;
  }
) {
  return this.symbols.SDL_CreateTexture(
    options.renderer,
    options.format,
    options.access,
    options.w,
    options.h
  );
}

export function createTextureFromSurface(
  this: SDL,
  options: {
    renderer: Pointer;
    surface: Surface | Pointer;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_CreateTextureFromSurface(
    options.renderer,
    surfacePtr
  );
}

export function createTextureWithProperties(
  this: SDL,
  options: {
    renderer: Pointer;
    props: number;
  }
) {
  return this.symbols.SDL_CreateTextureWithProperties(
    options.renderer,
    options.props
  );
}

export function getTextureProperties(this: SDL, texture: Pointer) {
  return this.symbols.SDL_GetTextureProperties(texture);
}

export function getRendererFromTexture(this: SDL, texture: Pointer) {
  return this.symbols.SDL_GetRendererFromTexture(texture);
}

export function getTextureSize(this: SDL, texture: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetTextureSize(
    texture,
    wStruct.$address,
    hStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'f32'),
    h: hStruct.getValue(0, 'f32'),
  };
}

export function setTexturePalette(
  this: SDL,
  options: {
    texture: Pointer;
    palette: Palette | Pointer;
  }
) {
  const palettePtr =
    options.palette instanceof Palette
      ? options.palette.$address
      : options.palette;

  return this.symbols.SDL_SetTexturePalette(options.texture, palettePtr);
}

export function getTexturePalette(this: SDL, texture: Pointer) {
  const palettePtr = this.symbols.SDL_GetTexturePalette(texture);

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}

export function setTextureColorMod(
  this: SDL,
  options: {
    texture: Pointer;
    r: number;
    g: number;
    b: number;
  }
) {
  return this.symbols.SDL_SetTextureColorMod(
    options.texture,
    options.r,
    options.g,
    options.b
  );
}

export function setTextureColorModFloat(
  this: SDL,
  options: {
    texture: Pointer;
    r: number;
    g: number;
    b: number;
  }
) {
  return this.symbols.SDL_SetTextureColorModFloat(
    options.texture,
    options.r,
    options.g,
    options.b
  );
}

export function getTextureColorMod(this: SDL, texture: Pointer) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetTextureColorMod(
    texture,
    rStruct.$address,
    gStruct.$address,
    bStruct.$address
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'u8'),
    g: gStruct.getValue(0, 'u8'),
    b: bStruct.getValue(0, 'u8'),
  };
}

export function getTextureColorModFloat(this: SDL, texture: Pointer) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetTextureColorModFloat(
    texture,
    rStruct.$address,
    gStruct.$address,
    bStruct.$address
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'f32'),
    g: gStruct.getValue(0, 'f32'),
    b: bStruct.getValue(0, 'f32'),
  };
}

export function setTextureAlphaMod(
  this: SDL,
  options: {
    texture: Pointer;
    alpha: number;
  }
) {
  return this.symbols.SDL_SetTextureAlphaMod(options.texture, options.alpha);
}

export function setTextureAlphaModFloat(
  this: SDL,
  options: {
    texture: Pointer;
    alpha: number;
  }
) {
  return this.symbols.SDL_SetTextureAlphaModFloat(
    options.texture,
    options.alpha
  );
}

export function getTextureAlphaMod(this: SDL, texture: Pointer) {
  const alphaStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetTextureAlphaMod(
    texture,
    alphaStruct.$address
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'u8');
}

export function getTextureAlphaModFloat(this: SDL, texture: Pointer) {
  const alphaStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetTextureAlphaModFloat(
    texture,
    alphaStruct.$address
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'f32');
}

export function setTextureBlendMode(
  this: SDL,
  options: {
    texture: Pointer;
    blendMode: BlendMode;
  }
) {
  return this.symbols.SDL_SetTextureBlendMode(
    options.texture,
    options.blendMode
  );
}

export function getTextureBlendMode(this: SDL, texture: Pointer) {
  const blendModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetTextureBlendMode(
    texture,
    blendModeStruct.$address
  );

  if (!success) return null;

  return blendModeStruct.getValue(0, 'i32') as BlendMode;
}

export function setTextureScaleMode(
  this: SDL,
  options: {
    texture: Pointer;
    scaleMode: ScaleMode;
  }
) {
  return this.symbols.SDL_SetTextureScaleMode(
    options.texture,
    options.scaleMode
  );
}

export function getTextureScaleMode(this: SDL, texture: Pointer) {
  const scaleModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetTextureScaleMode(
    texture,
    scaleModeStruct.$address
  );

  if (!success) return null;

  return scaleModeStruct.getValue(0, 'i32') as ScaleMode;
}

export function updateTexture(
  this: SDL,
  options: {
    texture: Pointer;
    rect?: Rect | Pointer | null;
    pixels: CStruct | Pointer | Uint8Array;
    pitch: number;
  }
) {
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;
  const pixelsPtr =
    options.pixels instanceof CStruct
      ? options.pixels.$address
      : options.pixels instanceof Uint8Array
        ? ptr(options.pixels)
        : options.pixels;

  return this.symbols.SDL_UpdateTexture(
    options.texture,
    rectPtr ?? null,
    pixelsPtr,
    options.pitch
  );
}

export function updateYUVTexture(
  this: SDL,
  options: {
    texture: Pointer;
    rect?: Rect | Pointer | null;
    yPlane: CStruct | Pointer | Uint8Array;
    yPitch: number;
    uPlane: CStruct | Pointer | Uint8Array;
    uPitch: number;
    vPlane: CStruct | Pointer | Uint8Array;
    vPitch: number;
  }
) {
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;
  const yPlanePtr =
    options.yPlane instanceof CStruct
      ? options.yPlane.$address
      : options.yPlane instanceof Uint8Array
        ? ptr(options.yPlane)
        : options.yPlane;
  const uPlanePtr =
    options.uPlane instanceof CStruct
      ? options.uPlane.$address
      : options.uPlane instanceof Uint8Array
        ? ptr(options.uPlane)
        : options.uPlane;
  const vPlanePtr =
    options.vPlane instanceof CStruct
      ? options.vPlane.$address
      : options.vPlane instanceof Uint8Array
        ? ptr(options.vPlane)
        : options.vPlane;

  return this.symbols.SDL_UpdateYUVTexture(
    options.texture,
    rectPtr ?? null,
    yPlanePtr,
    options.yPitch,
    uPlanePtr,
    options.uPitch,
    vPlanePtr,
    options.vPitch
  );
}

export function updateNVTexture(
  this: SDL,
  options: {
    texture: Pointer;
    rect?: Rect | Pointer | null;
    yPlane: CStruct | Pointer | Uint8Array;
    yPitch: number;
    uvPlane: CStruct | Pointer | Uint8Array;
    uvPitch: number;
  }
) {
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;
  const yPlanePtr =
    options.yPlane instanceof CStruct
      ? options.yPlane.$address
      : options.yPlane instanceof Uint8Array
        ? ptr(options.yPlane)
        : options.yPlane;
  const uvPlanePtr =
    options.uvPlane instanceof CStruct
      ? options.uvPlane.$address
      : options.uvPlane instanceof Uint8Array
        ? ptr(options.uvPlane)
        : options.uvPlane;

  return this.symbols.SDL_UpdateNVTexture(
    options.texture,
    rectPtr ?? null,
    yPlanePtr,
    options.yPitch,
    uvPlanePtr,
    options.uvPitch
  );
}

export function lockTexture(
  this: SDL,
  options: {
    texture: Pointer;
    rect?: Rect | Pointer | null;
  }
) {
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;
  const pixelsStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const pitchStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_LockTexture(
    options.texture,
    rectPtr ?? null,
    pixelsStruct.$address,
    pitchStruct.$address
  );

  if (!success) return null;

  return {
    pixels: pixelsStruct.getValue(0, 'ptr'),
    pitch: pitchStruct.getValue(0, 'i32'),
  };
}

export function lockTextureToSurface(
  this: SDL,
  options: {
    texture: Pointer;
    rect?: Rect | Pointer | null;
  }
) {
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;
  const surfaceStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  const success = this.symbols.SDL_LockTextureToSurface(
    options.texture,
    rectPtr ?? null,
    surfaceStruct.$address
  );

  if (!success) return null;

  const surfacePtr = surfaceStruct.getValue(0, 'ptr');

  if (!surfacePtr) return null;

  return new Surface(surfacePtr);
}

export function unlockTexture(this: SDL, texture: Pointer) {
  this.symbols.SDL_UnlockTexture(texture);
}
