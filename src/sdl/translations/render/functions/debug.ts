import type { SDL } from '@/sdl';
import type { Renderer } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { ScaleMode } from '../../../ffi/surface/constant';

// Debug Text

export function renderDebugText(
  this: SDL,
  options: {
    renderer: Renderer;
    x: number;
    y: number;
    str: string;
  }
) {
  return this.symbols.SDL_RenderDebugText(
    options.renderer,
    options.x,
    options.y,
    stringToCString(options.str).ptr
  );
}

export function renderDebugTextFormat(
  this: SDL,
  options: {
    renderer: Renderer;
    x: number;
    y: number;
    fmt: string;
  }
) {
  return this.symbols.SDL_RenderDebugTextFormat(
    options.renderer,
    options.x,
    options.y,
    stringToCString(options.fmt).ptr
  );
}

// Default Texture Scale Mode

export function setDefaultTextureScaleMode(
  this: SDL,
  options: {
    renderer: Renderer;
    scaleMode: ScaleMode;
  }
) {
  return this.symbols.SDL_SetDefaultTextureScaleMode(
    options.renderer,
    options.scaleMode
  );
}

export function getDefaultTextureScaleMode(this: SDL, renderer: Renderer) {
  const scaleModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetDefaultTextureScaleMode(
    renderer,
    scaleModeStruct.$memory
  );

  if (!success) return null;

  return scaleModeStruct.getValue(0, 'i32') as ScaleMode;
}
