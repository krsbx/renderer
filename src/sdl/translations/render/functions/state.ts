import type { SDL } from '@/sdl';
import type { Renderer, Texture } from '@/sdl/types/definition';
import type { Float, Int32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type { RendererLogicalPresentation } from '../../../ffi/render/constant';
import { Event } from '../../events/struct';
import { FRect, Rect } from '../../rect/struct';

// Render Target

export function setRenderTarget(
  this: SDL,
  options: {
    renderer: Renderer;
    texture?: Texture | null;
  }
) {
  return this.symbols.SDL_SetRenderTarget(
    options.renderer,
    options.texture ?? null
  );
}

export function getRenderTarget(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_GetRenderTarget(renderer) as Texture;
}

// Logical Presentation

export function setRenderLogicalPresentation(
  this: SDL,
  options: {
    renderer: Renderer;
    w: Int32;
    h: Int32;
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

export function getRenderLogicalPresentation(this: SDL, renderer: Renderer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const modeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderLogicalPresentation(
    renderer,
    wStruct.$memory,
    hStruct.$memory,
    modeStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32') as Int32,
    h: hStruct.getValue(0, 'i32') as Int32,
    mode: modeStruct.getValue(0, 'i32') as RendererLogicalPresentation,
  };
}

export function getRenderLogicalPresentationRect(
  this: SDL,
  renderer: Renderer
) {
  const rect = FRect.create();

  const success = this.symbols.SDL_GetRenderLogicalPresentationRect(
    renderer,
    rect.$memory
  );

  if (!success) return null;

  return rect;
}

// Coordinate Conversion

export function renderCoordinatesFromWindow(
  this: SDL,
  options: {
    renderer: Renderer;
    windowX: Float;
    windowY: Float;
  }
) {
  const xStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const yStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_RenderCoordinatesFromWindow(
    options.renderer,
    options.windowX,
    options.windowY,
    xStruct.$memory,
    yStruct.$memory
  );

  if (!success) return null;

  return {
    x: xStruct.getValue(0, 'f32') as Float,
    y: yStruct.getValue(0, 'f32') as Float,
  };
}

export function renderCoordinatesToWindow(
  this: SDL,
  options: {
    renderer: Renderer;
    x: Float;
    y: Float;
  }
) {
  const windowXStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const windowYStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_RenderCoordinatesToWindow(
    options.renderer,
    options.x,
    options.y,
    windowXStruct.$memory,
    windowYStruct.$memory
  );

  if (!success) return null;

  return {
    windowX: windowXStruct.getValue(0, 'f32') as Float,
    windowY: windowYStruct.getValue(0, 'f32') as Float,
  };
}

export function convertEventToRenderCoordinates(
  this: SDL,
  options: {
    renderer: Renderer;
    event: Event;
  }
) {
  return this.symbols.SDL_ConvertEventToRenderCoordinates(
    options.renderer,
    options.event.$memory
  );
}

// Viewport

export function setRenderViewport(
  this: SDL,
  options: {
    renderer: Renderer;
    rect?: Rect | null;
  }
) {
  return this.symbols.SDL_SetRenderViewport(
    options.renderer,
    options.rect?.$memory ?? null
  );
}

export function getRenderViewport(this: SDL, renderer: Renderer) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetRenderViewport(renderer, rect.$memory);

  if (!success) return null;

  return rect;
}

export function renderViewportSet(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_RenderViewportSet(renderer);
}

export function getRenderSafeArea(this: SDL, renderer: Renderer) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetRenderSafeArea(renderer, rect.$memory);

  if (!success) return null;

  return rect;
}

// Clip Rect

export function setRenderClipRect(
  this: SDL,
  options: {
    renderer: Renderer;
    rect?: Rect | null;
  }
) {
  return this.symbols.SDL_SetRenderClipRect(
    options.renderer,
    options.rect?.$memory ?? null
  );
}

export function getRenderClipRect(this: SDL, renderer: Renderer) {
  const rect = Rect.create();

  const success = this.symbols.SDL_GetRenderClipRect(renderer, rect.$memory);

  if (!success) return null;

  return rect;
}

export function renderClipEnabled(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_RenderClipEnabled(renderer);
}

// Scale

export function setRenderScale(
  this: SDL,
  options: {
    renderer: Renderer;
    scaleX: Float;
    scaleY: Float;
  }
) {
  return this.symbols.SDL_SetRenderScale(
    options.renderer,
    options.scaleX,
    options.scaleY
  );
}

export function getRenderScale(this: SDL, renderer: Renderer) {
  const scaleXStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const scaleYStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetRenderScale(
    renderer,
    scaleXStruct.$memory,
    scaleYStruct.$memory
  );

  if (!success) return null;

  return {
    scaleX: scaleXStruct.getValue(0, 'f32') as Float,
    scaleY: scaleYStruct.getValue(0, 'f32') as Float,
  };
}
