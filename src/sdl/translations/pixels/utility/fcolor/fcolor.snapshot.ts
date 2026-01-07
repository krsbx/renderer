import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
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

    view.setFloat32(ByteOffset.r, this.r, true);
    view.setFloat32(ByteOffset.g, this.g, true);
    view.setFloat32(ByteOffset.b, this.b, true);
    view.setFloat32(ByteOffset.a, this.a, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      r: read.f32(pointer, ByteOffset.r),
      g: read.f32(pointer, ByteOffset.g),
      b: read.f32(pointer, ByteOffset.b),
      a: read.f32(pointer, ByteOffset.a),
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
      r: view.getFloat32(ByteOffset.r, true),
      g: view.getFloat32(ByteOffset.g, true),
      b: view.getFloat32(ByteOffset.b, true),
      a: view.getFloat32(ByteOffset.a, true),
      free: null,
      address: null,
    } as RawFColor;

    return new FColor(result);
  }
}
