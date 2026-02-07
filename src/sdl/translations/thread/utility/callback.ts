import { CallbackManager } from '@/sdl/utility';
import type { Int32 } from '@/types/primitive';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { TLSDestructorCallbackFn } from '../types/callback';

const TLSDestructorCallbackKeyPrefix = 'tls:destructor:' as const;

export function getTLSDestructorCallbackKey(tlsId: Int32) {
  return `${TLSDestructorCallbackKeyPrefix}${tlsId}` as const;
}

export function createTLSDestructorCallback(
  tlsId: Int32,
  callback: TLSDestructorCallbackFn
) {
  const cb = new JSCallback(
    (value: Pointer) => {
      callback(value);
      // Unregister after destructor is called (one-time cleanup)
      unregisterTLSDestructorCallback(tlsId);
    },
    {
      args: [FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}

export function registerTLSDestructorCallback(
  tlsId: Int32,
  callback: TLSDestructorCallbackFn
) {
  const key = getTLSDestructorCallbackKey(tlsId);
  const cb = createTLSDestructorCallback(tlsId, callback);

  return CallbackManager.register(key, cb);
}

export function unregisterTLSDestructorCallback(tlsId: Int32) {
  const key = getTLSDestructorCallbackKey(tlsId);
  return CallbackManager.unregister(key);
}
