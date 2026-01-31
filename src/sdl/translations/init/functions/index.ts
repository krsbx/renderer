import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import { stringToCString } from '@utility/common';
import type { InitFlags } from '../../../ffi/init/constant';
import type { MainThreadCallbackFn } from '../types/callback';
import {
  createMainThreadCallback,
  createMainThreadCallbackOneShot,
  getMainThreadCallbackKey,
} from '../utility/callback';

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
    callback: MainThreadCallbackFn;
    waitComplete: boolean;
  }
) {
  if (options.waitComplete) {
    // Synchronous - callback runs immediately, no GC risk
    const cb = createMainThreadCallback(options.callback);
    const result = this.symbols.SDL_RunOnMainThread(cb.ptr, null, true);
    cb.close();
    return result;
  }

  // Async - use one-shot wrapper to prevent GC and auto-cleanup
  const key = getMainThreadCallbackKey();
  const cb = createMainThreadCallbackOneShot(options.callback, key);
  CallbackManager.register(key, cb);
  return this.symbols.SDL_RunOnMainThread(cb.ptr, null, false);
}

export function setAppMetadata(
  this: SDL,
  options: {
    name?: string | null;
    version?: string | null;
    identifier?: string | null;
  }
) {
  return this.symbols.SDL_SetAppMetadata(
    options.name ? stringToCString(options.name).ptr : null,
    options.version ? stringToCString(options.version).ptr : null,
    options.identifier ? stringToCString(options.identifier).ptr : null
  );
}

export function setAppMetadataProperty(
  this: SDL,
  options: {
    name: string;
    value: string | null;
  }
) {
  return this.symbols.SDL_SetAppMetadataProperty(
    stringToCString(options.name).ptr,
    options.value ? stringToCString(options.value).ptr : null
  );
}

export function getAppMetadataProperty(this: SDL, name: string) {
  return this.symbols
    .SDL_GetAppMetadataProperty(stringToCString(name).ptr)
    .toString();
}
