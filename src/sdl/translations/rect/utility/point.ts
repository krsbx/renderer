import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawPoint } from './types';

export class Point implements RawPoint {
  public x: number;
  public y: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawPoint) {
    this.x = options.x;
    this.y = options.y;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = Point.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.x);
    view.setInt32(4, this.y);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(8);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      x: read.i32(pointer, 0),
      y: read.i32(pointer, 4),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPoint;

    return new Point(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      x: view.getInt32(0, true),
      y: view.getInt32(4, true),
      free: null,
      address: null,
    } as RawPoint;

    return new Point(result);
  }
}
