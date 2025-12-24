import { JSCallback, ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '..';
import type { LogPriority } from '../ffi/log/constant';

export function setLogPriorities(this: SDL, priority: LogPriority) {
  this.symbols.SDL_SetLogPriority(priority);
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
    ptr(Buffer.from(options.prefix, 'utf-8'))
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

export function getLogOutputFunction(
  this: SDL,
  options: {
    callback: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_GetLogOutputFunction(
    options.callback.ptr,
    options.userData ?? null
  );
}

export function logSetOutputFunction(
  this: SDL,
  options: {
    callback: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetLogOutputFunction(
    options.callback.ptr,
    options.userData ?? null
  );
}
