import { JSCallback, ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '..';
import type { HintsPriority } from '../ffi/hints/constant';

export function setHintWithPriority(
  this: SDL,
  options: {
    name: string;
    value: string;
    priority: HintsPriority;
  }
) {
  return this.symbols.SDL_SetHintWithPriority(
    ptr(Buffer.from(options.name, 'utf-8')),
    ptr(Buffer.from(options.value, 'utf-8')),
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
    ptr(Buffer.from(options.name, 'utf-8')),
    ptr(Buffer.from(options.value, 'utf-8'))
  );
}

export function resetHint(this: SDL, name: string) {
  return this.symbols.SDL_ResetHint(ptr(Buffer.from(name, 'utf-8')));
}

export function resetHints(this: SDL) {
  return this.symbols.SDL_ResetHints();
}

export function getHint(this: SDL, name: string) {
  return this.symbols.SDL_GetHint(ptr(Buffer.from(name, 'utf-8')));
}

export function getHintBoolean(
  this: SDL,
  options: {
    name: string;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetHintBoolean(
    ptr(Buffer.from(options.name, 'utf-8')),
    options.defaultValue
  );
}

export function addHintCallback(
  this: SDL,
  options: {
    name: string;
    callback: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_AddHintCallback(
    ptr(Buffer.from(options.name, 'utf-8')),
    options.callback.ptr,
    options.userData ?? null
  );
}

export function removeHintCallback(
  this: SDL,
  options: {
    name: string;
    callback: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_RemoveHintCallback(
    ptr(Buffer.from(options.name, 'utf-8')),
    options.callback.ptr,
    options.userData ?? null
  );
}
