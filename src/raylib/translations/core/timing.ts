import type { RayLib } from '@/raylib';

export function setTargetFps(this: RayLib, fps: number) {
  this.symbols.SetTargetFPS(fps);
}

export function getFrameTime(this: RayLib) {
  return this.symbols.GetFrameTime();
}

export function getTime(this: RayLib) {
  return this.symbols.GetTime();
}

export function getFps(this: RayLib) {
  return this.symbols.GetFPS();
}
