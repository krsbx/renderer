import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  AsyncIOResult,
  AsyncIOTaskType,
} from '../../../ffi/asyncio/constant';
import type { RawAsyncIOOutcome } from './types';

export class AsyncIOOutcome implements RawAsyncIOOutcome {
  public asyncio: Pointer | null;
  type: AsyncIOTaskType;
  result: AsyncIOResult;
  public buffer: Pointer | null;
  public offset: bigint;
  public bytes_requested: bigint;
  public bytes_transferred: bigint;
  public userdata: Pointer | null;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawAsyncIOOutcome) {
    this.asyncio = options.asyncio;
    this.type = options.type;
    this.result = options.result;
    this.buffer = options.buffer;
    this.offset = options.offset;
    this.bytes_requested = options.bytes_requested;
    this.bytes_transferred = options.bytes_transferred;
    this.userdata = options.userdata;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = AsyncIOOutcome.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.asyncio ?? 0n), true);
    view.setInt32(8, this.type, true);
    view.setInt32(12, this.result, true);
    view.setBigUint64(16, BigInt(this.buffer ?? 0n), true);
    view.setBigUint64(24, this.offset, true);
    view.setBigUint64(32, this.bytes_requested, true);
    view.setBigUint64(40, this.bytes_transferred, true);
    view.setBigUint64(48, BigInt(this.userdata ?? 0n), true);

    return buffer;
  }

  public static allocMemory() {
    return new Uint8Array(56);
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      asyncio: read.ptr(pointer, 0),
      type: read.i32(pointer, 8),
      result: read.i32(pointer, 12),
      buffer: read.ptr(pointer, 16),
      offset: read.u64(pointer, 24),
      bytes_requested: read.u64(pointer, 32),
      bytes_transferred: read.u64(pointer, 40),
      userdata: read.ptr(pointer, 48),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawAsyncIOOutcome;

    return new AsyncIOOutcome(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      asyncio: view.getBigUint64(0, true) as unknown as Pointer,
      type: view.getInt32(8, true),
      result: view.getInt32(12, true),
      buffer: view.getBigUint64(16, true) as unknown as Pointer,
      offset: view.getBigUint64(24, true),
      bytes_requested: view.getBigUint64(32, true),
      bytes_transferred: view.getBigUint64(40, true),
      userdata: view.getBigUint64(48, true) as unknown as Pointer,
      free: null,
      address: null,
    } as RawAsyncIOOutcome;

    return new AsyncIOOutcome(result);
  }
}
