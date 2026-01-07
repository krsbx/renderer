import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { PathType } from '../../../ffi/file-system/constant';
import { ByteOffset } from './constant';
import type { RawPathInfo } from './types';

export class PathInfo implements RawPathInfo {
  public static readonly BYTE_SIZE = 40;

  public type: PathType;
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

    view.setInt32(ByteOffset.type, this.type, true);
    view.setBigUint64(ByteOffset.size, this.size, true);
    view.setBigInt64(ByteOffset.create_time, this.create_time, true);
    view.setBigInt64(ByteOffset.modify_time, this.modify_time, true);
    view.setBigInt64(ByteOffset.access_time, this.access_time, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.i32(pointer, ByteOffset.type),
      size: read.u64(pointer, ByteOffset.size),
      create_time: read.i64(pointer, ByteOffset.create_time),
      modify_time: read.i64(pointer, ByteOffset.modify_time),
      access_time: read.i64(pointer, ByteOffset.access_time),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPathInfo;

    return new PathInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getInt32(ByteOffset.type, true),
      size: view.getBigUint64(ByteOffset.size, true),
      create_time: view.getBigInt64(ByteOffset.create_time, true),
      modify_time: view.getBigInt64(ByteOffset.modify_time, true),
      access_time: view.getBigInt64(ByteOffset.access_time, true),
      free: null,
      address: null,
    } as RawPathInfo;

    return new PathInfo(result);
  }
}
