import type { CString, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { ScaleMode } from '../../../ffi/surface/constant';
import { CStruct } from '../../../utility/cstruct';

// Debug Text

export function renderDebugText(
  this: SDL,
  options: {
    renderer: Pointer;
    x: number;
    y: number;
    str: CString;
  }
) {
  return this.symbols.SDL_RenderDebugText(
    options.renderer,
    options.x,
    options.y,
    options.str.ptr
  );
}

export function renderDebugTextFormat(
  this: SDL,
  options: {
    renderer: Pointer;
    x: number;
    y: number;
    fmt: CString;
  }
) {
  return this.symbols.SDL_RenderDebugTextFormat(
    options.renderer,
    options.x,
    options.y,
    options.fmt.ptr
  );
}

// Default Texture Scale Mode

export function setDefaultTextureScaleMode(
  this: SDL,
  options: {
    renderer: Pointer;
    scaleMode: ScaleMode;
  }
) {
  return this.symbols.SDL_SetDefaultTextureScaleMode(
    options.renderer,
    options.scaleMode
  );
}

export function getDefaultTextureScaleMode(this: SDL, renderer: Pointer) {
  const scaleModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetDefaultTextureScaleMode(
    renderer,
    scaleModeStruct.$address
  );

  if (!success) return null;

  return scaleModeStruct.getValue(0, 'i32') as ScaleMode;
}
