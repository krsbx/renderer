import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../..';
import type { RawRect } from './types';

export class Rect implements RawRect {
  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawRect) {
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    return new Int32Array([this.x, this.y, this.w, this.h]);
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      x: read.i32(pointer, 0),
      y: read.i32(pointer, 4),
      w: read.i32(pointer, 8),
      h: read.i32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawRect;

    return new Rect(result);
  }

  public static fromMemory(rect: Int32Array) {
    const result = {
      x: rect[0],
      y: rect[1],
      w: rect[2],
      h: rect[3],
      free: null,
      address: null,
    } as RawRect;

    return new Rect(result);
  }
}
