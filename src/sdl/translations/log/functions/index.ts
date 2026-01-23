import type { JSCallback, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { LogPriority } from '../../../ffi/log/constant';
import { stringToCString } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';

export function setLogPriorities(this: SDL, priority: LogPriority) {
  this.symbols.SDL_SetLogPriorities(priority);
}

export function setLogPriority(
  this: SDL,
  options: {
    category: number;
    priority: LogPriority;
  }
) {
  return this.symbols.SDL_SetLogPriority(options.category, options.priority);
}

export function getLogPriority(this: SDL, category: number) {
  return this.symbols.SDL_GetLogPriority(category) as LogPriority;
}

export function resetLogPriorities(this: SDL) {
  this.symbols.SDL_ResetLogPriorities();
}

export function setLogPriorityPrefix(
  this: SDL,
  options: {
    priority: LogPriority;
    prefix: string;
  }
) {
  return this.symbols.SDL_SetLogPriorityPrefix(
    options.priority,
    stringToCString(options.prefix).ptr
  );
}

export function log(this: SDL) {
  throw new Error('Not implemented');
}

export function logTrace(this: SDL) {
  throw new Error('Not implemented');
}

export function logVerbose(this: SDL) {
  throw new Error('Not implemented');
}

export function logDebug(this: SDL) {
  throw new Error('Not implemented');
}

export function logInfo(this: SDL) {
  throw new Error('Not implemented');
}

export function logWarn(this: SDL) {
  throw new Error('Not implemented');
}

export function logError(this: SDL) {
  throw new Error('Not implemented');
}

export function logCritical(this: SDL) {
  throw new Error('Not implemented');
}

export function logMessage(this: SDL) {
  throw new Error('Not implemented');
}

export function logMessageV(this: SDL) {
  throw new Error('Not implemented');
}

export function getDefaultLogOutputFunction(this: SDL) {
  return this.symbols.SDL_GetDefaultLogOutputFunction();
}

export function getLogOutputFunction(this: SDL) {
  const callbackStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const userdataStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  this.symbols.SDL_GetLogOutputFunction(
    callbackStruct.$address,
    userdataStruct.$address
  );

  return {
    callback: Number(callbackStruct.getValue(0, 'ptr')) as Pointer,
    userdata: Number(userdataStruct.getValue(0, 'ptr')) as Pointer,
  };
}

export function setLogOutputFunction(
  this: SDL,
  options: {
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_SetLogOutputFunction(
    options.callback.ptr,
    options.userdata ?? null
  );
}
