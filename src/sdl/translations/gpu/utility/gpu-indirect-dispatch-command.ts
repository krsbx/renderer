import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUIndirectDispatchCommand } from './types';

export class GPUIndirectDispatchCommand
  implements RawGPUIndirectDispatchCommand
{
  public static readonly BYTE_SIZE = 12;

  public groupcount_x: number;
  public groupcount_y: number;
  public groupcount_z: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUIndirectDispatchCommand) {
    this.groupcount_x = options.groupcount_x;
    this.groupcount_y = options.groupcount_y;
    this.groupcount_z = options.groupcount_z;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUIndirectDispatchCommand.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.groupcount_x, true);
    view.setUint32(4, this.groupcount_y, true);
    view.setUint32(8, this.groupcount_z, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      groupcount_x: read.u32(pointer, 0),
      groupcount_y: read.u32(pointer, 4),
      groupcount_z: read.u32(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUIndirectDispatchCommand;

    return new GPUIndirectDispatchCommand(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      groupcount_x: view.getUint32(0, true),
      groupcount_y: view.getUint32(4, true),
      groupcount_z: view.getUint32(8, true),
      free: null,
      address: null,
    } as RawGPUIndirectDispatchCommand;

    return new GPUIndirectDispatchCommand(result);
  }
}
