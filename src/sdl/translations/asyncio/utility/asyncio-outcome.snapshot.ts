import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  AsyncIOResult,
  AsyncIOTaskType,
} from '../../../ffi/asyncio/constant';
import { ByteOffset } from './constant';
import type { RawAsyncIOOutcome } from './types';

export class AsyncIOOutcome implements RawAsyncIOOutcome {
  public static readonly BYTE_SIZE = 56;

  public asyncio: Pointer | null;
  public type: AsyncIOTaskType;
  public result: AsyncIOResult;
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

    view.setBigUint64(ByteOffset.asyncio, BigInt(this.asyncio ?? 0n), true);
    view.setInt32(ByteOffset.type, this.type, true);
    view.setInt32(ByteOffset.result, this.result, true);
    view.setBigUint64(ByteOffset.buffer, BigInt(this.buffer ?? 0n), true);
    view.setBigUint64(ByteOffset.offset, this.offset, true);
    view.setBigUint64(ByteOffset.bytes_requested, this.bytes_requested, true);
    view.setBigUint64(
      ByteOffset.bytes_transferred,
      this.bytes_transferred,
      true
    );
    view.setBigUint64(ByteOffset.userdata, BigInt(this.userdata ?? 0n), true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      asyncio: read.ptr(pointer, ByteOffset.asyncio),
      type: read.i32(pointer, ByteOffset.type),
      result: read.i32(pointer, ByteOffset.result),
      buffer: read.ptr(pointer, ByteOffset.buffer),
      offset: read.u64(pointer, ByteOffset.offset),
      bytes_requested: read.u64(pointer, ByteOffset.bytes_requested),
      bytes_transferred: read.u64(pointer, ByteOffset.bytes_transferred),
      userdata: read.ptr(pointer, ByteOffset.userdata),
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
      asyncio: view.getBigUint64(
        ByteOffset.asyncio,
        true
      ) as unknown as Pointer,
      type: view.getInt32(ByteOffset.type, true),
      result: view.getInt32(ByteOffset.result, true),
      buffer: view.getBigUint64(ByteOffset.buffer, true) as unknown as Pointer,
      offset: view.getBigUint64(ByteOffset.offset, true),
      bytes_requested: view.getBigUint64(ByteOffset.bytes_requested, true),
      bytes_transferred: view.getBigUint64(ByteOffset.bytes_transferred, true),
      userdata: view.getBigUint64(
        ByteOffset.userdata,
        true
      ) as unknown as Pointer,
      free: null,
      address: null,
    } as RawAsyncIOOutcome;

    return new AsyncIOOutcome(result);
  }
}
