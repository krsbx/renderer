import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { HapticDirectionType } from '../../../../ffi/haptic/constant';
import { ByteOffset } from './constant';
import type { RawHapticDirection } from './types';

export class HapticDirection implements RawHapticDirection {
  public static readonly BYTE_SIZE = 16;

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

    view.setUint8(ByteOffset.type, this.type);
    view.setInt32(ByteOffset.dir1, this.dir[0], true);
    view.setInt32(ByteOffset.dir2, this.dir[1], true);
    view.setInt32(ByteOffset.dir3, this.dir[2], true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u8(pointer, ByteOffset.type),
      dir: [
        read.i32(pointer, ByteOffset.dir1),
        read.i32(pointer, ByteOffset.dir2),
        read.i32(pointer, ByteOffset.dir3),
      ],
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
      type: view.getUint8(ByteOffset.type),
      dir: [
        view.getInt32(ByteOffset.dir1, true),
        view.getInt32(ByteOffset.dir2, true),
        view.getInt32(ByteOffset.dir3, true),
      ],
      free: null,
      address: null,
    } as RawHapticDirection;

    return new HapticDirection(result);
  }
}
