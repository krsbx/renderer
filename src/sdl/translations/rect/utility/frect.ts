import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawFRect } from './types';

export class FRect implements RawFRect {
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

    view.setFloat32(0, this.x);
    view.setFloat32(4, this.y);
    view.setFloat32(8, this.w);
    view.setFloat32(12, this.h);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      x: read.f32(pointer, 0),
      y: read.f32(pointer, 4),
      w: read.f32(pointer, 8),
      h: read.f32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawFRect;

    return new FRect(result);
  }

  public static fromMemory(frect: Uint8Array) {
    const view = new DataView(frect.buffer, frect.byteOffset, frect.byteLength);

    const result = {
      x: view.getFloat32(0, true),
      y: view.getFloat32(4, true),
      w: view.getFloat32(8, true),
      h: view.getFloat32(12, true),
      free: null,
      address: null,
    } as RawFRect;

    return new FRect(result);
  }
}
