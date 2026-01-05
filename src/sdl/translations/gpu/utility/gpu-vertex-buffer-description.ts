import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUVertexInputRate } from '../../../ffi/gpu/constant';
import type { RawGPUVertexBufferDescription } from './types';

export class GPUVertexBufferDescription
  implements RawGPUVertexBufferDescription
{
  public static readonly BYTE_SIZE = 16;

  public slot: number;
  public pitch: number;
  public input_rate: GPUVertexInputRate;
  public instance_step_rate: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUVertexBufferDescription) {
    this.slot = options.slot;
    this.pitch = options.pitch;
    this.input_rate = options.input_rate;
    this.instance_step_rate = options.instance_step_rate;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUVertexBufferDescription.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.slot, true);
    view.setUint32(4, this.pitch, true);
    view.setInt32(8, this.input_rate, true);
    view.setUint32(12, this.instance_step_rate, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      slot: read.u32(pointer, 0),
      pitch: read.u32(pointer, 4),
      input_rate: read.i32(pointer, 8),
      instance_step_rate: read.u32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUVertexBufferDescription;

    return new GPUVertexBufferDescription(result);
  }

  public static fromMemory(data: Uint8Array) {
    const buffer = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      slot: buffer.getUint32(0, true),
      pitch: buffer.getUint32(4, true),
      input_rate: buffer.getInt32(8, true),
      instance_step_rate: buffer.getUint32(12, true),
      free: null,
      address: null,
    } as RawGPUVertexBufferDescription;

    return new GPUVertexBufferDescription(result);
  }
}
