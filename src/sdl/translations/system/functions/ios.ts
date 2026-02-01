import type { SDL } from '@/sdl';
import type { Window } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import type { iOSAnimationCallbackFn } from '../types/callback';
import {
  createiOSAnimationCallback,
  iOSAnimationCallbackKeyPrefix,
} from '../utility/callback';

export function setiOSAnimationCallback(
  this: SDL,
  options: {
    window: Window;
    interval: number;
    callback: iOSAnimationCallbackFn | null;
  }
) {
  const key = `${iOSAnimationCallbackKeyPrefix}${options.window}`;

  if (!options.callback) {
    CallbackManager.unregister(key);
    return this.symbols.SDL_SetiOSAnimationCallback(
      options.window,
      options.interval,
      null,
      null
    );
  }

  const cb = createiOSAnimationCallback(options.callback, key);

  return this.symbols.SDL_SetiOSAnimationCallback(
    options.window,
    options.interval,
    cb.ptr,
    null
  );
}

export function setiOSEventPump(this: SDL, enabled: boolean) {
  this.symbols.SDL_SetiOSEventPump(enabled);
}

export function onApplicationWillTerminate(this: SDL) {
  this.symbols.SDL_OnApplicationWillTerminate();
}

export function onApplicationDidReceiveMemoryWarning(this: SDL) {
  this.symbols.SDL_OnApplicationDidReceiveMemoryWarning();
}

export function onApplicationWillEnterBackground(this: SDL) {
  this.symbols.SDL_OnApplicationWillEnterBackground();
}

export function onApplicationDidEnterBackground(this: SDL) {
  this.symbols.SDL_OnApplicationDidEnterBackground();
}

export function onApplicationWillEnterForeground(this: SDL) {
  this.symbols.SDL_OnApplicationWillEnterForeground();
}

export function onApplicationDidEnterForeground(this: SDL) {
  this.symbols.SDL_OnApplicationDidEnterForeground();
}

export function onApplicationDidChangeStatusBarOrientation(this: SDL) {
  this.symbols.SDL_OnApplicationDidChangeStatusBarOrientation();
}
