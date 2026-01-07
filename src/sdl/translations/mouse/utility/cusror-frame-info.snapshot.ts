import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { Surface } from '../../surface/surface.snapshot';
import { ByteOffset } from './constant';
import type { RawCursorFrameInfo } from './types';

export class CursorFrameInfo implements RawCursorFrameInfo {
  public static readonly BYTE_SIZE = 16;

  public surface: Surface;
  public duration: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawCursorFrameInfo) {
    this.surface = options.surface;
    this.duration = options.duration;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = CursorFrameInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(ByteOffset.surface, BigInt(this.address ?? 0), true);
    view.setUint32(ByteOffset.duration, this.duration, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const surfacePtr = read.ptr(pointer, ByteOffset.surface) as Pointer;
    const duration = read.u32(pointer, ByteOffset.duration);
    const surface = Surface.fromPointer(surfacePtr, sdl);

    const result = {
      surface,
      duration,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawCursorFrameInfo;

    return new CursorFrameInfo(result);
  }

  public static fromMemory(data: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const surfacePtr = view.getBigUint64(
      ByteOffset.surface,
      true
    ) as unknown as Pointer;
    const duration = view.getUint32(ByteOffset.duration, true);
    const surface = Surface.fromPointer(surfacePtr, sdl);

    const result = {
      duration,
      surface,
      free: null,
      address: null,
    } as RawCursorFrameInfo;

    return new CursorFrameInfo(result);
  }
}
