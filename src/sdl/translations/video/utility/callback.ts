import type { EGLConfig, EGLDisplay, Window } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import { FFIType, JSCallback, ptr, type Pointer } from 'bun:ffi';
import { Point } from '../../rect/struct';
import type {
  EGLIntArrayCallbackFn,
  EGLPlatformAttribCallbackFn,
  WindowHitTestCallbackFn,
} from '../types/callback';

const WindowHitTestCallbackKeyPrefix = 'video:window-hit-test:' as const;
const EGL_NONE = 0x3038;

// EGL callback registry keys
export const EGLPlatformAttribCallbackKey =
  'video:egl-platform-attrib' as const;
export const EGLSurfaceAttribCallbackKey = 'video:egl-surface-attrib' as const;
export const EGLContextAttribCallbackKey = 'video:egl-context-attrib' as const;

// Static buffers for EGL callbacks (reused across calls)
// These are kept alive to prevent GC and allow SDL to read from them
// Note: SDL expects to free these with SDL_free, but since we're using
// static buffers, the free will be a no-op or handled gracefully
let eglPlatformAttribBuffer: BigInt64Array | null = null;
let eglSurfaceAttribBuffer: Int32Array | null = null;
let eglContextAttribBuffer: Int32Array | null = null;

export function getWindowHitTestCallbackKey(window: Window) {
  return `${WindowHitTestCallbackKeyPrefix}${window}` as const;
}

export function createWindowHitTestCallback(callback: WindowHitTestCallbackFn) {
  const cb = new JSCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (windowPtr: Pointer, areaPtr: Pointer, _: Pointer) => {
      const window = windowPtr as Window;
      const area = new Point(areaPtr);

      return callback({
        window,
        area,
      });
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
      returns: FFIType.i32,
    }
  );

  return cb;
}

export function registerWindowHitTestCallback(window: Window, cb: JSCallback) {
  const key = getWindowHitTestCallbackKey(window);
  CallbackManager.register(key, cb);
}

export function unregisterWindowHitTestCallback(window: Window) {
  const key = getWindowHitTestCallbackKey(window);
  CallbackManager.unregister(key);
}

export function createEGLPlatformAttribCallback(
  callback: EGLPlatformAttribCallbackFn
) {
  const cb = new JSCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_: Pointer) => {
      const result = callback();

      if (!result || result.length === 0) {
        return null;
      }

      // Allocate buffer with space for result + EGL_NONE terminator
      eglPlatformAttribBuffer = new BigInt64Array(result.length + 1);

      for (let i = 0; i < result.length; i++) {
        eglPlatformAttribBuffer[i] = result[i]!;
      }

      eglPlatformAttribBuffer[result.length] = BigInt(EGL_NONE);

      return ptr(eglPlatformAttribBuffer);
    },
    {
      args: [FFIType.ptr],
      returns: FFIType.ptr,
    }
  );

  return cb;
}

export function createEGLIntArrayCallback(callback: EGLIntArrayCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, display: Pointer, config: Pointer) => {
      const result = callback({ display, config });

      if (!result || result.length === 0) {
        return null;
      }

      // Return a new buffer each time (previous one may still be in use)
      const buffer = new Int32Array(result.length + 1);

      for (let i = 0; i < result.length; i++) {
        buffer[i] = result[i]!;
      }

      buffer[result.length] = EGL_NONE;

      return ptr(buffer);
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
      returns: FFIType.ptr,
    }
  );

  return cb;
}

export function createEGLSurfaceAttribCallback(
  callback: EGLIntArrayCallbackFn
) {
  const cb = new JSCallback(
    (_: Pointer, display: Pointer, config: Pointer) => {
      const result = callback({ display, config });

      if (!result || result.length === 0) {
        return null;
      }

      // Allocate buffer with space for result + EGL_NONE terminator
      eglSurfaceAttribBuffer = new Int32Array(result.length + 1);

      for (let i = 0; i < result.length; i++) {
        eglSurfaceAttribBuffer[i] = result[i]!;
      }

      eglSurfaceAttribBuffer[result.length] = EGL_NONE;

      return ptr(eglSurfaceAttribBuffer);
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
      returns: FFIType.ptr,
    }
  );

  return cb;
}

export function createEGLContextAttribCallback(
  callback: EGLIntArrayCallbackFn
) {
  const cb = new JSCallback(
    (_: Pointer, display: EGLDisplay, config: EGLConfig) => {
      const result = callback({ display, config });

      if (!result || result.length === 0) {
        return null;
      }

      // Allocate buffer with space for result + EGL_NONE terminator
      eglContextAttribBuffer = new Int32Array(result.length + 1);

      for (let i = 0; i < result.length; i++) {
        eglContextAttribBuffer[i] = result[i]!;
      }

      eglContextAttribBuffer[result.length] = EGL_NONE;

      return ptr(eglContextAttribBuffer);
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
      returns: FFIType.ptr,
    }
  );

  return cb;
}
