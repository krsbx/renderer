import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import type { X11EventHookCallbackFn } from '../types/callback';
import {
  createX11EventHookCallback,
  X11EventHookCallbackKey,
} from '../utility/callback';

export function setX11EventHook(
  this: SDL,
  callback: X11EventHookCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister(X11EventHookCallbackKey);
    this.symbols.SDL_SetX11EventHook(null, null);
    return;
  }

  const cb = createX11EventHookCallback(callback);
  CallbackManager.register(X11EventHookCallbackKey, cb);
  this.symbols.SDL_SetX11EventHook(cb.ptr, null);
}
