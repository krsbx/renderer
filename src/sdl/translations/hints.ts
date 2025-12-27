import { JSCallback, ptr, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '..';
import type { HintsPriority } from '../ffi/hints/constant';

export function setHintWithPriority(
  this: BaseSDL,
  options: {
    name: string;
    value: string;
    priority: HintsPriority;
  }
) {
  return this.symbols.SDL_SetHintWithPriority(
    ptr(Buffer.from(options.name + '\0', 'utf-8')),
    ptr(Buffer.from(options.value + '\0', 'utf-8')),
    options.priority
  );
}

export function setHint(
  this: BaseSDL,
  options: {
    name: string;
    value: string;
  }
) {
  return this.symbols.SDL_SetHint(
    ptr(Buffer.from(options.name + '\0', 'utf-8')),
    ptr(Buffer.from(options.value + '\0', 'utf-8'))
  );
}

export function resetHint(this: BaseSDL, name: string) {
  return this.symbols.SDL_ResetHint(ptr(Buffer.from(name + '\0', 'utf-8')));
}

export function resetHints(this: BaseSDL) {
  return this.symbols.SDL_ResetHints();
}

export function getHint(this: BaseSDL, name: string) {
  return this.symbols.SDL_GetHint(ptr(Buffer.from(name + '\0', 'utf-8')));
}

export function getHintBoolean(
  this: BaseSDL,
  options: {
    name: string;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetHintBoolean(
    ptr(Buffer.from(options.name + '\0', 'utf-8')),
    options.defaultValue
  );
}

export function addHintCallback(
  this: BaseSDL,
  options: {
    name: string;
    callback: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_AddHintCallback(
    ptr(Buffer.from(options.name + '\0', 'utf-8')),
    options.callback.ptr,
    options.userData ?? null
  );
}

export function removeHintCallback(
  this: BaseSDL,
  options: {
    name: string;
    callback: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_RemoveHintCallback(
    ptr(Buffer.from(options.name + '\0', 'utf-8')),
    options.callback.ptr,
    options.userData ?? null
  );
}
