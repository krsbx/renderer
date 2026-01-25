import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';

export function takeScreenshot(this: RayLib) {
  this.symbols.TakeScreenshot();
}

export function setConfigFlags(this: RayLib, flags: number) {
  this.symbols.SetConfigFlags(flags);
}

export function openURL(this: RayLib, url: string) {
  this.symbols.OpenURL(stringToCString(url).ptr);
}
