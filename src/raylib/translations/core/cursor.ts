import type { RayLib } from '@/raylib';

export function showCursor(this: RayLib) {
  this.symbols.ShowCursor();
}

export function hideCursor(this: RayLib) {
  this.symbols.HideCursor();
}

export function isCursorHidden(this: RayLib) {
  return this.symbols.IsCursorHidden();
}

export function enableCursor(this: RayLib) {
  this.symbols.EnableCursor();
}

export function disableCursor(this: RayLib) {
  this.symbols.DisableCursor();
}

export function isCursorOnScreen(this: RayLib) {
  return this.symbols.IsCursorOnScreen();
}
