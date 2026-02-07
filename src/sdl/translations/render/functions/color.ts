import type { SDL } from '@/sdl';
import type { Renderer } from '@/sdl/types/definition';
import type { Float, UInt8 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type { BlendMode } from '../../../ffi/blend-mode/constant';

// Draw Color

export function setRenderDrawColor(
  this: SDL,
  options: {
    renderer: Renderer;
    r: UInt8;
    g: UInt8;
    b: UInt8;
    a: UInt8;
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
    renderer: Renderer;
    r: Float;
    g: Float;
    b: Float;
    a: Float;
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

export function getRenderDrawColor(this: SDL, renderer: Renderer) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });

  const success = this.symbols.SDL_GetRenderDrawColor(
    renderer,
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

export function getRenderDrawColorFloat(this: SDL, renderer: Renderer) {
  const rStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const gStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const bStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const aStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetRenderDrawColorFloat(
    renderer,
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

// Color Scale

export function setRenderColorScale(
  this: SDL,
  options: {
    renderer: Renderer;
    scale: Float;
  }
) {
  return this.symbols.SDL_SetRenderColorScale(options.renderer, options.scale);
}

export function getRenderColorScale(this: SDL, renderer: Renderer) {
  const scaleStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetRenderColorScale(
    renderer,
    scaleStruct.$memory
  );

  if (!success) return null;

  return scaleStruct.getValue(0, 'f32') as Float;
}

// Draw Blend Mode

export function setRenderDrawBlendMode(
  this: SDL,
  options: {
    renderer: Renderer;
    blendMode: BlendMode;
  }
) {
  return this.symbols.SDL_SetRenderDrawBlendMode(
    options.renderer,
    options.blendMode
  );
}

export function getRenderDrawBlendMode(this: SDL, renderer: Renderer) {
  const blendModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderDrawBlendMode(
    renderer,
    blendModeStruct.$memory
  );

  if (!success) return null;

  return blendModeStruct.getValue(0, 'i32') as BlendMode;
}
