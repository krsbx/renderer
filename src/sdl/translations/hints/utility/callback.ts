import { CString, FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { HintCallbackFn } from '../types/callback';

export const HintCallbackPrefix = 'hint:' as const;

export function getHintCallbackRegistryKey(name: string) {
  return `${HintCallbackPrefix}${name}` as const;
}

export function createHintCallback(callback: HintCallbackFn) {
  const cb = new JSCallback(
    (
      _: Pointer,
      namePtr: Pointer,
      oldValuePtr: Pointer,
      newValuePtr: Pointer
    ) => {
      callback({
        name: new CString(namePtr).toString(),
        oldValue: new CString(oldValuePtr).toString(),
        newValue: new CString(newValuePtr).toString(),
      });
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}
