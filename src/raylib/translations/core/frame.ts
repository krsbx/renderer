import type { RayLib } from '@/raylib';

export function swapScreenBuffer(this: RayLib) {
  this.symbols.SwapScreenBuffer();
}

export function pollInputEvents(this: RayLib) {
  this.symbols.PollInputEvents();
}

export function waitTime(this: RayLib, seconds: number) {
  this.symbols.WaitTime(seconds);
}
