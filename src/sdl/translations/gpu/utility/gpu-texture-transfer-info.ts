import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUTextureTransferInfo } from './types';

export class GPUTextureTransferInfo implements RawGPUTextureTransferInfo {
  public transfer_buffer: Pointer;
  public offset: number;
  public pixels_per_row: number;
  public rows_per_layer: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUTextureTransferInfo) {
    this.transfer_buffer = options.transfer_buffer;
    this.offset = options.offset;
    this.pixels_per_row = options.pixels_per_row;
    this.rows_per_layer = options.rows_per_layer;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUTextureTransferInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.transfer_buffer), true);
    view.setUint32(8, this.offset, true);
    view.setUint32(12, this.pixels_per_row, true);
    view.setUint32(16, this.rows_per_layer, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(24);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      transfer_buffer: read.ptr(pointer, 0),
      offset: read.u32(pointer, 8),
      pixels_per_row: read.u32(pointer, 12),
      rows_per_layer: read.u32(pointer, 16),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUTextureTransferInfo;

    return new GPUTextureTransferInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      transfer_buffer: view.getBigUint64(0, true) as unknown as Pointer,
      offset: view.getUint32(8, true),
      pixels_per_row: view.getUint32(12, true),
      rows_per_layer: view.getUint32(16, true),
      free: null,
      address: null,
    } as RawGPUTextureTransferInfo;

    return new GPUTextureTransferInfo(result);
  }
}
