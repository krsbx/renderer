import type { SDL } from '@/sdl';
import type { Int32 } from '@/types/primitive';
import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import type { LogPriority } from '../../../ffi/log/constant';
import type { LogOutputFunctionFn } from '../types/callback';
import {
  createLogOutputCallback,
  LogOutputCallbackRegistryKey,
} from '../utility/callback';

export function setLogPriorities(this: SDL, priority: LogPriority) {
  this.symbols.SDL_SetLogPriorities(priority);
}

export function setLogPriority(
  this: SDL,
  options: {
    category: Int32;
    priority: LogPriority;
  }
) {
  return this.symbols.SDL_SetLogPriority(options.category, options.priority);
}

export function getLogPriority(this: SDL, category: Int32) {
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

/**
 * Log a message with SDL_LOG_CATEGORY_APPLICATION and SDL_LOG_PRIORITY_INFO.
 * Use JavaScript template literals for formatting: `Player ${name} scored ${score}`
 */
export function log(this: SDL, message: string) {
  this.symbols.SDL_Log(stringToCString(message).ptr);
}

/**
 * Log a message with SDL_LOG_PRIORITY_TRACE.
 * Use JavaScript template literals for formatting.
 */
export function logTrace(
  this: SDL,
  options: {
    category: Int32;
    message: string;
  }
) {
  this.symbols.SDL_LogTrace(
    options.category,
    stringToCString(options.message).ptr
  );
}

/**
 * Log a message with SDL_LOG_PRIORITY_VERBOSE.
 * Use JavaScript template literals for formatting.
 */
export function logVerbose(
  this: SDL,
  options: {
    category: Int32;
    message: string;
  }
) {
  this.symbols.SDL_LogVerbose(
    options.category,
    stringToCString(options.message).ptr
  );
}

/**
 * Log a message with SDL_LOG_PRIORITY_DEBUG.
 * Use JavaScript template literals for formatting.
 */
export function logDebug(
  this: SDL,
  options: {
    category: Int32;
    message: string;
  }
) {
  this.symbols.SDL_LogDebug(
    options.category,
    stringToCString(options.message).ptr
  );
}

/**
 * Log a message with SDL_LOG_PRIORITY_INFO.
 * Use JavaScript template literals for formatting.
 */
export function logInfo(
  this: SDL,
  options: {
    category: Int32;
    message: string;
  }
) {
  this.symbols.SDL_LogInfo(
    options.category,
    stringToCString(options.message).ptr
  );
}

/**
 * Log a message with SDL_LOG_PRIORITY_WARN.
 * Use JavaScript template literals for formatting.
 */
export function logWarn(
  this: SDL,
  options: {
    category: Int32;
    message: string;
  }
) {
  this.symbols.SDL_LogWarn(
    options.category,
    stringToCString(options.message).ptr
  );
}

/**
 * Log a message with SDL_LOG_PRIORITY_ERROR.
 * Use JavaScript template literals for formatting.
 */
export function logError(
  this: SDL,
  options: {
    category: Int32;
    message: string;
  }
) {
  this.symbols.SDL_LogError(
    options.category,
    stringToCString(options.message).ptr
  );
}

/**
 * Log a message with SDL_LOG_PRIORITY_CRITICAL.
 * Use JavaScript template literals for formatting.
 */
export function logCritical(
  this: SDL,
  options: {
    category: Int32;
    message: string;
  }
) {
  this.symbols.SDL_LogCritical(
    options.category,
    stringToCString(options.message).ptr
  );
}

/**
 * Log a message with the specified category and priority.
 * Use JavaScript template literals for formatting.
 */
export function logMessage(
  this: SDL,
  options: {
    category: Int32;
    priority: LogPriority;
    message: string;
  }
) {
  this.symbols.SDL_LogMessage(
    options.category,
    options.priority,
    stringToCString(options.message).ptr
  );
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
    callbackStruct.$memory,
    userdataStruct.$memory
  );

  return {
    callback: Number(callbackStruct.getValue(0, 'ptr')) as Pointer,
    userdata: Number(userdataStruct.getValue(0, 'ptr')) as Pointer,
  };
}

export function setLogOutputFunction(
  this: SDL,
  callback: LogOutputFunctionFn | null
) {
  if (!callback) {
    // Reset to default log output function
    CallbackManager.unregister(LogOutputCallbackRegistryKey);
    this.symbols.SDL_SetLogOutputFunction(null, null);
    return;
  }

  const cb = createLogOutputCallback(callback);

  // Register callback to prevent GC
  CallbackManager.register(LogOutputCallbackRegistryKey, cb);

  this.symbols.SDL_SetLogOutputFunction(cb.ptr, null);
}
