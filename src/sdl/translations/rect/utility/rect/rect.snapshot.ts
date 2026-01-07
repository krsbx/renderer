import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
import type { RawRect } from './types';

export class Rect implements RawRect {
  public static readonly BYTE_SIZE = 16;

  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawRect) {
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = Rect.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(ByteOffset.x, this.x);
    view.setInt32(ByteOffset.y, this.y);
    view.setInt32(ByteOffset.w, this.w);
    view.setInt32(ByteOffset.h, this.h);

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
      w: read.i32(pointer, ByteOffset.w),
      h: read.i32(pointer, ByteOffset.h),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawRect;

    return new Rect(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      x: view.getInt32(ByteOffset.x, true),
      y: view.getInt32(ByteOffset.y, true),
      w: view.getInt32(ByteOffset.w, true),
      h: view.getInt32(ByteOffset.h, true),
      free: null,
      address: null,
    } as RawRect;

    return new Rect(result);
  }
}
