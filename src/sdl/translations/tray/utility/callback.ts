import type { TrayEntry } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { TrayCallbackFn } from '../types/callback';

const TrayEntryCallbackKeyPrefix = 'tray:entry:' as const;

export function getTrayEntryCallbackKey(entry: TrayEntry) {
  return `${TrayEntryCallbackKeyPrefix}${entry}` as const;
}

export function createTrayEntryCallback(callback: TrayCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, entryPtr: Pointer) => {
      callback(entryPtr as TrayEntry);
    },
    {
      args: [FFIType.ptr, FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}

export function registerTrayEntryCallback(entry: TrayEntry, cb: JSCallback) {
  const key = getTrayEntryCallbackKey(entry);
  CallbackManager.register(key, cb);
}

export function unregisterTrayEntryCallback(entry: TrayEntry) {
  const key = getTrayEntryCallbackKey(entry);
  CallbackManager.unregister(key);
}
