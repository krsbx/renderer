import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUStorageBufferReadWriteBinding } from './types';

export class GPUStorageBufferReadWriteBinding
  implements RawGPUStorageBufferReadWriteBinding
{
  public static readonly BYTE_SIZE = 16;

  public buffer: Pointer;
  public cycle: boolean;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUStorageBufferReadWriteBinding) {
    this.buffer = options.buffer;
    this.cycle = options.cycle;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUStorageBufferReadWriteBinding.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.buffer), true);
    view.setUint8(8, this.cycle ? 1 : 0);
    view.setUint8(9, this.padding1);
    view.setUint8(10, this.padding2);
    view.setUint8(11, this.padding3);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      buffer: read.ptr(pointer, 0),
      cycle: read.u8(pointer, 8) === 1,
      padding1: read.u8(pointer, 9),
      padding2: read.u8(pointer, 10),
      padding3: read.u8(pointer, 11),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUStorageBufferReadWriteBinding;

    return new GPUStorageBufferReadWriteBinding(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      buffer: view.getBigUint64(0, true) as unknown as Pointer,
      cycle: view.getUint8(8) === 1,
      padding1: view.getUint8(9),
      padding2: view.getUint8(10),
      padding3: view.getUint8(11),
      free: null,
      address: null,
    } as RawGPUStorageBufferReadWriteBinding;

    return new GPUStorageBufferReadWriteBinding(result);
  }
}
