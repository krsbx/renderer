import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
import type { RawPoint } from './types';

export class Point implements RawPoint {
  public static readonly BYTE_SIZE = 8;

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

    view.setInt32(ByteOffset.x, this.x);
    view.setInt32(ByteOffset.y, this.y);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      x: read.i32(pointer, ByteOffset.x),
      y: read.i32(pointer, ByteOffset.y),
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
      x: view.getInt32(ByteOffset.x, true),
      y: view.getInt32(ByteOffset.y, true),
      free: null,
      address: null,
    } as RawPoint;

    return new Point(result);
  }
}
