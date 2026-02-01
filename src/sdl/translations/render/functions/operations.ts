import type { SDL } from '@/sdl';
import type { Renderer, Texture } from '@/sdl/types/definition';
import { Rect } from '../../rect/struct';
import { Surface } from '../../surface/struct';

// Read Pixels

export function renderReadPixels(
  this: SDL,
  options: {
    renderer: Renderer;
    rect?: Rect | null;
  }
) {
  const surfacePtr = this.symbols.SDL_RenderReadPixels(
    options.renderer,
    options.rect?.$address ?? null
  );

  if (!surfacePtr) return null;

  return new Surface(surfacePtr);
}

// Present

export function renderPresent(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_RenderPresent(renderer);
}

// Destroy

export function destroyTexture(this: SDL, texture: Texture) {
  this.symbols.SDL_DestroyTexture(texture);
}

export function destroyRenderer(this: SDL, renderer: Renderer) {
  this.symbols.SDL_DestroyRenderer(renderer);
}

// Flush

export function flushRenderer(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_FlushRenderer(renderer);
}
