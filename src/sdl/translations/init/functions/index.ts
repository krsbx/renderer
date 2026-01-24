import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';
import type { JSCallback, Pointer } from 'bun:ffi';
import type { InitFlags } from '../../../ffi/init/constant';

export function init(this: SDL, flags: InitFlags) {
  return this.symbols.SDL_Init(flags);
}

export function initSubSystem(this: SDL, flags: InitFlags) {
  return this.symbols.SDL_InitSubSystem(flags);
}

export function quitSubSystem(this: SDL, flags: InitFlags) {
  this.symbols.SDL_QuitSubSystem(flags);
}

export function wasInit(this: SDL, flags: InitFlags) {
  return this.symbols.SDL_WasInit(flags);
}

export function quit(this: SDL) {
  this.symbols.SDL_Quit();
}

export function isMainThread(this: SDL) {
  return this.symbols.SDL_IsMainThread();
}

export function runOnMainThread(
  this: SDL,
  options: {
    callback: JSCallback;
    userdata?: Pointer | null;
    waitComplete: boolean;
  }
) {
  return this.symbols.SDL_RunOnMainThread(
    options.callback.ptr,
    options.userdata ?? null,
    options.waitComplete
  );
}

export function setAppMetadata(
  this: SDL,
  options: {
    name: string;
    version: string;
    identifier: string;
  }
) {
  return this.symbols.SDL_SetAppMetadata(
    stringToCString(options.name).ptr,
    stringToCString(options.version).ptr,
    stringToCString(options.identifier).ptr
  );
}

export function setAppMetadataProperty(
  this: SDL,
  options: {
    name: string;
    value: string;
  }
) {
  return this.symbols.SDL_SetAppMetadataProperty(
    stringToCString(options.name).ptr,
    stringToCString(options.value).ptr
  );
}

export function getAppMetadataProperty(this: SDL, name: string) {
  return this.symbols
    .SDL_GetAppMetadataProperty(stringToCString(name).ptr)
    .toString();
}
