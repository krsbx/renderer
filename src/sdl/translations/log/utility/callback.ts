import type { LogPriority } from '@/sdl/ffi/log/constant';
import { CString, FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { LogOutputFunctionFn } from '../types/callback';

export const LogOutputCallbackRegistryKey = 'log:output' as const;

export function createLogOutputCallback(callback: LogOutputFunctionFn) {
  const cb = new JSCallback(
    (_: Pointer, category: number, priority: LogPriority, message: Pointer) => {
      callback({
        category,
        priority,
        message: new CString(message).toString(),
      });
    },
    {
      args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}
