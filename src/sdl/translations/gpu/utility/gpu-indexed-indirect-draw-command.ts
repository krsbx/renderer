import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUIndexedIndirectDrawCommand } from './types';

export class GPUIndexedIndirectDrawCommand
  implements RawGPUIndexedIndirectDrawCommand
{
  public num_indices: number;
  public num_instances: number;
  public first_index: number;
  public vertex_offset: number;
  public first_instance: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUIndexedIndirectDrawCommand) {
    this.num_indices = options.num_indices;
    this.num_instances = options.num_instances;
    this.first_index = options.first_index;
    this.vertex_offset = options.vertex_offset;
    this.first_instance = options.first_instance;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUIndexedIndirectDrawCommand.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.num_indices, true);
    view.setUint32(4, this.num_instances, true);
    view.setUint32(8, this.first_index, true);
    view.setUint32(12, this.vertex_offset, true);
    view.setUint32(16, this.first_instance, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(20);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      num_indices: read.u32(pointer, 0),
      num_instances: read.u32(pointer, 4),
      first_index: read.u32(pointer, 8),
      vertex_offset: read.u32(pointer, 12),
      first_instance: read.u32(pointer, 16),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUIndexedIndirectDrawCommand;

    return new GPUIndexedIndirectDrawCommand(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      num_indices: view.getUint32(0, true),
      num_instances: view.getUint32(4, true),
      first_index: view.getUint32(8, true),
      vertex_offset: view.getUint32(12, true),
      first_instance: view.getUint32(16, true),
      free: null,
      address: null,
    } as RawGPUIndexedIndirectDrawCommand;

    return new GPUIndexedIndirectDrawCommand(result);
  }
}
