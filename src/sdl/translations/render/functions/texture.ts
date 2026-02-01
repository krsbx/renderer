import type { SDL } from '@/sdl';
import type { Renderer, Texture } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import type { BlendMode } from '../../../ffi/blend-mode/constant';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import type { TextureAccess } from '../../../ffi/render/constant';
import type { ScaleMode } from '../../../ffi/surface/constant';
import { Palette } from '../../pixels/struct';
import { Rect } from '../../rect/struct';
import { Surface } from '../../surface/struct';

export function createTexture(
  this: SDL,
  options: {
    renderer: Renderer;
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
  ) as Texture;
}

export function createTextureFromSurface(
  this: SDL,
  options: {
    renderer: Renderer;
    surface: Surface;
  }
) {
  return this.symbols.SDL_CreateTextureFromSurface(
    options.renderer,
    options.surface.$address
  ) as Texture;
}

export function createTextureWithProperties(
  this: SDL,
  options: {
    renderer: Renderer;
    props: number;
  }
) {
  return this.symbols.SDL_CreateTextureWithProperties(
    options.renderer,
    options.props
  ) as Texture;
}

export function getTextureProperties(this: SDL, texture: Texture) {
  return this.symbols.SDL_GetTextureProperties(texture);
}

export function getRendererFromTexture(this: SDL, texture: Texture) {
  return this.symbols.SDL_GetRendererFromTexture(texture) as Renderer;
}

export function getTextureSize(this: SDL, texture: Texture) {
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
    texture: Texture;
    palette: Palette;
  }
) {
  return this.symbols.SDL_SetTexturePalette(
    options.texture,
    options.palette.$address
  );
}

export function getTexturePalette(this: SDL, texture: Texture) {
  const palettePtr = this.symbols.SDL_GetTexturePalette(texture);

  if (!palettePtr) return null;

  return new Palette(palettePtr);
}

export function setTextureColorMod(
  this: SDL,
  options: {
    texture: Texture;
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
    texture: Texture;
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

export function getTextureColorMod(this: SDL, texture: Texture) {
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

export function getTextureColorModFloat(this: SDL, texture: Texture) {
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
    texture: Texture;
    alpha: number;
  }
) {
  return this.symbols.SDL_SetTextureAlphaMod(options.texture, options.alpha);
}

export function setTextureAlphaModFloat(
  this: SDL,
  options: {
    texture: Texture;
    alpha: number;
  }
) {
  return this.symbols.SDL_SetTextureAlphaModFloat(
    options.texture,
    options.alpha
  );
}

export function getTextureAlphaMod(this: SDL, texture: Texture) {
  const alphaStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetTextureAlphaMod(
    texture,
    alphaStruct.$address
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'u8');
}

export function getTextureAlphaModFloat(this: SDL, texture: Texture) {
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
    texture: Texture;
    blendMode: BlendMode;
  }
) {
  return this.symbols.SDL_SetTextureBlendMode(
    options.texture,
    options.blendMode
  );
}

export function getTextureBlendMode(this: SDL, texture: Texture) {
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
    texture: Texture;
    scaleMode: ScaleMode;
  }
) {
  return this.symbols.SDL_SetTextureScaleMode(
    options.texture,
    options.scaleMode
  );
}

export function getTextureScaleMode(this: SDL, texture: Texture) {
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
    texture: Texture;
    rect?: Rect | null;
    pixels: Uint8Array;
    pitch: number;
  }
) {
  return this.symbols.SDL_UpdateTexture(
    options.texture,
    options.rect?.$address ?? null,
    options.pixels,
    options.pitch
  );
}

export function updateYUVTexture(
  this: SDL,
  options: {
    texture: Texture;
    rect?: Rect | null;
    yPlane: Uint8Array;
    yPitch: number;
    uPlane: Uint8Array;
    uPitch: number;
    vPlane: Uint8Array;
    vPitch: number;
  }
) {
  return this.symbols.SDL_UpdateYUVTexture(
    options.texture,
    options.rect?.$address ?? null,
    options.yPlane,
    options.yPitch,
    options.uPlane,
    options.uPitch,
    options.vPlane,
    options.vPitch
  );
}

export function updateNVTexture(
  this: SDL,
  options: {
    texture: Texture;
    rect?: Rect | null;
    yPlane: Uint8Array;
    yPitch: number;
    uvPlane: Uint8Array;
    uvPitch: number;
  }
) {
  return this.symbols.SDL_UpdateNVTexture(
    options.texture,
    options.rect?.$address ?? null,
    options.yPlane,
    options.yPitch,
    options.uvPlane,
    options.uvPitch
  );
}

export function lockTexture(
  this: SDL,
  options: {
    texture: Texture;
    rect?: Rect | null;
  }
) {
  const pixelsStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const pitchStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_LockTexture(
    options.texture,
    options.rect?.$address ?? null,
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
    texture: Texture;
    rect?: Rect | null;
  }
) {
  const surfaceStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  const success = this.symbols.SDL_LockTextureToSurface(
    options.texture,
    options.rect?.$address ?? null,
    surfaceStruct.$address
  );

  if (!success) return null;

  const surfacePtr = surfaceStruct.getValue(0, 'ptr');

  if (!surfacePtr) return null;

  return new Surface(surfacePtr);
}

export function unlockTexture(this: SDL, texture: Texture) {
  this.symbols.SDL_UnlockTexture(texture);
}
