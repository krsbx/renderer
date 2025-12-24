import { JSCallback, ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '..';
import type { InitFlags } from '../ffi/init/constant';

export function initTranslations(this: SDL, flags: InitFlags) {
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
    userData?: Pointer | null;
    waitComplete: boolean;
  }
) {
  return this.symbols.SDL_RunOnMainThread(
    options.callback.ptr,
    options.userData ?? null,
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
    ptr(Buffer.from(options.name, 'utf-8')),
    ptr(Buffer.from(options.version, 'utf-8')),
    ptr(Buffer.from(options.identifier, 'utf-8'))
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
    ptr(Buffer.from(options.name, 'utf-8')),
    ptr(Buffer.from(options.value, 'utf-8'))
  );
}

export function getAppMetdataProperty(this: SDL, name: string) {
  return this.symbols.SDL_GetAppMetadataProperty(
    ptr(Buffer.from(name, 'utf-8'))
  );
}
