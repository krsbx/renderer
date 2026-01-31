import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { Pointer } from 'bun:ffi';
import { FPoint, FRect } from '../../rect/struct';

// Clear

export function renderClear(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_RenderClear(renderer);
}

// Point

export function renderPoint(
  this: SDL,
  options: {
    renderer: Pointer;
    x: number;
    y: number;
  }
) {
  return this.symbols.SDL_RenderPoint(options.renderer, options.x, options.y);
}

export function renderPoints(
  this: SDL,
  options: {
    renderer: Pointer;
    points: FPoint[];
  }
) {
  const { buffer } = CStruct.writeArray(options.points, FPoint.BYTE_SIZE);

  return this.symbols.SDL_RenderPoints(
    options.renderer,
    buffer,
    options.points.length
  );
}

// Line

export function renderLine(
  this: SDL,
  options: {
    renderer: Pointer;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
) {
  return this.symbols.SDL_RenderLine(
    options.renderer,
    options.x1,
    options.y1,
    options.x2,
    options.y2
  );
}

export function renderLines(
  this: SDL,
  options: {
    renderer: Pointer;
    points: FPoint[];
  }
) {
  const { buffer } = CStruct.writeArray(options.points, FPoint.BYTE_SIZE);

  return this.symbols.SDL_RenderLines(
    options.renderer,
    buffer,
    options.points.length
  );
}

// Rect

export function renderRect(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: FRect | null;
  }
) {
  return this.symbols.SDL_RenderRect(
    options.renderer,
    options.rect?.$address ?? null
  );
}

export function renderRects(
  this: SDL,
  options: {
    renderer: Pointer;
    rects: FRect[];
  }
) {
  const { buffer } = CStruct.writeArray(options.rects, FRect.BYTE_SIZE);

  return this.symbols.SDL_RenderRects(
    options.renderer,
    buffer,
    options.rects.length
  );
}

// Fill Rect

export function renderFillRect(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: FRect | null;
  }
) {
  return this.symbols.SDL_RenderFillRect(
    options.renderer,
    options.rect?.$address ?? null
  );
}

export function renderFillRects(
  this: SDL,
  options: {
    renderer: Pointer;
    rects: FRect[];
  }
) {
  const { buffer } = CStruct.writeArray(options.rects, FRect.BYTE_SIZE);

  return this.symbols.SDL_RenderFillRects(
    options.renderer,
    buffer,
    options.rects.length
  );
}

// Render Texture

export function renderTexture(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | null;
    dstRect?: FRect | null;
  }
) {
  return this.symbols.SDL_RenderTexture(
    options.renderer,
    options.texture,
    options.srcRect?.$address ?? null,
    options.dstRect?.$address ?? null
  );
}
