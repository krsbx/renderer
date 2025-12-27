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
    const buffer = Rect.allocMemory();

    buffer[0] = this.x;
    buffer[1] = this.y;
    buffer[2] = this.w;
    buffer[3] = this.h;

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Int32Array(4);

    return buffer;
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
