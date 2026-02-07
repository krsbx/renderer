import type { SDL } from '@/sdl';
import type { GPUDevice, Renderer, Window } from '@/sdl/types/definition';
import type { Int32, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { WindowFlags } from '../../../ffi/video/constant';
import { Surface } from '../../surface/struct';

export function createWindowAndRenderer(
  this: SDL,
  options: {
    title: string;
    width: Int32;
    height: Int32;
    windowFlags: WindowFlags;
  }
) {
  const windowStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const rendererStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  const success = this.symbols.SDL_CreateWindowAndRenderer(
    stringToCString(options.title).ptr,
    options.width,
    options.height,
    options.windowFlags,
    windowStruct.$memory,
    rendererStruct.$memory
  );

  if (!success) return null;

  return {
    window: windowStruct.getValue(0, 'ptr') as Window,
    renderer: rendererStruct.getValue(0, 'ptr') as Renderer,
  };
}

export function createRenderer(
  this: SDL,
  options: {
    window: Window;
    name?: string | null;
  }
) {
  return this.symbols.SDL_CreateRenderer(
    options.window,
    options.name ? stringToCString(options.name).ptr : null
  ) as Renderer | null;
}

export function createRendererWithProperties(this: SDL, props: UInt32) {
  return this.symbols.SDL_CreateRendererWithProperties(
    props
  ) as Renderer | null;
}

export function createGPURenderer(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
  }
) {
  return this.symbols.SDL_CreateGPURenderer(
    options.device,
    options.window
  ) as Renderer | null;
}

export function getGPURendererDevice(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_GetGPURendererDevice(renderer) as GPUDevice | null;
}

export function createSoftwareRenderer(this: SDL, surface: Surface) {
  return this.symbols.SDL_CreateSoftwareRenderer(
    surface.$memory
  ) as Renderer | null;
}

export function getRenderer(this: SDL, window: Window) {
  return this.symbols.SDL_GetRenderer(window) as Renderer | null;
}

export function getRenderWindow(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_GetRenderWindow(renderer) as Window | null;
}

export function getRendererName(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_GetRendererName(renderer).toString();
}

export function getRendererProperties(this: SDL, renderer: Renderer) {
  return this.symbols.SDL_GetRendererProperties(renderer) as UInt32;
}

export function getRenderOutputSize(this: SDL, renderer: Renderer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderOutputSize(
    renderer,
    wStruct.$memory,
    hStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32') as Int32,
    h: hStruct.getValue(0, 'i32') as Int32,
  };
}

export function getCurrentRenderOutputSize(this: SDL, renderer: Renderer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetCurrentRenderOutputSize(
    renderer,
    wStruct.$memory,
    hStruct.$memory
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32') as Int32,
    h: hStruct.getValue(0, 'i32') as Int32,
  };
}
