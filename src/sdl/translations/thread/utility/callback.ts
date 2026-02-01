import { CallbackManager } from '@/sdl/utility';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { TLSDestructorCallbackFn } from '../types/callback';

const TLSDestructorCallbackKeyPrefix = 'tls:destructor:' as const;

export function getTLSDestructorCallbackKey(tlsId: number) {
  return `${TLSDestructorCallbackKeyPrefix}${tlsId}` as const;
}

export function createTLSDestructorCallback(
  tlsId: number,
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
  tlsId: number,
  callback: TLSDestructorCallbackFn
) {
  const key = getTLSDestructorCallbackKey(tlsId);
  const cb = createTLSDestructorCallback(tlsId, callback);

  return CallbackManager.register(key, cb);
}

export function unregisterTLSDestructorCallback(tlsId: number) {
  const key = getTLSDestructorCallbackKey(tlsId);
  return CallbackManager.unregister(key);
}
