import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import type { RawSurface } from './types';

export class Surface implements RawSurface {
  public flags: number;
  public format: number;
  public w: number;
  public h: number;
  public pitch: number;
  public pixels: bigint;
  public refcount: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawSurface) {
    this.flags = options.flags;
    this.format = options.format;
    this.w = options.w;
    this.h = options.h;
    this.pitch = options.pitch;
    this.pixels = options.pixels;
    this.refcount = options.refcount;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(48);
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.flags, true);
    view.setUint32(4, this.format, true);
    view.setInt32(8, this.w, true);
    view.setInt32(12, this.h, true);
    view.setInt32(16, this.pitch, true);

    if (this.pixels) {
      view.setBigUint64(24, BigInt(this.pixels), true);
    }

    view.setInt32(32, this.refcount, true);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      flags: read.u32(pointer, 0),
      format: read.u32(pointer, 4),
      w: read.i32(pointer, 8),
      h: read.i32(pointer, 12),
      pitch: read.i32(pointer, 16),
      pixels: read.ptr(pointer, 24) as unknown as bigint,
      refcount: read.i32(pointer, 32),
      free: () => {
        sdl.symbols.SDL_DestroySurface(pointer);
      },
      address: pointer,
    } as RawSurface;

    return new Surface(result);
  }

  public static fromMemory(surface: Uint8Array) {
    const view = new DataView(
      surface.buffer,
      surface.byteOffset,
      surface.byteLength
    );

    const result = {
      flags: view.getUint32(0, true),
      format: view.getUint32(4, true),
      w: view.getInt32(8, true),
      h: view.getInt32(12, true),
      pitch: view.getInt32(16, true),
      pixels: view.getBigUint64(24, true),
      refcount: view.getInt32(32, true),
      free: null,
      address: null,
    } as RawSurface;

    return new Surface(result);
  }
}
