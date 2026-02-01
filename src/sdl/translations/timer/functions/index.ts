import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import type { NSTimerCallbackFn, TimerCallbackFn } from '../types/callback';
import {
  createNSTimerCallback,
  createTimerCallback,
  getNSTimerCallbackKey,
  getTimerCallbackKey,
} from '../utility/callback';

export function getTicks(this: SDL) {
  return this.symbols.SDL_GetTicks();
}

export function getTicksNS(this: SDL) {
  return this.symbols.SDL_GetTicksNS();
}

export function getPerformanceCounter(this: SDL) {
  return this.symbols.SDL_GetPerformanceCounter();
}

export function getPerformanceFrequency(this: SDL) {
  return this.symbols.SDL_GetPerformanceFrequency();
}

export function delay(this: SDL, ms: number) {
  this.symbols.SDL_Delay(ms);
}

export function delayNS(this: SDL, ns: bigint) {
  this.symbols.SDL_DelayNS(ns);
}

export function delayPrecise(this: SDL, ns: bigint) {
  this.symbols.SDL_DelayPrecise(ns);
}

export function addTimer(
  this: SDL,
  options: {
    interval: number;
    callback: TimerCallbackFn;
  }
) {
  const cb = createTimerCallback(options.callback);

  const timerID = this.symbols.SDL_AddTimer(options.interval, cb.ptr, null);

  if (timerID === 0) {
    cb.close();
    return 0;
  }

  const key = getTimerCallbackKey(timerID);

  CallbackManager.register(key, cb);

  return timerID;
}

export function addTimerNS(
  this: SDL,
  options: {
    interval: bigint;
    callback: NSTimerCallbackFn;
  }
) {
  const cb = createNSTimerCallback(options.callback);

  const timerID = this.symbols.SDL_AddTimerNS(options.interval, cb.ptr, null);

  if (timerID === 0) {
    cb.close();
    return 0;
  }

  const key = getNSTimerCallbackKey(timerID);

  CallbackManager.register(key, cb);

  return timerID;
}

export function removeTimer(this: SDL, id: number) {
  const timerKey = getTimerCallbackKey(id);
  const nsTimerKey = getNSTimerCallbackKey(id);

  const success = this.symbols.SDL_RemoveTimer(id);

  if (success) {
    // Clean up callbacks for both ms and ns timers
    CallbackManager.unregister(timerKey);
    CallbackManager.unregister(nsTimerKey);
  }

  return success;
}
