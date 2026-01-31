import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import { stringToCString } from '@utility/common';
import type { HintsPriority } from '../../../ffi/hints/constant';
import type { HintCallbackFn } from '../types/callback';
import {
  createHintCallback,
  getHintCallbackRegistryKey,
} from '../utility/callback';

export function setHintWithPriority(
  this: SDL,
  options: {
    name: string;
    value: string;
    priority: HintsPriority;
  }
) {
  return this.symbols.SDL_SetHintWithPriority(
    stringToCString(options.name).ptr,
    stringToCString(options.value).ptr,
    options.priority
  );
}

export function setHint(
  this: SDL,
  options: {
    name: string;
    value: string;
  }
) {
  return this.symbols.SDL_SetHint(
    stringToCString(options.name).ptr,
    stringToCString(options.value).ptr
  );
}

export function resetHint(this: SDL, name: string) {
  return this.symbols.SDL_ResetHint(stringToCString(name).ptr);
}

export function resetHints(this: SDL) {
  this.symbols.SDL_ResetHints();
}

export function getHint(this: SDL, name: string) {
  return this.symbols.SDL_GetHint(stringToCString(name).ptr).toString();
}

export function getHintBoolean(
  this: SDL,
  options: {
    name: string;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetHintBoolean(
    stringToCString(options.name).ptr,
    options.defaultValue
  );
}

export function addHintCallback(
  this: SDL,
  options: {
    name: string;
    callback: HintCallbackFn;
  }
) {
  const key = getHintCallbackRegistryKey(options.name);
  const cb = createHintCallback(options.callback);

  const success = this.symbols.SDL_AddHintCallback(
    stringToCString(options.name).ptr,
    cb.ptr,
    null
  );

  if (!success) {
    cb.close();
  } else {
    CallbackManager.register(key, cb);
  }

  return success;
}

export function removeHintCallback(this: SDL, name: string) {
  const key = getHintCallbackRegistryKey(name);
  const cb = CallbackManager.get(key);

  if (!cb) return;

  this.symbols.SDL_RemoveHintCallback(stringToCString(name).ptr, cb.ptr, null);

  CallbackManager.unregister(key);
}
