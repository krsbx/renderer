import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { ByteOffset } from './constant';
import type { RawHapticLeftRight } from './types';

export class HapticLeftRight implements RawHapticLeftRight {
  public static readonly BYTE_SIZE = 12;

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

    view.setUint16(ByteOffset.type, this.type, true);
    view.setUint32(ByteOffset.length, this.length, true);
    view.setUint16(ByteOffset.large_magnitude, this.large_magnitude, true);
    view.setUint16(ByteOffset.small_magnitude, this.small_magnitude, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u16(pointer, ByteOffset.type),
      length: read.u32(pointer, ByteOffset.length),
      large_magnitude: read.u16(pointer, ByteOffset.large_magnitude),
      small_magnitude: read.u16(pointer, ByteOffset.small_magnitude),
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
      type: view.getUint16(ByteOffset.type, true),
      length: view.getUint32(ByteOffset.length, true),
      large_magnitude: view.getUint16(ByteOffset.large_magnitude, true),
      small_magnitude: view.getUint16(ByteOffset.small_magnitude, true),
      free: null,
      address: null,
    } as RawHapticLeftRight;

    return new HapticLeftRight(result);
  }
}
