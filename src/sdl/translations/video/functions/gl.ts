import { JSCallback, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GLAttr } from '../../../ffi/video/constant';
import { convertStringToFfi } from '../../../utility/comon';
import { Surface } from '../../surface/surface';

export function glLoadLibrary(this: BaseSDL, path: string) {
  return this.symbols.SDL_GL_LoadLibrary(convertStringToFfi(path).reference);
}

export function glGetProcAddress(this: BaseSDL, proc: string) {
  return this.symbols.SDL_GL_GetProcAddress(convertStringToFfi(proc).reference);
}

export function glUnloadLibrary(this: BaseSDL) {
  return this.symbols.SDL_GL_UnloadLibrary();
}

export function glExtensionSupported(this: BaseSDL, extension: string) {
  return this.symbols.SDL_GL_ExtensionSupported(
    convertStringToFfi(extension).reference
  );
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
  return this.symbols.SDL_GL_GetAttribute(attr);
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

export function eglGetWindowSurface(this: BaseSDL, window: Pointer) {
  const result = this.symbols.SDL_EGL_GetWindowSurface(window);

  if (!result) return null;

  return Surface.fromPointer(result, this);
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
  return this.symbols.SDL_GL_GetSwapInterval();
}

export function glSwapWindow(this: BaseSDL, window: Pointer) {
  return this.symbols.SDL_GL_SwapWindow(window);
}

export function glDestroyContext(this: BaseSDL, context: Pointer) {
  return this.symbols.SDL_GL_DestroyContext(context);
}
