import type { BaseSDL } from '@/sdl';
import type { GLContext, Window } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { GLAttr } from '../../../ffi/video/constant';
import type {
  EGLIntArrayCallbackFn,
  EGLPlatformAttribCallbackFn,
} from '../types/callback';
import {
  createEGLContextAttribCallback,
  createEGLPlatformAttribCallback,
  createEGLSurfaceAttribCallback,
  EGLContextAttribCallbackKey,
  EGLPlatformAttribCallbackKey,
  EGLSurfaceAttribCallbackKey,
} from '../utility/callback';

export function glLoadLibrary(this: BaseSDL, path: string) {
  return this.symbols.SDL_GL_LoadLibrary(stringToCString(path).ptr);
}

export function glGetProcAddress(this: BaseSDL, proc: string) {
  return this.symbols.SDL_GL_GetProcAddress(stringToCString(proc).ptr);
}

export function eglGetProcAddress(this: BaseSDL, proc: string) {
  return this.symbols.SDL_EGL_GetProcAddress(stringToCString(proc).ptr);
}

export function glUnloadLibrary(this: BaseSDL) {
  return this.symbols.SDL_GL_UnloadLibrary();
}

export function glExtensionSupported(this: BaseSDL, extension: string) {
  return this.symbols.SDL_GL_ExtensionSupported(stringToCString(extension).ptr);
}

export function glResetAttributes(this: BaseSDL) {
  // SDL resets EGL attribute callbacks, so clean up our references
  CallbackManager.unregister(EGLPlatformAttribCallbackKey);
  CallbackManager.unregister(EGLSurfaceAttribCallbackKey);
  CallbackManager.unregister(EGLContextAttribCallbackKey);

  return this.symbols.SDL_GL_ResetAttributes();
}

export function glSetAttribute(
  this: BaseSDL,
  options: {
    attr: GLAttr;
    value: number;
  }
) {
  return this.symbols.SDL_GL_SetAttribute(options.attr, options.value);
}

export function glGetAttribute(this: BaseSDL, attr: GLAttr) {
  const valueStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GL_GetAttribute(attr, valueStruct.$address);

  return success ? valueStruct.getValue(0, 'i32') : null;
}

export function glCreateContext(this: BaseSDL, window: Window) {
  return this.symbols.SDL_GL_CreateContext(window);
}

export function glMakeCurrent(
  this: BaseSDL,
  options: {
    window: Window;
    context: GLContext;
  }
) {
  return this.symbols.SDL_GL_MakeCurrent(options.window, options.context);
}

export function glGetCurrentWindow(this: BaseSDL) {
  return this.symbols.SDL_GL_GetCurrentWindow() as Window;
}

export function glGetCurrentContext(this: BaseSDL) {
  return this.symbols.SDL_GL_GetCurrentContext();
}

export function eglGetCurrentDisplay(this: BaseSDL) {
  return this.symbols.SDL_EGL_GetCurrentDisplay();
}

export function eglGetCurrentConfig(this: BaseSDL) {
  return this.symbols.SDL_EGL_GetCurrentConfig();
}

export function eglGetWindowSurface(this: BaseSDL, window: Window) {
  return this.symbols.SDL_EGL_GetWindowSurface(window);
}

export function eglSetAttributeCallbacks(
  this: BaseSDL,
  options: {
    platformAttribCallback: EGLPlatformAttribCallbackFn | null;
    surfaceAttribCallback: EGLIntArrayCallbackFn | null;
    contextAttribCallback: EGLIntArrayCallbackFn | null;
  }
) {
  // Unregister any existing callbacks
  CallbackManager.unregister(EGLPlatformAttribCallbackKey);
  CallbackManager.unregister(EGLSurfaceAttribCallbackKey);
  CallbackManager.unregister(EGLContextAttribCallbackKey);

  let platformCb = null;
  let surfaceCb = null;
  let contextCb = null;

  if (options.platformAttribCallback) {
    const cb = createEGLPlatformAttribCallback(options.platformAttribCallback);
    CallbackManager.register(EGLPlatformAttribCallbackKey, cb);
    platformCb = cb.ptr;
  }

  if (options.surfaceAttribCallback) {
    const cb = createEGLSurfaceAttribCallback(options.surfaceAttribCallback);
    CallbackManager.register(EGLSurfaceAttribCallbackKey, cb);
    surfaceCb = cb.ptr;
  }

  if (options.contextAttribCallback) {
    const cb = createEGLContextAttribCallback(options.contextAttribCallback);
    CallbackManager.register(EGLContextAttribCallbackKey, cb);
    contextCb = cb.ptr;
  }

  this.symbols.SDL_EGL_SetAttributeCallbacks(
    platformCb,
    surfaceCb,
    contextCb,
    null
  );
}

export function glSetSwapInterval(this: BaseSDL, interval: number) {
  return this.symbols.SDL_GL_SetSwapInterval(interval);
}

export function glGetSwapInterval(this: BaseSDL) {
  const intervalStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GL_GetSwapInterval(intervalStruct.$address);

  return success ? intervalStruct.getValue(0, 'i32') : null;
}

export function glSwapWindow(this: BaseSDL, window: Window) {
  return this.symbols.SDL_GL_SwapWindow(window);
}

export function glDestroyContext(this: BaseSDL, context: GLContext) {
  return this.symbols.SDL_GL_DestroyContext(context);
}
