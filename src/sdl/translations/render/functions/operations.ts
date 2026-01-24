import type { SDL } from '@/sdl';
import { getStructAddress } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import { Rect } from '../../rect/utility';
import { Surface } from '../../surface/utility';

// Read Pixels

export function renderReadPixels(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: Rect | null;
  }
) {
  const surfacePtr = this.symbols.SDL_RenderReadPixels(
    options.renderer,
    options.rect ? getStructAddress(options.rect) : null
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
