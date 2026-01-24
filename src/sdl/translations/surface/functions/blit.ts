import type { SDL } from '@/sdl';
import { getStructAddress } from '@utility/common';
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null,
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null,
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null,
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    options.scale,
    options.scaleMode,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null
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
    getStructAddress(options.src),
    options.srcrect ? getStructAddress(options.srcrect) : null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.scaleMode,
    getStructAddress(options.dst),
    options.dstrect ? getStructAddress(options.dstrect) : null
  );
}
