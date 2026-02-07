import type { SDL } from '@/sdl';
import type { Renderer, Texture } from '@/sdl/types/definition';
import type { Float } from '@/types/primitive';
import type { FlipMode } from '../../../ffi/surface/constant';
import { FPoint, FRect } from '../../rect/struct';

export function renderTextureRotated(
  this: SDL,
  options: {
    renderer: Renderer;
    texture: Texture;
    srcRect?: FRect | null;
    dstRect?: FRect | null;
    angle: Float;
    center?: FPoint | null;
    flip: FlipMode;
  }
) {
  return this.symbols.SDL_RenderTextureRotated(
    options.renderer,
    options.texture,
    options.srcRect?.$memory ?? null,
    options.dstRect?.$memory ?? null,
    options.angle,
    options.center?.$memory ?? null,
    options.flip
  );
}

export function renderTextureAffine(
  this: SDL,
  options: {
    renderer: Renderer;
    texture: Texture;
    srcRect?: FRect | null;
    origin?: FPoint | null;
    right?: FPoint | null;
    down?: FPoint | null;
  }
) {
  return this.symbols.SDL_RenderTextureAffine(
    options.renderer,
    options.texture,
    options.srcRect?.$memory ?? null,
    options.origin?.$memory ?? null,
    options.right?.$memory ?? null,
    options.down?.$memory ?? null
  );
}

export function renderTextureTiled(
  this: SDL,
  options: {
    renderer: Renderer;
    texture: Texture;
    srcRect?: FRect | null;
    scale: Float;
    dstRect?: FRect | null;
  }
) {
  return this.symbols.SDL_RenderTextureTiled(
    options.renderer,
    options.texture,
    options.srcRect?.$memory ?? null,
    options.scale,
    options.dstRect?.$memory ?? null
  );
}

export function renderTexture9Grid(
  this: SDL,
  options: {
    renderer: Renderer;
    texture: Texture;
    srcRect?: FRect | null;
    leftWidth: Float;
    rightWidth: Float;
    topHeight: Float;
    bottomHeight: Float;
    scale: Float;
    dstRect?: FRect | null;
  }
) {
  return this.symbols.SDL_RenderTexture9Grid(
    options.renderer,
    options.texture,
    options.srcRect?.$memory ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.dstRect?.$memory ?? null
  );
}

export function renderTexture9GridTiled(
  this: SDL,
  options: {
    renderer: Renderer;
    texture: Texture;
    srcRect?: FRect | null;
    leftWidth: Float;
    rightWidth: Float;
    topHeight: Float;
    bottomHeight: Float;
    scale: Float;
    dstRect?: FRect | null;
    tileScale: Float;
  }
) {
  return this.symbols.SDL_RenderTexture9GridTiled(
    options.renderer,
    options.texture,
    options.srcRect?.$memory ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.dstRect?.$memory ?? null,
    options.tileScale
  );
}
