import { ptr, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { Color } from '../color/color.snapshot';
import { ByteOffset } from './constant';
import type { RawPalette } from './types';

export class Palette implements RawPalette {
  public static readonly BYTE_SIZE = 24;

  public ncolors: number;
  public colors: Color[];
  public version: number;
  public refcount: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawPalette) {
    this.ncolors = options.ncolors;
    this.colors = options.colors;
    this.version = options.version;
    this.refcount = options.refcount;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const paletteBuffer = Palette.allocMemory();
    const view = new DataView(paletteBuffer.buffer);

    const colorsByteLength = this.colors.length * 4;
    const colorsBuffer = new Uint8Array(colorsByteLength);

    for (let i = 0; i < this.colors.length; i++) {
      const color = this.colors[i];
      const offset = i * Color.BYTE_SIZE;

      if (!color) continue;

      colorsBuffer[offset + 0] = color.r;
      colorsBuffer[offset + 1] = color.g;
      colorsBuffer[offset + 2] = color.b;
      colorsBuffer[offset + 3] = color.a;
    }

    const colorsPtr = ptr(colorsBuffer);

    view.setInt32(0, this.colors.length, true);
    view.setBigUint64(8, BigInt(colorsPtr), true);
    view.setUint32(16, this.version, true);
    view.setInt32(20, this.refcount, true);

    return paletteBuffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const ncolors = read.i32(pointer, ByteOffset.ncolors);
    const colorsPtr = read.ptr(pointer, ByteOffset.colors) as Pointer | null;

    const colorList: Color[] = [];

    if (colorsPtr && ncolors > 0) {
      for (let i = 0; i < ncolors; i++) {
        const offset = BigInt(i) * BigInt(Color.BYTE_SIZE);
        const colorPtr = (BigInt(pointer) +
          offset) as unknown as Pointer | null;

        if (!colorPtr) continue;

        colorList.push(Color.fromPointer(colorPtr, sdl));
      }
    }

    const result = {
      ncolors,
      colors: colorList,
      version: read.u32(pointer, ByteOffset.version),
      refcount: read.i32(pointer, ByteOffset.refcount),
      address: pointer,
    } as RawPalette;

    return new Palette(result);
  }

  public static fromMemory(data: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const ncolors = view.getInt32(ByteOffset.ncolors, true);
    const colorsPtr = view.getBigUint64(ByteOffset.colors, true);

    const colorList: Color[] = [];

    for (let i = 0; i < ncolors; i++) {
      const offset = BigInt(i) * BigInt(Color.BYTE_SIZE);
      const colorPtr = (BigInt(colorsPtr) +
        offset) as unknown as Pointer | null;

      if (!colorPtr) continue;

      colorList.push(Color.fromPointer(colorPtr, sdl));
    }

    const result = {
      ncolors,
      colors: colorList,
      version: view.getUint32(ByteOffset.version, true),
      refcount: view.getInt32(ByteOffset.refcount, true),
      free: null,
      address: null,
    } as RawPalette;

    return new Palette(result);
  }
}
