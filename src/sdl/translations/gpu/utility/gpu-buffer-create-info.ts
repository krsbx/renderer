import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUBufferUsageFlags } from '../../../ffi/gpu/constant';
import type { RawGPUBufferCreateInfo } from './types';

export class GPUBufferCreateInfo implements RawGPUBufferCreateInfo {
  public static readonly BYTE_SIZE = 12;

  public usage: GPUBufferUsageFlags;
  public size: number;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUBufferCreateInfo) {
    this.usage = options.usage;
    this.size = options.size;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUBufferCreateInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.usage, true);
    view.setUint32(4, this.size, true);
    view.setUint32(8, this.props, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      usage: read.u32(pointer, 0),
      size: read.u32(pointer, 4),
      props: read.u32(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUBufferCreateInfo;

    return new GPUBufferCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      usage: view.getUint32(0, true),
      size: view.getUint32(4, true),
      props: view.getUint32(8, true),
      free: null,
      address: null,
    } as RawGPUBufferCreateInfo;

    return new GPUBufferCreateInfo(result);
  }
}
