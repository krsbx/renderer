import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructAddress } from '@utility/common';
import type { BlendMode } from '../../../ffi/blend-mode/constant';
import { Rect } from '../../rect/utility';
import { Surface } from '../utility';

// RLE

export function setSurfaceRLE(
  this: SDL,
  options: {
    surface: Surface;
    enabled: boolean;
  }
) {
  return this.symbols.SDL_SetSurfaceRLE(
    getStructAddress(options.surface),
    options.enabled
  );
}

export function surfaceHasRLE(this: SDL, surface: Surface) {
  return this.symbols.SDL_SurfaceHasRLE(getStructAddress(surface));
}

// Color Key

export function setSurfaceColorKey(
  this: SDL,
  options: {
    surface: Surface;
    enabled: boolean;
    key: number;
  }
) {
  return this.symbols.SDL_SetSurfaceColorKey(
    getStructAddress(options.surface),
    options.enabled,
    options.key
  );
}

export function surfaceHasColorKey(this: SDL, surface: Surface) {
  return this.symbols.SDL_SurfaceHasColorKey(getStructAddress(surface));
}

export function getSurfaceColorKey(this: SDL, surface: Surface) {
  const keyStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_GetSurfaceColorKey(
    getStructAddress(surface),
    keyStruct.$address
  );

  if (!success) return null;

  return keyStruct.getValue(0, 'u32');
}

// Color Mod

export function setSurfaceColorMod(
  this: SDL,
  options: {
    surface: Surface;
    r: number;
    g: number;
    b: number;
  }
) {
  return this.symbols.SDL_SetSurfaceColorMod(
    getStructAddress(options.surface),
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
    getStructAddress(surface),
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

// Alpha Mod

export function setSurfaceAlphaMod(
  this: SDL,
  options: {
    surface: Surface;
    alpha: number;
  }
) {
  return this.symbols.SDL_SetSurfaceAlphaMod(
    getStructAddress(options.surface),
    options.alpha
  );
}

export function getSurfaceAlphaMod(this: SDL, surface: Surface) {
  const alphaStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetSurfaceAlphaMod(
    getStructAddress(surface),
    alphaStruct.$address
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'u8');
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
    getStructAddress(options.surface),
    options.blendMode
  );
}

export function getSurfaceBlendMode(this: SDL, surface: Surface) {
  const blendModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetSurfaceBlendMode(
    getStructAddress(surface),
    blendModeStruct.$address
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
    getStructAddress(options.surface),
    options.rect ? getStructAddress(options.rect) : null
  );
}

export function getSurfaceClipRect(this: SDL, surface: Surface) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetSurfaceClipRect(
    getStructAddress(surface),
    rect.$address
  );

  if (!success) return null;

  return rect;
}
