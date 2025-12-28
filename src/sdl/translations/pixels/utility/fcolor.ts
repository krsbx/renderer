import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawFColor } from './types';

export class FColor implements RawFColor {
  public r: number;
  public g: number;
  public b: number;
  public a: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawFColor) {
    this.r = options.r;
    this.g = options.g;
    this.b = options.b;
    this.a = options.a;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = FColor.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.r, true);
    view.setInt32(1, this.g, true);
    view.setInt32(2, this.b, true);
    view.setInt32(3, this.a, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(4);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      r: read.i32(pointer, 0),
      g: read.i32(pointer, 1),
      b: read.i32(pointer, 2),
      a: read.i32(pointer, 3),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawFColor;

    return new FColor(result);
  }

  public static fromMemory(fcolor: Uint8Array) {
    const view = new DataView(
      fcolor.buffer,
      fcolor.byteLength,
      fcolor.byteOffset
    );

    const result = {
      r: view.getInt32(0, true),
      g: view.getInt32(1, true),
      b: view.getInt32(2, true),
      a: view.getInt32(3, true),
      free: null,
      address: null,
    } as RawFColor;

    return new FColor(result);
  }
}
