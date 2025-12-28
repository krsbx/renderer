import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawPixelFormatDetails } from './types';

export class PixelFormatDetails implements RawPixelFormatDetails {
  public format: number;
  public bits_per_pixel: number;
  public bytes_per_pixel: number;
  public padding: [padding1: number, padding2: number];
  public Rmask: number;
  public Gmask: number;
  public Bmask: number;
  public Amask: number;
  public Rbits: number;
  public Gbits: number;
  public Bbits: number;
  public Abits: number;
  public Rshift: number;
  public Gshift: number;
  public Bshift: number;
  public Ashift: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  constructor(options: RawPixelFormatDetails) {
    this.format = options.format;
    this.bits_per_pixel = options.bits_per_pixel;
    this.bytes_per_pixel = options.bytes_per_pixel;
    this.padding = options.padding;
    this.Rmask = options.Rmask;
    this.Gmask = options.Gmask;
    this.Bmask = options.Bmask;
    this.Amask = options.Amask;
    this.Rbits = options.Rbits;
    this.Gbits = options.Gbits;
    this.Bbits = options.Bbits;
    this.Abits = options.Abits;
    this.Rshift = options.Rshift;
    this.Gshift = options.Gshift;
    this.Bshift = options.Bshift;
    this.Ashift = options.Ashift;
    this.free = options.free;
    this.address = options.address;
  }

  public static allocMemory() {
    return new Uint8Array(32);
  }

  public toMemory() {
    const buffer = PixelFormatDetails.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.format, true);
    view.setUint8(4, this.bits_per_pixel);
    view.setUint8(5, this.bytes_per_pixel);
    // 6-7 is padding, leave as 0
    view.setUint32(8, this.Rmask, true);
    view.setUint32(12, this.Gmask, true);
    view.setUint32(16, this.Bmask, true);
    view.setUint32(20, this.Amask, true);
    view.setUint8(24, this.Rbits);
    view.setUint8(25, this.Gbits);
    view.setUint8(26, this.Bbits);
    view.setUint8(27, this.Abits);
    view.setUint8(28, this.Rshift);
    view.setUint8(29, this.Gshift);
    view.setUint8(30, this.Bshift);
    view.setUint8(31, this.Ashift);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      format: read.u32(pointer, 0),
      bits_per_pixel: read.u8(pointer, 4),
      bytes_per_pixel: read.u8(pointer, 5),
      padding: [read.u8(pointer, 6), read.u8(pointer, 7)],
      Rmask: read.u32(pointer, 8),
      Gmask: read.u32(pointer, 12),
      Bmask: read.u32(pointer, 16),
      Amask: read.u32(pointer, 20),
      Rbits: read.u8(pointer, 24),
      Gbits: read.u8(pointer, 25),
      Bbits: read.u8(pointer, 26),
      Abits: read.u8(pointer, 27),
      Rshift: read.u8(pointer, 28),
      Gshift: read.u8(pointer, 29),
      Bshift: read.u8(pointer, 30),
      Ashift: read.u8(pointer, 31),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPixelFormatDetails;

    return new PixelFormatDetails(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      format: view.getUint32(0, true),
      bits_per_pixel: view.getUint8(4),
      bytes_per_pixel: view.getUint8(5),
      padding: [view.getUint8(6), view.getUint8(7)],
      Rmask: view.getUint32(8, true),
      Gmask: view.getUint32(12, true),
      Bmask: view.getUint32(16, true),
      Amask: view.getUint32(20, true),
      Rbits: view.getUint8(24),
      Gbits: view.getUint8(25),
      Bbits: view.getUint8(26),
      Abits: view.getUint8(27),
      Rshift: view.getUint8(28),
      Gshift: view.getUint8(29),
      Bshift: view.getUint8(30),
      Ashift: view.getUint8(31),
      free: null,
      address: null,
    } as RawPixelFormatDetails;

    return new PixelFormatDetails(result);
  }
}
