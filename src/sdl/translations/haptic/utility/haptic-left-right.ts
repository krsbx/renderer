import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawHapticLeftRight } from './types';

export class HapticLeftRight implements RawHapticLeftRight {
  public type: number;
  public length: number;
  public large_magnitude: number;
  public small_magnitude: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawHapticLeftRight) {
    this.type = options.type;
    this.length = options.length;
    this.large_magnitude = options.large_magnitude;
    this.small_magnitude = options.small_magnitude;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = HapticLeftRight.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint16(0, this.type, true);
    view.setUint32(4, this.length, true);
    view.setUint16(8, this.large_magnitude, true);
    view.setUint16(10, this.small_magnitude, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(12);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u16(pointer, 0),
      length: read.u32(pointer, 4),
      large_magnitude: read.u16(pointer, 8),
      small_magnitude: read.u16(pointer, 10),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawHapticLeftRight;

    return new HapticLeftRight(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint16(0, true),
      length: view.getUint32(4, true),
      large_magnitude: view.getUint16(8, true),
      small_magnitude: view.getUint16(10, true),
      free: null,
      address: null,
    } as RawHapticLeftRight;

    return new HapticLeftRight(result);
  }
}
