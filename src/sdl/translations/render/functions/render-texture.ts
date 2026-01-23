import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { FlipMode } from '../../../ffi/surface/constant';
import { getStructAddress } from '../../../utility/common';
import { FPoint, FRect } from '../../rect/utility';

export function renderTextureRotated(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | Pointer | null;
    dstRect?: FRect | Pointer | null;
    angle: number;
    center?: FPoint | Pointer | null;
    flip: FlipMode;
  }
) {
  return this.symbols.SDL_RenderTextureRotated(
    options.renderer,
    options.texture,
    options.srcRect ? getStructAddress(options.srcRect) : null,
    options.dstRect ? getStructAddress(options.dstRect) : null,
    options.angle,
    options.center ? getStructAddress(options.center) : null,
    options.flip
  );
}

export function renderTextureAffine(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | Pointer | null;
    origin?: FPoint | Pointer | null;
    right?: FPoint | Pointer | null;
    down?: FPoint | Pointer | null;
  }
) {
  return this.symbols.SDL_RenderTextureAffine(
    options.renderer,
    options.texture,
    options.srcRect ? getStructAddress(options.srcRect) : null,
    options.origin ? getStructAddress(options.origin) : null,
    options.right ? getStructAddress(options.right) : null,
    options.down ? getStructAddress(options.down) : null
  );
}

export function renderTextureTiled(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | Pointer | null;
    scale: number;
    dstRect?: FRect | Pointer | null;
  }
) {
  return this.symbols.SDL_RenderTextureTiled(
    options.renderer,
    options.texture,
    options.srcRect ? getStructAddress(options.srcRect) : null,
    options.scale,
    options.dstRect ? getStructAddress(options.dstRect) : null
  );
}

export function renderTexture9Grid(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | Pointer | null;
    leftWidth: number;
    rightWidth: number;
    topHeight: number;
    bottomHeight: number;
    scale: number;
    dstRect?: FRect | Pointer | null;
  }
) {
  return this.symbols.SDL_RenderTexture9Grid(
    options.renderer,
    options.texture,
    options.srcRect ? getStructAddress(options.srcRect) : null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.dstRect ? getStructAddress(options.dstRect) : null
  );
}

export function renderTexture9GridTiled(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | Pointer | null;
    leftWidth: number;
    rightWidth: number;
    topHeight: number;
    bottomHeight: number;
    scale: number;
    dstRect?: FRect | Pointer | null;
    tileScale: number;
  }
) {
  return this.symbols.SDL_RenderTexture9GridTiled(
    options.renderer,
    options.texture,
    options.srcRect ? getStructAddress(options.srcRect) : null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.dstRect ? getStructAddress(options.dstRect) : null,
    options.tileScale
  );
}
