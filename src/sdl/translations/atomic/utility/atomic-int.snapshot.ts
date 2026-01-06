import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { ByteOffset } from './constant';
import type { RawAtomicInt } from './types';

export class AtomicInt implements RawAtomicInt {
  public static readonly BYTE_SIZE = 4;

  public value: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawAtomicInt) {
    this.value = options.value;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = AtomicInt.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(ByteOffset.value, this.value, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      value: read.i32(pointer, ByteOffset.value),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawAtomicInt;

    return new AtomicInt(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      value: view.getInt32(ByteOffset.value, true),
      free: null,
      address: null,
    } as RawAtomicInt;

    return new AtomicInt(result);
  }
}
