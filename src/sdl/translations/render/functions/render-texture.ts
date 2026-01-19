import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { FlipMode } from '../../../ffi/surface/constant';
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
  const srcRectPtr =
    options.srcRect instanceof FRect
      ? options.srcRect.$address
      : options.srcRect;
  const dstRectPtr =
    options.dstRect instanceof FRect
      ? options.dstRect.$address
      : options.dstRect;
  const centerPtr =
    options.center instanceof FPoint ? options.center.$address : options.center;

  return this.symbols.SDL_RenderTextureRotated(
    options.renderer,
    options.texture,
    srcRectPtr ?? null,
    dstRectPtr ?? null,
    options.angle,
    centerPtr ?? null,
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
  const srcRectPtr =
    options.srcRect instanceof FRect
      ? options.srcRect.$address
      : options.srcRect;
  const originPtr =
    options.origin instanceof FPoint ? options.origin.$address : options.origin;
  const rightPtr =
    options.right instanceof FPoint ? options.right.$address : options.right;
  const downPtr =
    options.down instanceof FPoint ? options.down.$address : options.down;

  return this.symbols.SDL_RenderTextureAffine(
    options.renderer,
    options.texture,
    srcRectPtr ?? null,
    originPtr ?? null,
    rightPtr ?? null,
    downPtr ?? null
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
  const srcRectPtr =
    options.srcRect instanceof FRect
      ? options.srcRect.$address
      : options.srcRect;
  const dstRectPtr =
    options.dstRect instanceof FRect
      ? options.dstRect.$address
      : options.dstRect;

  return this.symbols.SDL_RenderTextureTiled(
    options.renderer,
    options.texture,
    srcRectPtr ?? null,
    options.scale,
    dstRectPtr ?? null
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
  const srcRectPtr =
    options.srcRect instanceof FRect
      ? options.srcRect.$address
      : options.srcRect;
  const dstRectPtr =
    options.dstRect instanceof FRect
      ? options.dstRect.$address
      : options.dstRect;

  return this.symbols.SDL_RenderTexture9Grid(
    options.renderer,
    options.texture,
    srcRectPtr ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    dstRectPtr ?? null
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
  const srcRectPtr =
    options.srcRect instanceof FRect
      ? options.srcRect.$address
      : options.srcRect;
  const dstRectPtr =
    options.dstRect instanceof FRect
      ? options.dstRect.$address
      : options.dstRect;

  return this.symbols.SDL_RenderTexture9GridTiled(
    options.renderer,
    options.texture,
    srcRectPtr ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    dstRectPtr ?? null,
    options.tileScale
  );
}
