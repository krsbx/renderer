import type { CString, JSCallback, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { HintsPriority } from '../../../ffi/hints/constant';

export function setHintWithPriority(
  this: SDL,
  options: {
    name: CString;
    value: CString;
    priority: HintsPriority;
  }
) {
  return this.symbols.SDL_SetHintWithPriority(
    options.name.ptr,
    options.value.ptr,
    options.priority
  );
}

export function setHint(
  this: SDL,
  options: {
    name: CString;
    value: CString;
  }
) {
  return this.symbols.SDL_SetHint(options.name.ptr, options.value.ptr);
}

export function resetHint(this: SDL, name: CString) {
  return this.symbols.SDL_ResetHint(name.ptr);
}

export function resetHints(this: SDL) {
  this.symbols.SDL_ResetHints();
}

export function getHint(this: SDL, name: CString) {
  return this.symbols.SDL_GetHint(name.ptr);
}

export function getHintBoolean(
  this: SDL,
  options: {
    name: CString;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetHintBoolean(
    options.name.ptr,
    options.defaultValue
  );
}

export function addHintCallback(
  this: SDL,
  options: {
    name: CString;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_AddHintCallback(
    options.name.ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function removeHintCallback(
  this: SDL,
  options: {
    name: CString;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_RemoveHintCallback(
    options.name.ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}
