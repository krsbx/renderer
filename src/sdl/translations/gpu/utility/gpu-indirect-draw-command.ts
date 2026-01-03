import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUIndirectDrawCommand } from './types';

export class GPUIndirectDrawCommand implements RawGPUIndirectDrawCommand {
  public num_vertices: number;
  public num_instances: number;
  public first_vertex: number;
  public first_instance: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUIndirectDrawCommand) {
    this.num_vertices = options.num_vertices;
    this.num_instances = options.num_instances;
    this.first_vertex = options.first_vertex;
    this.first_instance = options.first_instance;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUIndirectDrawCommand.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.num_vertices, true);
    view.setUint32(4, this.num_instances, true);
    view.setUint32(8, this.first_vertex, true);
    view.setUint32(12, this.first_instance, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(16);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      num_vertices: read.u32(pointer, 0),
      num_instances: read.u32(pointer, 4),
      first_vertex: read.u32(pointer, 8),
      first_instance: read.u32(pointer, 12),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUIndirectDrawCommand;

    return new GPUIndirectDrawCommand(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      num_vertices: view.getUint32(0, true),
      num_instances: view.getUint32(4, true),
      first_vertex: view.getUint32(8, true),
      first_instance: view.getUint32(12, true),
      free: null,
      address: null,
    } as RawGPUIndirectDrawCommand;

    return new GPUIndirectDrawCommand(result);
  }
}
