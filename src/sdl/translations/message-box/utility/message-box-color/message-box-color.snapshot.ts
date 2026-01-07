import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
import type { RawMessageBoxColor } from './types';

export class MessageBoxColor implements RawMessageBoxColor {
  public static readonly BYTE_SIZE = 3;

  public r: number;
  public g: number;
  public b: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawMessageBoxColor) {
    this.r = options.r;
    this.g = options.g;
    this.b = options.b;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = MessageBoxColor.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint8(ByteOffset.r, this.r);
    view.setUint8(ByteOffset.g, this.g);
    view.setUint8(ByteOffset.b, this.b);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      r: read.u8(pointer, ByteOffset.r),
      g: read.u8(pointer, ByteOffset.g),
      b: read.u8(pointer, ByteOffset.b),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawMessageBoxColor;

    return new MessageBoxColor(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteLength, data.byteOffset);

    const result = {
      r: view.getUint8(ByteOffset.r),
      g: view.getUint8(ByteOffset.g),
      b: view.getUint8(ByteOffset.b),
      free: null,
      address: null,
    } as RawMessageBoxColor;

    return new MessageBoxColor(result);
  }
}
