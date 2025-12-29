import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawFPoint } from './types';

export class FPoint implements RawFPoint {
  public x: number;
  public y: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawFPoint) {
    this.x = options.x;
    this.y = options.y;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = FPoint.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setFloat32(0, this.x);
    view.setFloat32(4, this.y);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(8);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      x: read.f32(pointer, 0),
      y: read.f32(pointer, 4),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawFPoint;

    return new FPoint(result);
  }

  public static fromMemory(fpoint: Uint8Array) {
    const view = new DataView(
      fpoint.buffer,
      fpoint.byteOffset,
      fpoint.byteLength
    );

    const result = {
      x: view.getFloat32(0, true),
      y: view.getFloat32(4, true),
      free: null,
      address: null,
    } as RawFPoint;

    return new FPoint(result);
  }
}
