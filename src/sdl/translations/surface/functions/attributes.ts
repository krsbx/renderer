import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { BlendMode } from '../../../ffi/blend-mode/constant';
import { CStruct } from '../../../utility/cstruct';
import { Rect } from '../../rect/utility';
import { Surface } from '../utility';

// RLE

export function setSurfaceRLE(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    enabled: boolean;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SetSurfaceRLE(surfacePtr, options.enabled);
}

export function surfaceHasRLE(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_SurfaceHasRLE(surfacePtr);
}

// Color Key

export function setSurfaceColorKey(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    enabled: boolean;
    key: number;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SetSurfaceColorKey(
    surfacePtr,
    options.enabled,
    options.key
  );
}

export function surfaceHasColorKey(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  return this.symbols.SDL_SurfaceHasColorKey(surfacePtr);
}

export function getSurfaceColorKey(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;
  const keyStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_GetSurfaceColorKey(
    surfacePtr,
    keyStruct.$address
  );

  if (!success) return null;

  return keyStruct.getValue(0, 'u32');
}

// Color Mod

export function setSurfaceColorMod(
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

  return this.symbols.SDL_SetSurfaceColorMod(
    surfacePtr,
    options.r,
    options.g,
    options.b
  );
}

export function getSurfaceColorMod(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetSurfaceColorMod(
    surfacePtr,
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
    surface: Surface | Pointer;
    alpha: number;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SetSurfaceAlphaMod(surfacePtr, options.alpha);
}

export function getSurfaceAlphaMod(this: SDL, surface: Surface | Pointer) {
  const alphaStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  const success = this.symbols.SDL_GetSurfaceAlphaMod(
    surfacePtr,
    alphaStruct.$address
  );

  if (!success) return null;

  return alphaStruct.getValue(0, 'u8');
}

// Blend Mode

export function setSurfaceBlendMode(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    blendMode: BlendMode;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  return this.symbols.SDL_SetSurfaceBlendMode(surfacePtr, options.blendMode);
}

export function getSurfaceBlendMode(this: SDL, surface: Surface | Pointer) {
  const blendModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;

  const success = this.symbols.SDL_GetSurfaceBlendMode(
    surfacePtr,
    blendModeStruct.$address
  );

  if (!success) return null;

  return blendModeStruct.getValue(0, 'i32') as BlendMode;
}

// Clip Rect

export function setSurfaceClipRect(
  this: SDL,
  options: {
    surface: Surface | Pointer;
    rect?: Rect | Pointer | null;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;
  const rectPtr =
    options.rect instanceof Rect
      ? options.rect.$address
      : (options.rect ?? null);

  return this.symbols.SDL_SetSurfaceClipRect(surfacePtr, rectPtr);
}

export function getSurfaceClipRect(this: SDL, surface: Surface | Pointer) {
  const surfacePtr = surface instanceof Surface ? surface.$address : surface;
  const rect = new Rect(Rect.allocMemory());

  const success = this.symbols.SDL_GetSurfaceClipRect(
    surfacePtr,
    rect.$address
  );

  if (!success) return null;

  return rect;
}
