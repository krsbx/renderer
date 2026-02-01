import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import type { AssertState } from '@sdl/ffi/constant/assert';
import { stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import { AssertData } from '../struct';
import type { AssertionHandlerFn } from '../types/callback';
import {
  AssertionHandlerRegisterKey,
  createAssertionHandler,
} from '../utility/callback';

export function reportAssertion(
  this: SDL,
  options: {
    data: AssertData;
    func: string;
    file: string;
    line: number;
  }
) {
  const result = this.symbols.SDL_ReportAssertion(
    options.data.$memory,
    stringToCString(options.func).ptr,
    stringToCString(options.file).ptr,
    options.line
  );

  return result as AssertState;
}

export function setAssertionHandler(
  this: SDL,
  handler: AssertionHandlerFn | null
) {
  if (!handler) {
    CallbackManager.unregister(AssertionHandlerRegisterKey);
    this.symbols.SDL_SetAssertionHandler(null, null);
    return;
  }

  const cb = createAssertionHandler(handler);

  CallbackManager.register(AssertionHandlerRegisterKey, cb);
  this.symbols.SDL_SetAssertionHandler(cb.ptr, null);
}

export function getDefaultAssertionHandler(this: SDL) {
  return this.symbols.SDL_GetDefaultAssertionHandler();
}

export function getAssertionHandler(this: SDL, puserdata: Pointer) {
  return this.symbols.SDL_GetAssertionHandler(puserdata);
}

export function getAssertionReport(this: SDL) {
  const result = this.symbols.SDL_GetAssertionReport();

  if (!result) return null;

  return new AssertData(result);
}

export function resetAssertionReport(this: SDL) {
  this.symbols.SDL_ResetAssertionReport();
}
