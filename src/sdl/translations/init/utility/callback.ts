import { CallbackManager } from '@/sdl/utility';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { MainThreadCallbackFn } from '../types/callback';

export const MainThreadCallbackPrefix = 'main-thread:' as const;

let mainThreadCallbackCounter = 0;

export function getMainThreadCallbackKey() {
  return `${MainThreadCallbackPrefix}${mainThreadCallbackCounter++}` as const;
}

export function createMainThreadCallback(callback: MainThreadCallbackFn) {
  const cb = new JSCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_: Pointer) => {
      callback();
    },
    {
      args: [FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}

export function createMainThreadCallbackOneShot(
  callback: MainThreadCallbackFn,
  key: string
) {
  const cb = new JSCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_: Pointer) => {
      callback();
      CallbackManager.unregister(key);
    },
    {
      args: [FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}
