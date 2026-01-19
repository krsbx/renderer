import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { FPoint, FRect } from '../../rect/utility';

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
  const pointsStruct = new CStruct({
    length: FPoint.BYTE_SIZE * options.points.length,
  });

  for (let i = 0; i < options.points.length; i++) {
    const offset = i * FPoint.BYTE_SIZE;
    const point = options.points[i];

    if (!point) continue;

    pointsStruct.setValue(offset + 0, point.x, 'f32');
    pointsStruct.setValue(offset + 4, point.y, 'f32');
  }

  return this.symbols.SDL_RenderPoints(
    options.renderer,
    pointsStruct.$address,
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
  const pointsStruct = new CStruct({
    length: FPoint.BYTE_SIZE * options.points.length,
  });

  for (let i = 0; i < options.points.length; i++) {
    const offset = i * FPoint.BYTE_SIZE;
    const point = options.points[i];

    if (!point) continue;

    pointsStruct.setValue(offset + 0, point.x, 'f32');
    pointsStruct.setValue(offset + 4, point.y, 'f32');
  }

  return this.symbols.SDL_RenderLines(
    options.renderer,
    pointsStruct.$address,
    options.points.length
  );
}

// Rect

export function renderRect(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: FRect | Pointer | null;
  }
) {
  const rectPtr =
    options.rect instanceof FRect ? options.rect.$address : options.rect;

  return this.symbols.SDL_RenderRect(options.renderer, rectPtr ?? null);
}

export function renderRects(
  this: SDL,
  options: {
    renderer: Pointer;
    rects: FRect[];
  }
) {
  const rectsStruct = new CStruct({
    length: FRect.BYTE_SIZE * options.rects.length,
  });

  for (let i = 0; i < options.rects.length; i++) {
    const offset = i * FRect.BYTE_SIZE;
    const rect = options.rects[i];

    if (!rect) continue;

    rectsStruct.setValue(offset + 0, rect.x, 'f32');
    rectsStruct.setValue(offset + 4, rect.y, 'f32');
    rectsStruct.setValue(offset + 8, rect.w, 'f32');
    rectsStruct.setValue(offset + 12, rect.h, 'f32');
  }

  return this.symbols.SDL_RenderRects(
    options.renderer,
    rectsStruct.$address,
    options.rects.length
  );
}

// Fill Rect

export function renderFillRect(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: FRect | Pointer | null;
  }
) {
  const rectPtr =
    options.rect instanceof FRect ? options.rect.$address : options.rect;

  return this.symbols.SDL_RenderFillRect(options.renderer, rectPtr ?? null);
}

export function renderFillRects(
  this: SDL,
  options: {
    renderer: Pointer;
    rects: FRect[];
  }
) {
  const rectsStruct = new CStruct({
    length: FRect.BYTE_SIZE * options.rects.length,
  });

  for (let i = 0; i < options.rects.length; i++) {
    const offset = i * FRect.BYTE_SIZE;
    const rect = options.rects[i];

    if (!rect) continue;

    rectsStruct.setValue(offset + 0, rect.x, 'f32');
    rectsStruct.setValue(offset + 4, rect.y, 'f32');
    rectsStruct.setValue(offset + 8, rect.w, 'f32');
    rectsStruct.setValue(offset + 12, rect.h, 'f32');
  }

  return this.symbols.SDL_RenderFillRects(
    options.renderer,
    rectsStruct.$address,
    options.rects.length
  );
}

// Render Texture

export function renderTexture(
  this: SDL,
  options: {
    renderer: Pointer;
    texture: Pointer;
    srcRect?: FRect | Pointer | null;
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

  return this.symbols.SDL_RenderTexture(
    options.renderer,
    options.texture,
    srcRectPtr ?? null,
    dstRectPtr ?? null
  );
}
