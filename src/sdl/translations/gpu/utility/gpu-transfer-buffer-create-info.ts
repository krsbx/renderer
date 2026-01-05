import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUTransferBufferUsage } from '../../../ffi/gpu/constant';
import type { RawGPUTransferBufferCreateInfo } from './types';

export class GPUTransferBufferCreateInfo
  implements RawGPUTransferBufferCreateInfo
{
  public static readonly BYTE_SIZE = 12;

  public usage: GPUTransferBufferUsage;
  public size: number;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUTransferBufferCreateInfo) {
    this.usage = options.usage;
    this.size = options.size;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUTransferBufferCreateInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.usage, true);
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
      usage: read.i32(pointer, 0),
      size: read.u32(pointer, 4),
      props: read.u32(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUTransferBufferCreateInfo;

    return new GPUTransferBufferCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      usage: view.getInt32(0, true),
      size: view.getUint32(4, true),
      props: view.getUint32(8, true),
      free: null,
      address: null,
    } as RawGPUTransferBufferCreateInfo;

    return new GPUTransferBufferCreateInfo(result);
  }
}
