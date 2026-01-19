import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { BlendMode } from '../../../ffi/blend-mode/constant';
import { CStruct } from '../../../utility/cstruct';

// Draw Color

export function setRenderDrawColor(
  this: SDL,
  options: {
    renderer: Pointer;
    r: number;
    g: number;
    b: number;
    a: number;
  }
) {
  return this.symbols.SDL_SetRenderDrawColor(
    options.renderer,
    options.r,
    options.g,
    options.b,
    options.a
  );
}

export function setRenderDrawColorFloat(
  this: SDL,
  options: {
    renderer: Pointer;
    r: number;
    g: number;
    b: number;
    a: number;
  }
) {
  return this.symbols.SDL_SetRenderDrawColorFloat(
    options.renderer,
    options.r,
    options.g,
    options.b,
    options.a
  );
}

export function getRenderDrawColor(this: SDL, renderer: Pointer) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetRenderDrawColor(
    renderer,
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

export function getRenderDrawColorFloat(this: SDL, renderer: Pointer) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetRenderDrawColorFloat(
    renderer,
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

// Color Scale

export function setRenderColorScale(
  this: SDL,
  options: {
    renderer: Pointer;
    scale: number;
  }
) {
  return this.symbols.SDL_SetRenderColorScale(options.renderer, options.scale);
}

export function getRenderColorScale(this: SDL, renderer: Pointer) {
  const scaleStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetRenderColorScale(
    renderer,
    scaleStruct.$address
  );

  if (!success) return null;

  return scaleStruct.getValue(0, 'f32');
}

// Draw Blend Mode

export function setRenderDrawBlendMode(
  this: SDL,
  options: {
    renderer: Pointer;
    blendMode: BlendMode;
  }
) {
  return this.symbols.SDL_SetRenderDrawBlendMode(
    options.renderer,
    options.blendMode
  );
}

export function getRenderDrawBlendMode(this: SDL, renderer: Pointer) {
  const blendModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderDrawBlendMode(
    renderer,
    blendModeStruct.$address
  );

  if (!success) return null;

  return blendModeStruct.getValue(0, 'i32') as BlendMode;
}
