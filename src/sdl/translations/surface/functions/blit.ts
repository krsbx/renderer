import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { ScaleMode } from '../../../ffi/surface/constant';
import { Rect } from '../../rect/utility';
import { Surface } from '../utility';

export function blitSurface(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_BlitSurface(
    srcPtr,
    srcrectPtr ?? null,
    dstPtr,
    dstrectPtr ?? null
  );
}

export function blitSurfaceUnchecked(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_BlitSurfaceUnchecked(
    srcPtr,
    srcrectPtr ?? null,
    dstPtr,
    dstrectPtr ?? null
  );
}

export function blitSurfaceScaled(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
    scaleMode: ScaleMode;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_BlitSurfaceScaled(
    srcPtr,
    srcrectPtr ?? null,
    dstPtr,
    dstrectPtr ?? null,
    options.scaleMode
  );
}

export function blitSurfaceUncheckedScaled(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
    scaleMode: ScaleMode;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_BlitSurfaceUncheckedScaled(
    srcPtr,
    srcrectPtr ?? null,
    dstPtr,
    dstrectPtr ?? null,
    options.scaleMode
  );
}

export function stretchSurface(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
    scaleMode: ScaleMode;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_StretchSurface(
    srcPtr,
    srcrectPtr ?? null,
    dstPtr,
    dstrectPtr ?? null,
    options.scaleMode
  );
}

export function blitSurfaceTiled(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_BlitSurfaceTiled(
    srcPtr,
    srcrectPtr ?? null,
    dstPtr,
    dstrectPtr ?? null
  );
}

export function blitSurfaceTiledWithScale(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    scale: number;
    scaleMode: ScaleMode;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_BlitSurfaceTiledWithScale(
    srcPtr,
    srcrectPtr ?? null,
    options.scale,
    options.scaleMode,
    dstPtr,
    dstrectPtr ?? null
  );
}

export function blitSurface9Grid(
  this: SDL,
  options: {
    src: Surface | Pointer;
    srcrect?: Rect | Pointer | null;
    leftWidth: number;
    rightWidth: number;
    topHeight: number;
    bottomHeight: number;
    scale: number;
    scaleMode: ScaleMode;
    dst: Surface | Pointer;
    dstrect?: Rect | Pointer | null;
  }
) {
  const srcPtr =
    options.src instanceof Surface ? options.src.$address : options.src;
  const srcrectPtr =
    options.srcrect instanceof Rect
      ? options.srcrect.$address
      : options.srcrect;
  const dstPtr =
    options.dst instanceof Surface ? options.dst.$address : options.dst;
  const dstrectPtr =
    options.dstrect instanceof Rect
      ? options.dstrect.$address
      : options.dstrect;

  return this.symbols.SDL_BlitSurface9Grid(
    srcPtr,
    srcrectPtr ?? null,
    options.leftWidth,
    options.rightWidth,
    options.topHeight,
    options.bottomHeight,
    options.scale,
    options.scaleMode,
    dstPtr,
    dstrectPtr ?? null
  );
}
