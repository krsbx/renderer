import type { SDL } from '@/sdl';
import type { JSCallback, Pointer } from 'bun:ffi';

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
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_AddTimer(
    options.interval,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function addTimerNS(
  this: SDL,
  options: {
    interval: bigint;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_AddTimerNS(
    options.interval,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function removeTimer(this: SDL, id: number) {
  return this.symbols.SDL_RemoveTimer(id);
}
