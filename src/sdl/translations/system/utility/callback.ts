import { CallbackManager } from '@/sdl/utility';
import { CString, FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type {
  AndroidPermissionCallbackFn,
  iOSAnimationCallbackFn,
  WindowsMessageHookCallbackFn,
  X11EventHookCallbackFn,
} from '../types/callback';

// Registry keys for persistent callbacks
export const WindowsMessageHookCallbackKey =
  'system:windows-message-hook' as const;
export const X11EventHookCallbackKey = 'system:x11-event-hook' as const;
export const iOSAnimationCallbackKeyPrefix = 'system:ios-animation:' as const;
const AndroidPermissionCallbackKeyPrefix =
  'system:android-permission:' as const;

function getAndroidPermissionCallbackKey() {
  return `${AndroidPermissionCallbackKeyPrefix}${Date.now()}:${Math.random()}` as const;
}

export function createWindowsMessageHookCallback(
  callback: WindowsMessageHookCallbackFn
) {
  const cb = new JSCallback(
    (_: Pointer, msgPtr: Pointer) => {
      return callback(msgPtr);
    },
    {
      args: [FFIType.ptr, FFIType.ptr],
      returns: FFIType.bool,
    }
  );

  return cb;
}

export function createX11EventHookCallback(callback: X11EventHookCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, xeventPtr: Pointer) => {
      return callback(xeventPtr);
    },
    {
      args: [FFIType.ptr, FFIType.ptr],
      returns: FFIType.bool,
    }
  );

  return cb;
}

export function createAndroidPermissionCallback(
  callback: AndroidPermissionCallbackFn
) {
  const key = getAndroidPermissionCallbackKey();

  const cb = new JSCallback(
    (_: Pointer, permissionPtr: Pointer, granted: boolean) => {
      const permission = new CString(permissionPtr).toString();

      callback({ permission, granted });

      // One-shot callback - unregister after invocation
      CallbackManager.unregister(key);
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.bool],
      returns: FFIType.void,
    }
  );

  CallbackManager.register(key, cb);

  return cb;
}

export function createiOSAnimationCallback(
  callback: iOSAnimationCallbackFn,
  key: string
) {
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

  CallbackManager.register(key, cb);

  return cb;
}
