import { JSCallback, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '..';
import type { InitFlags } from '../ffi/init/constant';
import { convertStringToFfi } from '../utility/common';

export function initTranslations(this: BaseSDL, flags: InitFlags) {
  return this.symbols.SDL_Init(flags);
}

export function initSubSystem(this: BaseSDL, flags: InitFlags) {
  return this.symbols.SDL_InitSubSystem(flags);
}

export function quitSubSystem(this: BaseSDL, flags: InitFlags) {
  this.symbols.SDL_QuitSubSystem(flags);
}

export function wasInit(this: BaseSDL, flags: InitFlags) {
  return this.symbols.SDL_WasInit(flags);
}

export function quit(this: BaseSDL) {
  this.symbols.SDL_Quit();
}

export function isMainThread(this: BaseSDL) {
  return this.symbols.SDL_IsMainThread();
}

export function runOnMainThread(
  this: BaseSDL,
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
  this: BaseSDL,
  options: {
    name: string;
    version: string;
    identifier: string;
  }
) {
  return this.symbols.SDL_SetAppMetadata(
    convertStringToFfi(options.name).reference,
    convertStringToFfi(options.version).reference,
    convertStringToFfi(options.identifier).reference
  );
}

export function setAppMetadataProperty(
  this: BaseSDL,
  options: {
    name: string;
    value: string;
  }
) {
  return this.symbols.SDL_SetAppMetadataProperty(
    convertStringToFfi(options.name).reference,
    convertStringToFfi(options.value).reference
  );
}

export function getAppMetdataProperty(this: BaseSDL, name: string) {
  return this.symbols.SDL_GetAppMetadataProperty(
    convertStringToFfi(name).reference
  );
}
