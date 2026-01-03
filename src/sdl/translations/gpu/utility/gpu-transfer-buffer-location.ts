import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUTransferBufferLocation } from './types';

export class GPUTransferBufferLocation implements RawGPUTransferBufferLocation {
  public transfer_buffer: Pointer;
  public offset: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUTransferBufferLocation) {
    this.transfer_buffer = options.transfer_buffer;
    this.offset = options.offset;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUTransferBufferLocation.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.transfer_buffer), true);
    view.setUint32(8, this.offset, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      transfer_buffer: read.ptr(pointer, 0),
      offset: read.u32(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUTransferBufferLocation;

    return new GPUTransferBufferLocation(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      transfer_buffer: view.getBigUint64(0, true) as unknown as Pointer,
      offset: view.getUint32(8, true),
      free: null,
      address: null,
    } as RawGPUTransferBufferLocation;

    return new GPUTransferBufferLocation(result);
  }
}
