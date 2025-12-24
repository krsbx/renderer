import { JSCallback, ptr, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '..';
import type { LogPriority } from '../ffi/log/constant';

export function setLogPriorities(this: BaseSDL, priority: LogPriority) {
  this.symbols.SDL_SetLogPriority(priority);
}

export function setLogPriority(
  this: BaseSDL,
  options: {
    category: number;
    priority: LogPriority;
  }
) {
  return this.symbols.SDL_SetLogPriority(options.category, options.priority);
}

export function getLogPriority(this: BaseSDL, category: number) {
  return this.symbols.SDL_GetLogPriority(category) as LogPriority;
}

export function resetLogPriorities(this: BaseSDL) {
  this.symbols.SDL_ResetLogPriorities();
}

export function setLogPriorityPrefix(
  this: BaseSDL,
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

export function log(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logTrace(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logVerbose(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logDebug(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logInfo(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logWarn(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logError(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logCritical(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logMessage(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function logMessageV(this: BaseSDL) {
  throw new Error('Not implemented');
}

export function getDefaultLogOutputFunction(this: BaseSDL) {
  return this.symbols.SDL_GetDefaultLogOutputFunction();
}

export function getLogOutputFunction(
  this: BaseSDL,
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
  this: BaseSDL,
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
