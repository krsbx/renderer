import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../..';
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
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.x);
    view.setInt32(4, this.y);
    view.setInt32(8, this.w);
    view.setInt32(12, this.h);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

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

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      x: view.getInt32(0, true),
      y: view.getInt32(4, true),
      w: view.getInt32(8, true),
      h: view.getInt32(12, true),
      free: null,
      address: null,
    } as RawRect;

    return new Rect(result);
  }
}
