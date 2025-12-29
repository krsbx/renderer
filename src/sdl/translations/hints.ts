import { JSCallback, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '..';
import type { HintsPriority } from '../ffi/hints/constant';
import { convertStringToFfi } from '../utility/comon';

export function setHintWithPriority(
  this: BaseSDL,
  options: {
    name: string;
    value: string;
    priority: HintsPriority;
  }
) {
  return this.symbols.SDL_SetHintWithPriority(
    convertStringToFfi(options.name).reference,
    convertStringToFfi(options.value).reference,
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
    convertStringToFfi(options.name).reference,
    convertStringToFfi(options.value).reference
  );
}

export function resetHint(this: BaseSDL, name: string) {
  return this.symbols.SDL_ResetHint(convertStringToFfi(name).reference);
}

export function resetHints(this: BaseSDL) {
  return this.symbols.SDL_ResetHints();
}

export function getHint(this: BaseSDL, name: string) {
  return this.symbols.SDL_GetHint(convertStringToFfi(name).reference);
}

export function getHintBoolean(
  this: BaseSDL,
  options: {
    name: string;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetHintBoolean(
    convertStringToFfi(options.name).reference,
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
    convertStringToFfi(options.name).reference,
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
    convertStringToFfi(options.name).reference,
    options.callback.ptr,
    options.userData ?? null
  );
}
