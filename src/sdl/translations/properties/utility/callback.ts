import { CallbackManager } from '@/sdl/utility';
import type { PropertiesID } from '@/sdl/types/definition';
import { CStruct } from '@/utility/cstruct';
import { CString, FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type {
  CleanupPropertyCallbackFn,
  EnumeratePropertiesCallbackFn,
} from '../types/callback';

export const CleanupPropertyCallbackPrefix = 'properties:cleanup:' as const;

let cleanupCallbackCounter = 0;

export function getCleanupPropertyCallbackKey() {
  return `${CleanupPropertyCallbackPrefix}${cleanupCallbackCounter++}` as const;
}

export function createCleanupPropertyCallback(
  callback: CleanupPropertyCallbackFn,
  key: string
) {
  const cb = new JSCallback(
    (_: Pointer, valuePtr: Pointer) => {
      const value = new CStruct({
        address: valuePtr,
      });

      callback(value.$memory);

      CallbackManager.unregister(key);
    },
    {
      args: [FFIType.ptr, FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}

export function createEnumeratePropertiesCallback(
  callback: EnumeratePropertiesCallbackFn
) {
  const cb = new JSCallback(
    (_: Pointer, props: PropertiesID, name: Pointer) => {
      callback({
        props,
        name: new CString(name).toString(),
      });
    },
    {
      args: [FFIType.ptr, FFIType.u32, FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}
