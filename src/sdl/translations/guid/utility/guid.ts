import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGUID } from './types';

export class GUID implements RawGUID {
  public data: number[];
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGUID) {
    this.data = options.data;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    return new Uint8Array(this.data);
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      data: [
        read.u8(pointer, 0),
        read.u8(pointer, 1),
        read.u8(pointer, 2),
        read.u8(pointer, 3),
        read.u8(pointer, 4),
        read.u8(pointer, 5),
        read.u8(pointer, 6),
        read.u8(pointer, 7),
        read.u8(pointer, 8),
        read.u8(pointer, 9),
        read.u8(pointer, 10),
        read.u8(pointer, 11),
        read.u8(pointer, 12),
        read.u8(pointer, 13),
        read.u8(pointer, 14),
        read.u8(pointer, 15),
      ],
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGUID;

    return new GUID(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      data: [
        view.getUint8(0),
        view.getUint8(1),
        view.getUint8(2),
        view.getUint8(3),
        view.getUint8(4),
        view.getUint8(5),
        view.getUint8(6),
        view.getUint8(7),
        view.getUint8(8),
        view.getUint8(9),
        view.getUint8(10),
        view.getUint8(11),
        view.getUint8(12),
        view.getUint8(13),
        view.getUint8(14),
        view.getUint8(15),
      ],
      free: null,
      address: null,
    } as RawGUID;

    return new GUID(result);
  }
}
