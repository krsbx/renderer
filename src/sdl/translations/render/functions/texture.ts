import type { SDL } from '@/sdl';
import type { PropertiesID, Renderer, Texture } from '@/sdl/types/definition';
import type { Float, Int32, UInt8 } from '@/types/primitive';
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
    w: Int32;
    h: Int32;
  }
) {
  return this.symbols.SDL_CreateTexture(
    options.renderer,
    options.format,
    options.access,
    options.w,
    options.h
  ) as Texture | null;
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
    options.surface.$memory
  ) as Texture | null;
}

export function createTextureWithProperties(
  this: SDL,
  options: {
    renderer: Renderer;
    props: PropertiesID;
  }
) {
  return this.symbols.SDL_CreateTextureWithProperties(
    options.renderer,
    options.props
  ) as Texture | null;
}

export function getTextureProperties(this: SDL, texture: Texture) {
  return this.symbols.SDL_GetTextureProperties(texture) as PropertiesID;
}

export function getRendererFromTexture(this: SDL, texture: Texture) {
  return this.symbols.SDL_GetRendererFromTexture(texture) as Renderer | null;
}

export function getTextureSize(this: SDL, texture: Texture) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetTextureSize(
    texture,
    wStruct.$memory,
    hStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'f32') as Float,
    h: hStruct.getValue(0, 'f32') as Float,
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
    options.palette.$memory
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
    r: UInt8;
    g: UInt8;
    b: UInt8;
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
    r: Float;
    g: Float;
    b: Float;
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
    rStruct.$memory,
    gStruct.$memory,
    bStruct.$memory
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'u8') as UInt8,
    g: gStruct.getValue(0, 'u8') as UInt8,
    b: bStruct.getValue(0, 'u8') as UInt8,
  };
}

export function getTextureColorModFloat(this: SDL, texture: Texture) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetTextureColorModFloat(
    texture,
    rStruct.$memory,
    gStruct.$memory,
    bStruct.$memory
  );

  if (!success) return null;

  return {
    r: rStruct.getValue(0, 'f32') as Float,
    g: gStruct.getValue(0, 'f32') as Float,
    b: bStruct.getValue(0, 'f32') as Float,
  };
}

export function setTextureAlphaMod(
  this: SDL,
  options: {
    texture: Texture;
    alpha: UInt8;
  }
) {
  return this.symbols.SDL_SetTextureAlphaMod(options.texture, options.alpha);
}

export function setTextureAlphaModFloat(
  this: SDL,
  options: {
    texture: Texture;
    alpha: Float;
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
    alphaStruct.$memory
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'u8') as UInt8;
}

export function getTextureAlphaModFloat(this: SDL, texture: Texture) {
  const alphaStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetTextureAlphaModFloat(
    texture,
    alphaStruct.$memory
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'f32') as Float;
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
    blendModeStruct.$memory
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
    scaleModeStruct.$memory
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
    pitch: Int32;
  }
) {
  return this.symbols.SDL_UpdateTexture(
    options.texture,
    options.rect?.$memory ?? null,
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
    yPitch: Int32;
    uPlane: Uint8Array;
    uPitch: Int32;
    vPlane: Uint8Array;
    vPitch: Int32;
  }
) {
  return this.symbols.SDL_UpdateYUVTexture(
    options.texture,
    options.rect?.$memory ?? null,
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
    yPitch: Int32;
    uvPlane: Uint8Array;
    uvPitch: Int32;
  }
) {
  return this.symbols.SDL_UpdateNVTexture(
    options.texture,
    options.rect?.$memory ?? null,
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
    options.rect?.$memory ?? null,
    pixelsStruct.$memory,
    pitchStruct.$memory
  );

  if (!success) return null;

  return {
    pixels: pixelsStruct.getValue(0, 'ptr'),
    pitch: pitchStruct.getValue(0, 'i32') as Int32,
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
    options.rect?.$memory ?? null,
    surfaceStruct.$memory
  );

  if (!success) return null;

  const surfacePtr = surfaceStruct.getValue(0, 'ptr');

  if (!surfacePtr) return null;

  return new Surface(surfacePtr);
}

export function unlockTexture(this: SDL, texture: Texture) {
  this.symbols.SDL_UnlockTexture(texture);
}
