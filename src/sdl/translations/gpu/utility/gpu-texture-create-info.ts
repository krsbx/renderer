import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  GPUSampleCount,
  GPUTextureFormat,
  GPUTextureType,
  GPUTextureUsageFlags,
} from '../../../ffi/gpu/constant';
import type { RawGPUTextureCreateInfo } from './types';

export class GPUTextureCreateInfo implements RawGPUTextureCreateInfo {
  public static readonly BYTE_SIZE = 36;

  public type: GPUTextureType;
  public format: GPUTextureFormat;
  public usage: GPUTextureUsageFlags;
  public width: number;
  public height: number;
  public layer_count_or_depth: number;
  public num_levels: number;
  public sample_count: GPUSampleCount;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUTextureCreateInfo) {
    this.type = options.type;
    this.format = options.format;
    this.usage = options.usage;
    this.width = options.width;
    this.height = options.height;
    this.layer_count_or_depth = options.layer_count_or_depth;
    this.num_levels = options.num_levels;
    this.sample_count = options.sample_count;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUTextureCreateInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.type, true);
    view.setInt32(4, this.format, true);
    view.setUint32(8, this.usage, true);
    view.setUint32(12, this.width, true);
    view.setUint32(16, this.height, true);
    view.setUint32(20, this.layer_count_or_depth, true);
    view.setUint32(24, this.num_levels, true);
    view.setInt32(28, this.sample_count, true);
    view.setUint32(32, this.props, true);

    return buffer;
  }

  public static allocMemory() {
    const memory = new Uint8Array(GPUTextureCreateInfo.BYTE_SIZE);

    return memory;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.i32(pointer, 0),
      format: read.i32(pointer, 4),
      usage: read.u32(pointer, 8),
      width: read.u32(pointer, 12),
      height: read.u32(pointer, 16),
      layer_count_or_depth: read.u32(pointer, 20),
      num_levels: read.u32(pointer, 24),
      sample_count: read.i32(pointer, 28),
      props: read.u32(pointer, 32),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUTextureCreateInfo;

    return new GPUTextureCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getInt32(0, true),
      format: view.getInt32(4, true),
      usage: view.getUint32(8, true),
      width: view.getUint32(12, true),
      height: view.getUint32(16, true),
      layer_count_or_depth: view.getUint32(20, true),
      num_levels: view.getUint32(24, true),
      sample_count: view.getInt32(28, true),
      props: view.getUint32(32, true),
      free: null,
      address: null,
    } as RawGPUTextureCreateInfo;

    return new GPUTextureCreateInfo(result);
  }
}
