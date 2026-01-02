import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { HapticDirectionType } from '../../../ffi/haptic/constant';
import type { RawHapticDirection } from './types';

export class HapticDirection implements RawHapticDirection {
  type: HapticDirectionType;
  dir: [number, number, number];
  free: (() => void) | null;
  address: Pointer | null;

  public constructor(options: RawHapticDirection) {
    this.type = options.type;
    this.dir = options.dir;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = HapticDirection.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint8(0, this.type);
    view.setInt32(4, this.dir[0], true);
    view.setInt32(8, this.dir[1], true);
    view.setInt32(12, this.dir[2], true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u8(pointer, 0),
      dir: [read.i32(pointer, 4), read.i32(pointer, 8), read.i32(pointer, 12)],
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawHapticDirection;

    return new HapticDirection(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint8(0),
      dir: [
        view.getInt32(4, true),
        view.getInt32(8, true),
        view.getInt32(12, true),
      ],
      free: null,
      address: null,
    } as RawHapticDirection;

    return new HapticDirection(result);
  }
}
