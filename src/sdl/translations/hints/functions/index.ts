import type { JSCallback, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { HintsPriority } from '../../../ffi/hints/constant';
import { stringToCString } from '../../../utility/common';

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
  return this.symbols.SDL_GetHint(stringToCString(name).ptr);
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
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_AddHintCallback(
    stringToCString(options.name).ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function removeHintCallback(
  this: SDL,
  options: {
    name: string;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_RemoveHintCallback(
    stringToCString(options.name).ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}
