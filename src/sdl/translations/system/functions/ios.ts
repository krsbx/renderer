import type { SDL } from '@/sdl';
import type { JSCallback, Pointer } from 'bun:ffi';

export function setiOSAnimationCallback(
  this: SDL,
  options: {
    window: Pointer;
    interval: number;
    callback: JSCallback;
    callbackParam?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetiOSAnimationCallback(
    options.window,
    options.interval,
    options.callback.ptr,
    options.callbackParam ?? null
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
