import type { Pointer } from 'bun:ffi';
import type { Window } from '@/sdl/types/definition';
import type { HitTestResult } from '../../../ffi/video/constant';
import type { Point } from '../../rect/struct';

/**
 * Callback function used for window hit-testing.
 *
 * @param window - The window where hit-testing was set on
 * @param area - The point which should be hit-tested
 * @returns An SDL_HitTestResult value indicating how the region should behave
 */
export interface WindowHitTestCallbackFn {
  (options: { window: Window; area: Point }): HitTestResult;
}

/**
 * EGL platform attribute callback function.
 *
 * Called when SDL is attempting to create an EGL display, to let the app
 * add extra attributes to its eglGetPlatformDisplay call.
 *
 * @returns An array of EGLAttrib values (bigint), or null to use defaults.
 *          The array should NOT include EGL_NONE terminator - it will be added automatically.
 */
export interface EGLPlatformAttribCallbackFn {
  (): bigint[] | null;
}

/**
 * EGL surface/context attribute callback function.
 *
 * Called when SDL is attempting to create an EGL surface or context, to let
 * the app add extra attributes to its eglCreateWindowSurface or eglCreateContext calls.
 *
 * @param display - The EGL display to be used
 * @param config - The EGL config to be used
 * @returns An array of EGLint values (number), or null to use defaults.
 *          The array should NOT include EGL_NONE terminator - it will be added automatically.
 */
export interface EGLIntArrayCallbackFn {
  (options: { display: Pointer; config: Pointer }): number[] | null;
}
