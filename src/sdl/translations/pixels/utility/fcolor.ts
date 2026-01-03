import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawFColor } from './types';

export class FColor implements RawFColor {
  public static readonly BYTE_SIZE = 16;

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

    view.setFloat32(0, this.r, true);
    view.setFloat32(4, this.g, true);
    view.setFloat32(8, this.b, true);
    view.setFloat32(12, this.a, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      r: read.f32(pointer, 0),
      g: read.f32(pointer, 4),
      b: read.f32(pointer, 8),
      a: read.f32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawFColor;

    return new FColor(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteLength, data.byteOffset);

    const result = {
      r: view.getFloat32(0, true),
      g: view.getFloat32(4, true),
      b: view.getFloat32(8, true),
      a: view.getFloat32(12, true),
      free: null,
      address: null,
    } as RawFColor;

    return new FColor(result);
  }
}
