import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUBufferRegion } from './types';

export class GPUBufferRegion implements RawGPUBufferRegion {
  public buffer: Pointer;
  public offset: number;
  public size: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUBufferRegion) {
    this.buffer = options.buffer;
    this.offset = options.offset;
    this.size = options.size;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUBufferRegion.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.buffer), true);
    view.setUint32(8, this.offset, true);
    view.setUint32(12, this.size, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      buffer: read.ptr(pointer, 0),
      offset: read.u32(pointer, 8),
      size: read.u32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUBufferRegion;

    return new GPUBufferRegion(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      buffer: view.getBigUint64(0, true) as unknown as Pointer,
      offset: view.getUint32(8, true),
      size: view.getUint32(12, true),
      free: null,
      address: null,
    } as RawGPUBufferRegion;

    return new GPUBufferRegion(result);
  }
}
