import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { Surface } from '../../surface/surface';
import type { RawCursorFrameInfo } from './types';

export class CursorFrameInfo implements RawCursorFrameInfo {
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

    view.setBigUint64(0, BigInt(this.address ?? 0), true);
    view.setUint32(8, this.duration, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const surfacePtr = read.ptr(pointer, 0) as Pointer;
    const duration = read.u32(pointer, 8);
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

  public static fromMemory(cursorFrameInfo: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(
      cursorFrameInfo.buffer,
      cursorFrameInfo.byteOffset,
      cursorFrameInfo.byteLength
    );

    const surfacePtr = view.getBigUint64(0, true) as unknown as Pointer;
    const duration = view.getUint32(8, true);
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
