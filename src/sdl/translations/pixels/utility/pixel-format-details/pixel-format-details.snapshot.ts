import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
import type { RawPixelFormatDetails } from './types';

export class PixelFormatDetails implements RawPixelFormatDetails {
  public static readonly BYTE_SIZE = 32;

  public format: number;
  public bits_per_pixel: number;
  public bytes_per_pixel: number;
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

  public toMemory() {
    const buffer = PixelFormatDetails.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(ByteOffset.format, this.format, true);
    view.setUint8(ByteOffset.bits_per_pixel, this.bits_per_pixel);
    view.setUint8(ByteOffset.bytes_per_pixel, this.bytes_per_pixel);
    // 6-7 is padding, leave as 0
    view.setUint32(ByteOffset.Rmask, this.Rmask, true);
    view.setUint32(ByteOffset.Gmask, this.Gmask, true);
    view.setUint32(ByteOffset.Bmask, this.Bmask, true);
    view.setUint32(ByteOffset.Amask, this.Amask, true);
    view.setUint8(ByteOffset.Rbits, this.Rbits);
    view.setUint8(ByteOffset.Gbits, this.Gbits);
    view.setUint8(ByteOffset.Bbits, this.Bbits);
    view.setUint8(ByteOffset.Abits, this.Abits);
    view.setUint8(ByteOffset.Rshift, this.Rshift);
    view.setUint8(ByteOffset.Gshift, this.Gshift);
    view.setUint8(ByteOffset.Bshift, this.Bshift);
    view.setUint8(ByteOffset.Ashift, this.Ashift);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      format: read.u32(pointer, ByteOffset.format),
      bits_per_pixel: read.u8(pointer, ByteOffset.bits_per_pixel),
      bytes_per_pixel: read.u8(pointer, ByteOffset.bytes_per_pixel),
      // 6-7 is padding, leave as 0
      Rmask: read.u32(pointer, ByteOffset.Rmask),
      Gmask: read.u32(pointer, ByteOffset.Gmask),
      Bmask: read.u32(pointer, ByteOffset.Bmask),
      Amask: read.u32(pointer, ByteOffset.Amask),
      Rbits: read.u8(pointer, ByteOffset.Rbits),
      Gbits: read.u8(pointer, ByteOffset.Gbits),
      Bbits: read.u8(pointer, ByteOffset.Bbits),
      Abits: read.u8(pointer, ByteOffset.Abits),
      Rshift: read.u8(pointer, ByteOffset.Rshift),
      Gshift: read.u8(pointer, ByteOffset.Gshift),
      Bshift: read.u8(pointer, ByteOffset.Bshift),
      Ashift: read.u8(pointer, ByteOffset.Ashift),
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
      format: view.getUint32(ByteOffset.format, true),
      bits_per_pixel: view.getUint8(ByteOffset.bits_per_pixel),
      bytes_per_pixel: view.getUint8(ByteOffset.bytes_per_pixel),
      // 6-7 is padding, leave as 0
      Rmask: view.getUint32(ByteOffset.Rmask, true),
      Gmask: view.getUint32(ByteOffset.Gmask, true),
      Bmask: view.getUint32(ByteOffset.Bmask, true),
      Amask: view.getUint32(ByteOffset.Amask, true),
      Rbits: view.getUint8(ByteOffset.Rbits),
      Gbits: view.getUint8(ByteOffset.Gbits),
      Bbits: view.getUint8(ByteOffset.Bbits),
      Abits: view.getUint8(ByteOffset.Abits),
      Rshift: view.getUint8(ByteOffset.Rshift),
      Gshift: view.getUint8(ByteOffset.Gshift),
      Bshift: view.getUint8(ByteOffset.Bshift),
      Ashift: view.getUint8(ByteOffset.Ashift),
      free: null,
      address: null,
    } as RawPixelFormatDetails;

    return new PixelFormatDetails(result);
  }
}
