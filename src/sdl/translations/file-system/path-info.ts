import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import type { RawPathInfo } from './types';

export class PathInfo implements RawPathInfo {
  public type: number;
  public size: bigint;
  public create_time: bigint;
  public modify_time: bigint;
  public access_time: bigint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawPathInfo) {
    this.type = options.type;
    this.size = options.size;
    this.create_time = options.create_time;
    this.modify_time = options.modify_time;
    this.access_time = options.access_time;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = PathInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.type, true);
    view.setBigUint64(8, this.size, true);
    view.setBigInt64(16, this.create_time, true);
    view.setBigInt64(24, this.modify_time, true);
    view.setBigInt64(32, this.access_time, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(40);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.i32(pointer, 0),
      size: read.u64(pointer, 8),
      create_time: read.i64(pointer, 16),
      modify_time: read.i64(pointer, 24),
      access_time: read.i64(pointer, 32),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPathInfo;

    return new PathInfo(result);
  }

  public static fromMemory(pathInfo: Uint8Array) {
    const view = new DataView(
      pathInfo.buffer,
      pathInfo.byteOffset,
      pathInfo.byteLength
    );

    const result = {
      type: view.getInt32(0, true),
      size: view.getBigUint64(8, true),
      create_time: view.getBigInt64(16, true),
      modify_time: view.getBigInt64(24, true),
      access_time: view.getBigInt64(32, true),
      free: null,
      address: null,
    } as RawPathInfo;

    return new PathInfo(result);
  }
}
