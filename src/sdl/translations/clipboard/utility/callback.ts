import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@/utility/cstruct';
import { CString, FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type {
  ClipboardCleanupCallbackFn,
  ClipboardDataCallbackFn,
} from '../types/callback';

export const ClipboardDataPrefix = {
  data: 'clipboard:data',
  cleanup: 'clipboard:cleanup',
} as const;

let lastEncoded: Uint8Array | null = null;

export function createClipboardDataCallback(callback: ClipboardDataCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, mimeType: Pointer | null, size: Pointer) => {
      const data = callback(mimeType ? new CString(mimeType).toString() : null);

      const encoder = new TextEncoder();
      const sizeStruct = new CStruct({
        address: size,
      });

      if (!data) {
        sizeStruct.setValue(0, 0n, 'u64');
        return null;
      }

      lastEncoded = encoder.encode(data);

      sizeStruct.setValue(0, BigInt(lastEncoded.byteLength), 'u64');

      return lastEncoded;
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
      returns: FFIType.ptr,
    }
  );

  return cb;
}

export function createClipboardCleanupCallback(
  callback: ClipboardCleanupCallbackFn
) {
  const cb = new JSCallback(
    () => {
      callback();

      lastEncoded = null;
      CallbackManager.unregister(ClipboardDataPrefix.data);
      CallbackManager.unregister(ClipboardDataPrefix.cleanup);
    },
    {
      args: [FFIType.ptr],
      returns: FFIType.void,
    }
  );

  return cb;
}
