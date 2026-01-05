import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUVertexElementFormat } from '../../../ffi/gpu/constant';
import type { RawGPUVertexAttribute } from './types';

export class GPUVertexAttribute implements RawGPUVertexAttribute {
  public static readonly BYTE_SIZE = 16;

  public location: number;
  public buffer_slot: number;
  public format: GPUVertexElementFormat;
  public offset: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUVertexAttribute) {
    this.location = options.location;
    this.buffer_slot = options.buffer_slot;
    this.format = options.format;
    this.offset = options.offset;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUVertexAttribute.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.location, true);
    view.setUint32(4, this.buffer_slot, true);
    view.setInt32(8, this.format, true);
    view.setUint32(12, this.offset, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      location: read.u32(pointer, 0),
      buffer_slot: read.u32(pointer, 4),
      format: read.i32(pointer, 8),
      offset: read.u32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUVertexAttribute;

    return new GPUVertexAttribute(result);
  }

  public static fromMemory(data: Uint8Array) {
    const buffer = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      location: buffer.getUint32(0, true),
      buffer_slot: buffer.getUint32(4, true),
      format: buffer.getInt32(8, true),
      offset: buffer.getUint32(12, true),
      free: null,
      address: null,
    } as RawGPUVertexAttribute;

    return new GPUVertexAttribute(result);
  }
}
