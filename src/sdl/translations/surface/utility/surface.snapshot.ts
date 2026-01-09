import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { ByteOffset } from './constant';
import type { RawSurface } from './types';

export class Surface implements RawSurface {
  public static readonly BYTE_SIZE = 40;

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
    const buffer = Surface.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(ByteOffset.flags, this.flags, true);
    view.setUint32(ByteOffset.format, this.format, true);
    view.setInt32(ByteOffset.w, this.w, true);
    view.setInt32(ByteOffset.h, this.h, true);
    view.setInt32(ByteOffset.pitch, this.pitch, true);

    if (this.pixels) {
      view.setBigUint64(ByteOffset.pixels, BigInt(this.pixels), true);
    }

    view.setInt32(ByteOffset.refcount, this.refcount, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      flags: read.u32(pointer, ByteOffset.flags),
      format: read.u32(pointer, ByteOffset.format),
      w: read.i32(pointer, ByteOffset.w),
      h: read.i32(pointer, ByteOffset.h),
      pitch: read.i32(pointer, ByteOffset.pitch),
      pixels: read.ptr(pointer, ByteOffset.pixels) as unknown as bigint,
      refcount: read.i32(pointer, ByteOffset.refcount),
      free: () => {
        sdl.symbols.SDL_DestroySurface(pointer);
      },
      address: pointer,
    } as RawSurface;

    return new Surface(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      flags: view.getUint32(ByteOffset.flags, true),
      format: view.getUint32(ByteOffset.format, true),
      w: view.getInt32(ByteOffset.w, true),
      h: view.getInt32(ByteOffset.h, true),
      pitch: view.getInt32(ByteOffset.pitch, true),
      pixels: view.getBigUint64(ByteOffset.pixels, true),
      refcount: view.getInt32(ByteOffset.refcount, true),
      free: null,
      address: null,
    } as RawSurface;

    return new Surface(result);
  }
}
