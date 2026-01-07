import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
import type { RawColor } from './types';

export class Color implements RawColor {
  public static readonly BYTE_SIZE = 4;

  public r: number;
  public g: number;
  public b: number;
  public a: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawColor) {
    this.r = options.r;
    this.g = options.g;
    this.b = options.b;
    this.a = options.a;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = Color.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt8(ByteOffset.r, this.r);
    view.setInt8(ByteOffset.g, this.g);
    view.setInt8(ByteOffset.b, this.b);
    view.setInt8(ByteOffset.a, this.a);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      r: read.i8(pointer, ByteOffset.r),
      g: read.i8(pointer, ByteOffset.g),
      b: read.i8(pointer, ByteOffset.b),
      a: read.i8(pointer, ByteOffset.a),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawColor;

    return new Color(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteLength, data.byteOffset);

    const result = {
      r: view.getInt8(ByteOffset.r),
      g: view.getInt8(ByteOffset.g),
      b: view.getInt8(ByteOffset.b),
      a: view.getInt8(ByteOffset.a),
      free: null,
      address: null,
    } as RawColor;

    return new Color(result);
  }
}
