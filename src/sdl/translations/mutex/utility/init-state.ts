import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { AtomicInt } from '../../atomic/utility/atomic-int';
import type { RawInitState } from './types';

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

    view.setInt32(0, this.status.value, true);
    view.setBigUint64(8, this.thread, true);
    view.setBigUint64(16, BigInt(this.reserved ?? 0n), true);

    return buffer;
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      status: AtomicInt.fromPointer(pointer, sdl),
      thread: read.u64(pointer, 8),
      reserved: read.u64(pointer, 8),
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
      thread: view.getBigUint64(8, true),
      reserved: view.getBigUint64(16, true),
      free: null,
      address: null,
    } as RawInitState;

    return new InitState(result);
  }
}
