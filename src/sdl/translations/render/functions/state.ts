import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { Pointer } from 'bun:ffi';
import type { RendererLogicalPresentation } from '../../../ffi/render/constant';
import { Event } from '../../events/struct';
import { FRect, Rect } from '../../rect/struct';

// Render Target

export function setRenderTarget(
  this: SDL,
  options: {
    renderer: Pointer;
    texture?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetRenderTarget(
    options.renderer,
    options.texture ?? null
  );
}

export function getRenderTarget(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_GetRenderTarget(renderer);
}

// Logical Presentation

export function setRenderLogicalPresentation(
  this: SDL,
  options: {
    renderer: Pointer;
    w: number;
    h: number;
    mode: RendererLogicalPresentation;
  }
) {
  return this.symbols.SDL_SetRenderLogicalPresentation(
    options.renderer,
    options.w,
    options.h,
    options.mode
  );
}

export function getRenderLogicalPresentation(this: SDL, renderer: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const modeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderLogicalPresentation(
    renderer,
    wStruct.$address,
    hStruct.$address,
    modeStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32'),
    h: hStruct.getValue(0, 'i32'),
    mode: modeStruct.getValue(0, 'i32') as RendererLogicalPresentation,
  };
}

export function getRenderLogicalPresentationRect(this: SDL, renderer: Pointer) {
  const rect = FRect.create();

  const success = this.symbols.SDL_GetRenderLogicalPresentationRect(
    renderer,
    rect.$address
  );

  if (!success) return null;

  return rect;
}

// Coordinate Conversion

export function renderCoordinatesFromWindow(
  this: SDL,
  options: {
    renderer: Pointer;
    windowX: number;
    windowY: number;
  }
) {
  const xStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const yStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_RenderCoordinatesFromWindow(
    options.renderer,
    options.windowX,
    options.windowY,
    xStruct.$address,
    yStruct.$address
  );

  if (!success) return null;

  return {
    x: xStruct.getValue(0, 'f32'),
    y: yStruct.getValue(0, 'f32'),
  };
}

export function renderCoordinatesToWindow(
  this: SDL,
  options: {
    renderer: Pointer;
    x: number;
    y: number;
  }
) {
  const windowXStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const windowYStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_RenderCoordinatesToWindow(
    options.renderer,
    options.x,
    options.y,
    windowXStruct.$address,
    windowYStruct.$address
  );

  if (!success) return null;

  return {
    windowX: windowXStruct.getValue(0, 'f32'),
    windowY: windowYStruct.getValue(0, 'f32'),
  };
}

export function convertEventToRenderCoordinates(
  this: SDL,
  options: {
    renderer: Pointer;
    event: Event;
  }
) {
  return this.symbols.SDL_ConvertEventToRenderCoordinates(
    options.renderer,
    options.event.$address
  );
}

// Viewport

export function setRenderViewport(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: Rect | null;
  }
) {
  return this.symbols.SDL_SetRenderViewport(
    options.renderer,
    options.rect?.$address ?? null
  );
}

export function getRenderViewport(this: SDL, renderer: Pointer) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetRenderViewport(renderer, rect.$address);

  if (!success) return null;

  return rect;
}

export function renderViewportSet(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_RenderViewportSet(renderer);
}

export function getRenderSafeArea(this: SDL, renderer: Pointer) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetRenderSafeArea(renderer, rect.$address);

  if (!success) return null;

  return rect;
}

// Clip Rect

export function setRenderClipRect(
  this: SDL,
  options: {
    renderer: Pointer;
    rect?: Rect | null;
  }
) {
  return this.symbols.SDL_SetRenderClipRect(
    options.renderer,
    options.rect?.$address ?? null
  );
}

export function getRenderClipRect(this: SDL, renderer: Pointer) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetRenderClipRect(renderer, rect.$address);

  if (!success) return null;

  return rect;
}

export function renderClipEnabled(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_RenderClipEnabled(renderer);
}

// Scale

export function setRenderScale(
  this: SDL,
  options: {
    renderer: Pointer;
    scaleX: number;
    scaleY: number;
  }
) {
  return this.symbols.SDL_SetRenderScale(
    options.renderer,
    options.scaleX,
    options.scaleY
  );
}

export function getRenderScale(this: SDL, renderer: Pointer) {
  const scaleXStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const scaleYStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetRenderScale(
    renderer,
    scaleXStruct.$address,
    scaleYStruct.$address
  );

  if (!success) return null;

  return {
    scaleX: scaleXStruct.getValue(0, 'f32'),
    scaleY: scaleYStruct.getValue(0, 'f32'),
  };
}
