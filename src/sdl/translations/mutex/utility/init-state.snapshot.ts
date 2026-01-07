import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../index.ts';
import { AtomicInt } from '../../atomic/utility/atomic-int.snapshot.ts';
import { ByteOffset } from './constant.ts';
import type { RawInitState } from './types.ts';

export class InitState implements RawInitState {
  public static readonly BYTE_SIZE = 24;

  public status: AtomicInt;
  public thread: bigint;
  public reserved: bigint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawInitState) {
    this.status = options.status;
    this.thread = options.thread;
    this.reserved = options.reserved;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = InitState.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(ByteOffset.status, this.status.value, true);
    view.setBigUint64(ByteOffset.thread, this.thread, true);
    view.setBigUint64(ByteOffset.reserved, BigInt(this.reserved ?? 0n), true);

    return buffer;
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      status: AtomicInt.fromPointer(pointer, sdl),
      thread: read.u64(pointer, ByteOffset.thread),
      reserved: read.u64(pointer, ByteOffset.reserved),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawInitState;

    return new InitState(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      status: AtomicInt.fromMemory(data),
      thread: view.getBigUint64(ByteOffset.thread, true),
      reserved: view.getBigUint64(ByteOffset.reserved, true),
      free: null,
      address: null,
    } as RawInitState;

    return new InitState(result);
  }
}
