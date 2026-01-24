import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import type { AssertState } from '../../../ffi/assert/constant';
import { AssertData } from '../utility';

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
  options: {
    handler: Pointer;
    userdata: Pointer;
  }
) {
  this.symbols.SDL_SetAssertionHandler(options.handler, options.userdata);
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
