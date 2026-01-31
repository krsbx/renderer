import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import { stringToCString } from '@utility/common';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { AssertState } from '../../../ffi/assert/constant';
import { AssertData } from '../struct';
import type { AssertionHandlerFn } from './types';

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
    options.data.$address,
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
  const key = 'assert:handler';

  if (!handler) {
    CallbackManager.unregister(key);
    this.symbols.SDL_SetAssertionHandler(null, null);
    return;
  }

  const cb = new JSCallback(
    (dataPtr: Pointer) => {
      const data = new AssertData(dataPtr);

      return handler(data);
    },
    {
      args: [FFIType.ptr, FFIType.ptr],
      returns: FFIType.i32,
    }
  );

  CallbackManager.register(key, cb);
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
