import type { SDL } from '@/sdl';
import type { Pointer } from 'bun:ffi';
import type { FlipMode } from '../../../ffi/surface/constant';
import { FPoint, FRect } from '../../rect/struct';

export function renderTextureRotated(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | null;
    dstRect?: FRect | null;
    angle: number;
    center?: FPoint | null;
    flip: FlipMode;
  }
) {
  return this.symbols.SDL_RenderTextureRotated(
    options.renderer,
    options.texture,
    options.srcRect?.$address ?? null,
    options.dstRect?.$address ?? null,
    options.angle,
    options.center?.$address ?? null,
    options.flip
  );
}

export function renderTextureAffine(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | null;
    origin?: FPoint | null;
    right?: FPoint | null;
    down?: FPoint | null;
  }
) {
  return this.symbols.SDL_RenderTextureAffine(
    options.renderer,
    options.texture,
    options.srcRect?.$address ?? null,
    options.origin?.$address ?? null,
    options.right?.$address ?? null,
    options.down?.$address ?? null
  );
}

export function renderTextureTiled(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | null;
    scale: number;
    dstRect?: FRect | null;
  }
) {
  return this.symbols.SDL_RenderTextureTiled(
    options.renderer,
    options.texture,
    options.srcRect?.$address ?? null,
    options.scale,
    options.dstRect?.$address ?? null
  );
}

export function renderTexture9Grid(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | null;
    leftWidth: number;
    rightWidth: number;
    topHeight: number;
    bottomHeight: number;
    scale: number;
    dstRect?: FRect | null;
  }
) {
  return this.symbols.SDL_RenderTexture9Grid(
    options.renderer,
    options.texture,
    options.srcRect?.$address ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.dstRect?.$address ?? null
  );
}

export function renderTexture9GridTiled(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | null;
    leftWidth: number;
    rightWidth: number;
    topHeight: number;
    bottomHeight: number;
    scale: number;
    dstRect?: FRect | null;
    tileScale: number;
  }
) {
  return this.symbols.SDL_RenderTexture9GridTiled(
    options.renderer,
    options.texture,
    options.srcRect?.$address ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.dstRect?.$address ?? null,
    options.tileScale
  );
}
