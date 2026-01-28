import type { SDL } from '@/sdl';
import type { ScaleMode } from '../../../ffi/surface/constant';
import { Rect } from '../../rect/utility';
import { Surface } from '../utility';

export function blitSurface(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    dst: Surface;
    dstrect?: Rect | null;
  }
) {
  return this.symbols.SDL_BlitSurface(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.dst.$address,
    options.dstrect?.$address ?? null
  );
}

export function blitSurfaceUnchecked(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    dst: Surface;
    dstrect?: Rect | null;
  }
) {
  return this.symbols.SDL_BlitSurfaceUnchecked(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.dst.$address,
    options.dstrect?.$address ?? null
  );
}

export function blitSurfaceScaled(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    dst: Surface;
    dstrect?: Rect | null;
    scaleMode: ScaleMode;
  }
) {
  return this.symbols.SDL_BlitSurfaceScaled(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.dst.$address,
    options.dstrect?.$address ?? null,
    options.scaleMode
  );
}

export function blitSurfaceUncheckedScaled(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    dst: Surface;
    dstrect?: Rect | null;
    scaleMode: ScaleMode;
  }
) {
  return this.symbols.SDL_BlitSurfaceUncheckedScaled(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.dst.$address,
    options.dstrect?.$address ?? null,
    options.scaleMode
  );
}

export function stretchSurface(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    dst: Surface;
    dstrect?: Rect | null;
    scaleMode: ScaleMode;
  }
) {
  return this.symbols.SDL_StretchSurface(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.dst.$address,
    options.dstrect?.$address ?? null,
    options.scaleMode
  );
}

export function blitSurfaceTiled(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    dst: Surface;
    dstrect?: Rect | null;
  }
) {
  return this.symbols.SDL_BlitSurfaceTiled(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.dst.$address,
    options.dstrect?.$address ?? null
  );
}

export function blitSurfaceTiledWithScale(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    scale: number;
    scaleMode: ScaleMode;
    dst: Surface;
    dstrect?: Rect | null;
  }
) {
  return this.symbols.SDL_BlitSurfaceTiledWithScale(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.scale,
    options.scaleMode,
    options.dst.$address,
    options.dstrect?.$address ?? null
  );
}

export function blitSurface9Grid(
  this: SDL,
  options: {
    src: Surface;
    srcrect?: Rect | null;
    leftWidth: number;
    rightWidth: number;
    topHeight: number;
    bottomHeight: number;
    scale: number;
    scaleMode: ScaleMode;
    dst: Surface;
    dstrect?: Rect | null;
  }
) {
  return this.symbols.SDL_BlitSurface9Grid(
    options.src.$address,
    options.srcrect?.$address ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.scaleMode,
    options.dst.$address,
    options.dstrect?.$address ?? null
  );
}
