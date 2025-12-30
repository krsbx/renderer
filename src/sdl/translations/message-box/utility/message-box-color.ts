import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawMessageBoxColor } from './types';

export class MessageBoxColor implements RawMessageBoxColor {
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

    view.setInt8(0, this.r);
    view.setInt8(1, this.g);
    view.setInt8(2, this.b);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(4);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      r: read.i8(pointer, 0),
      g: read.i8(pointer, 1),
      b: read.i8(pointer, 2),
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
      r: view.getInt8(0),
      g: view.getInt8(1),
      b: view.getInt8(2),
      free: null,
      address: null,
    } as RawMessageBoxColor;

    return new MessageBoxColor(result);
  }
}
