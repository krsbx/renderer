import type { JSCallback, Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GLAttr } from '../../../ffi/video/constant';
import { stringToCString } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';

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

export function glCreateContext(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GL_CreateContext(window);
}

export function glMakeCurrent(
  this: BaseSDL,
  options: {
    window: Pointer;
    context: Pointer;
  }
) {
  return this.symbols.SDL_GL_MakeCurrent(options.window, options.context);
}

export function glGetCurrentWindow(this: BaseSDL) {
  return this.symbols.SDL_GL_GetCurrentWindow();
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

export function eglGetWindowSurface(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_EGL_GetWindowSurface(window);
}

export function eglSetAttributeCallbacks(
  this: BaseSDL,
  options: {
    platformAttribCallback: JSCallback;
    surfaceAttribCallback: JSCallback;
    contextAttribCallback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_EGL_SetAttributeCallbacks(
    options.platformAttribCallback.ptr,
    options.surfaceAttribCallback.ptr,
    options.contextAttribCallback.ptr,
    options.userdata ?? null
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

export function glSwapWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GL_SwapWindow(window);
}

export function glDestroyContext(this: BaseSDL, context: Pointer) {
  return this.symbols.SDL_GL_DestroyContext(context);
}
