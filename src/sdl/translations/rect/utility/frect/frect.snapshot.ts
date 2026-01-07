import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
import type { RawFRect } from './types';

export class FRect implements RawFRect {
  public static readonly BYTE_SIZE = 16;

  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawFRect) {
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = FRect.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setFloat32(ByteOffset.x, this.x);
    view.setFloat32(ByteOffset.y, this.y);
    view.setFloat32(ByteOffset.w, this.w);
    view.setFloat32(ByteOffset.h, this.h);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      x: read.f32(pointer, ByteOffset.x),
      y: read.f32(pointer, ByteOffset.y),
      w: read.f32(pointer, ByteOffset.w),
      h: read.f32(pointer, ByteOffset.h),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawFRect;

    return new FRect(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      x: view.getFloat32(ByteOffset.x, true),
      y: view.getFloat32(ByteOffset.y, true),
      w: view.getFloat32(ByteOffset.w, true),
      h: view.getFloat32(ByteOffset.h, true),
      free: null,
      address: null,
    } as RawFRect;

    return new FRect(result);
  }
}
