import type { SDL } from '@/sdl';
import type { UInt8, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type { BlendMode } from '../../../ffi/blend-mode/constant';
import { Rect } from '../../rect/struct';
import { Surface } from '../struct';

// RLE

export function setSurfaceRLE(
  this: SDL,
  options: {
    surface: Surface;
    enabled: boolean;
  }
) {
  return this.symbols.SDL_SetSurfaceRLE(
    options.surface.$memory,
    options.enabled
  );
}

export function surfaceHasRLE(this: SDL, surface: Surface) {
  return this.symbols.SDL_SurfaceHasRLE(surface.$memory);
}

// Color Key

export function setSurfaceColorKey(
  this: SDL,
  options: {
    surface: Surface;
    enabled: boolean;
    key: UInt32;
  }
) {
  return this.symbols.SDL_SetSurfaceColorKey(
    options.surface.$memory,
    options.enabled,
    options.key
  );
}

export function surfaceHasColorKey(this: SDL, surface: Surface) {
  return this.symbols.SDL_SurfaceHasColorKey(surface.$memory);
}

export function getSurfaceColorKey(this: SDL, surface: Surface) {
  const keyStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_GetSurfaceColorKey(
    surface.$memory,
    keyStruct.$memory
  );

  if (!success) return null;

  return keyStruct.getValue(0, 'u32') as UInt32;
}

// Color Mod

export function setSurfaceColorMod(
  this: SDL,
  options: {
    surface: Surface;
    r: UInt8;
    g: UInt8;
    b: UInt8;
  }
) {
  return this.symbols.SDL_SetSurfaceColorMod(
    options.surface.$memory,
    options.r,
    options.g,
    options.b
  );
}

export function getSurfaceColorMod(this: SDL, surface: Surface) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetSurfaceColorMod(
    surface.$memory,
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

// Alpha Mod

export function setSurfaceAlphaMod(
  this: SDL,
  options: {
    surface: Surface;
    alpha: UInt8;
  }
) {
  return this.symbols.SDL_SetSurfaceAlphaMod(
    options.surface.$memory,
    options.alpha
  );
}

export function getSurfaceAlphaMod(this: SDL, surface: Surface) {
  const alphaStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetSurfaceAlphaMod(
    surface.$memory,
    alphaStruct.$memory
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'u8') as UInt8;
}

// Blend Mode

export function setSurfaceBlendMode(
  this: SDL,
  options: {
    surface: Surface;
    blendMode: BlendMode;
  }
) {
  return this.symbols.SDL_SetSurfaceBlendMode(
    options.surface.$memory,
    options.blendMode
  );
}

export function getSurfaceBlendMode(this: SDL, surface: Surface) {
  const blendModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetSurfaceBlendMode(
    surface.$memory,
    blendModeStruct.$memory
  );

  if (!success) return null;

  return blendModeStruct.getValue(0, 'i32') as BlendMode;
}

// Clip Rect

export function setSurfaceClipRect(
  this: SDL,
  options: {
    surface: Surface;
    rect?: Rect | null;
  }
) {
  return this.symbols.SDL_SetSurfaceClipRect(
    options.surface.$memory,
    options.rect?.$memory ?? null
  );
}

export function getSurfaceClipRect(this: SDL, surface: Surface) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetSurfaceClipRect(
    surface.$memory,
    rect.$memory
  );

  if (!success) return null;

  return rect;
}
