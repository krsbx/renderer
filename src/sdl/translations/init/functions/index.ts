import type { CString, JSCallback, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
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
    name: CString;
    version: CString;
    identifier: CString;
  }
) {
  return this.symbols.SDL_SetAppMetadata(
    options.name.ptr,
    options.version.ptr,
    options.identifier.ptr
  );
}

export function setAppMetadataProperty(
  this: SDL,
  options: {
    name: CString;
    value: CString;
  }
) {
  return this.symbols.SDL_SetAppMetadataProperty(
    options.name.ptr,
    options.value.ptr
  );
}

export function getAppMetdataProperty(this: SDL, name: CString) {
  return this.symbols.SDL_GetAppMetadataProperty(name.ptr);
}
