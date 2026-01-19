import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { Rect } from '../../rect/utility';
import { Surface } from '../../surface/utility';

// Read Pixels

export function renderReadPixels(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: Rect | Pointer | null;
  }
) {
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;

  const surfacePtr = this.symbols.SDL_RenderReadPixels(
    options.renderer,
    rectPtr ?? null
  );

  if (!surfacePtr) return null;

  return new Surface(surfacePtr);
}

// Present

export function renderPresent(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_RenderPresent(renderer);
}

// Destroy

export function destroyTexture(this: SDL, texture: Pointer) {
  this.symbols.SDL_DestroyTexture(texture);
}

export function destroyRenderer(this: SDL, renderer: Pointer) {
  this.symbols.SDL_DestroyRenderer(renderer);
}

// Flush

export function flushRenderer(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_FlushRenderer(renderer);
}
