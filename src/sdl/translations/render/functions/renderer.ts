import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import type { WindowFlags } from '../../../ffi/video/constant';
import { Surface } from '../../surface/utility';

export function createWindowAndRenderer(
  this: SDL,
  options: {
    title: string;
    width: number;
    height: number;
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
    windowStruct.$address,
    rendererStruct.$address
  );

  if (!success) return null;

  return {
    window: windowStruct.getValue(0, 'ptr'),
    renderer: rendererStruct.getValue(0, 'ptr'),
  };
}

export function createRenderer(
  this: SDL,
  options: {
    window: Pointer;
    name?: string | null;
  }
) {
  return this.symbols.SDL_CreateRenderer(
    options.window,
    options.name ? stringToCString(options.name).ptr : null
  );
}

export function createRendererWithProperties(this: SDL, props: number) {
  return this.symbols.SDL_CreateRendererWithProperties(props);
}

export function createGPURenderer(
  this: SDL,
  options: {
    device: Pointer;
    window: Pointer;
  }
) {
  return this.symbols.SDL_CreateGPURenderer(options.device, options.window);
}

export function getGPURendererDevice(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_GetGPURendererDevice(renderer);
}

export function createSoftwareRenderer(this: SDL, surface: Surface) {
  return this.symbols.SDL_CreateSoftwareRenderer(surface.$address);
}

export function getRenderer(this: SDL, window: Pointer) {
  return this.symbols.SDL_GetRenderer(window);
}

export function getRenderWindow(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_GetRenderWindow(renderer);
}

export function getRendererName(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_GetRendererName(renderer).toString();
}

export function getRendererProperties(this: SDL, renderer: Pointer) {
  return this.symbols.SDL_GetRendererProperties(renderer);
}

export function getRenderOutputSize(this: SDL, renderer: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderOutputSize(
    renderer,
    wStruct.$address,
    hStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32'),
    h: hStruct.getValue(0, 'i32'),
  };
}

export function getCurrentRenderOutputSize(this: SDL, renderer: Pointer) {
  const wStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const hStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetCurrentRenderOutputSize(
    renderer,
    wStruct.$address,
    hStruct.$address
  );

  if (!success) return null;

  return {
    w: wStruct.getValue(0, 'i32'),
    h: hStruct.getValue(0, 'i32'),
  };
}
