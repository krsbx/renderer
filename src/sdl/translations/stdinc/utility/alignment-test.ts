import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawAlignmentTest } from './types';

export class AlignmentTest implements RawAlignmentTest {
  public static readonly BYTE_SIZE = 16;

  public a: number;
  public b: Pointer;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawAlignmentTest) {
    this.a = options.a;
    this.b = options.b;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = AlignmentTest.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt8(0, this.a);
    view.setBigUint64(8, BigInt(this.b), true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      a: read.i8(pointer, 0),
      b: read.ptr(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawAlignmentTest;

    return new AlignmentTest(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      a: view.getInt8(0),
      b: view.getBigUint64(8, true) as unknown as Pointer,
      free: null,
      address: null,
    } as RawAlignmentTest;

    return new AlignmentTest(result);
  }
}
