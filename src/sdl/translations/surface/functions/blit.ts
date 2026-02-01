import type { SDL } from '@/sdl';
import type { ScaleMode } from '../../../ffi/surface/constant';
import { Rect } from '../../rect/struct';
import { Surface } from '../struct';

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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.dst.$memory,
    options.dstrect?.$memory ?? null
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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.dst.$memory,
    options.dstrect?.$memory ?? null
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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.dst.$memory,
    options.dstrect?.$memory ?? null,
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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.dst.$memory,
    options.dstrect?.$memory ?? null,
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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.dst.$memory,
    options.dstrect?.$memory ?? null,
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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.dst.$memory,
    options.dstrect?.$memory ?? null
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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.scale,
    options.scaleMode,
    options.dst.$memory,
    options.dstrect?.$memory ?? null
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
    options.src.$memory,
    options.srcrect?.$memory ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.scaleMode,
    options.dst.$memory,
    options.dstrect?.$memory ?? null
  );
}
