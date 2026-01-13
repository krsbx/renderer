import { CString, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { AssertState } from '../../../ffi/assert/constant';
import { AssertData } from '../utility';

export function reportAssertion(
  this: BaseSDL,
  options: {
    data: AssertData;
    func: CString;
    file: CString;
    line: number;
  }
) {
  const result = this.symbols.SDL_ReportAssertion(
    options.data.$address,
    options.func.ptr,
    options.file.ptr,
    options.line
  );

  return result as AssertState;
}

export function setAssertionHandler(
  this: BaseSDL,
  options: {
    handler: Pointer;
    userdata: Pointer;
  }
) {
  this.symbols.SDL_SetAssertionHandler(options.handler, options.userdata);
}

export function getDefaultAssertionHandler(this: BaseSDL) {
  return this.symbols.SDL_GetDefaultAssertionHandler();
}

export function getAssertionHandler(this: BaseSDL, puserdata: Pointer) {
  return this.symbols.SDL_GetAssertionHandler(puserdata);
}

export function getAssertionReport(this: BaseSDL) {
  const result = this.symbols.SDL_GetAssertionReport();

  if (!result) return null;

  return new AssertData(result);
}

export function resetAssertionReport(this: BaseSDL) {
  this.symbols.SDL_ResetAssertionReport();
}
