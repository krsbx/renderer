import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUComputePipelineCreateInfo } from './types';

export class GPUComputePipelineCreateInfo
  implements RawGPUComputePipelineCreateInfo
{
  public code_size: bigint;
  public code: Pointer;
  public entrypoint: string;
  public format: number;
  public num_samplers: number;
  public num_readonly_storage_textures: number;
  public num_readonly_storage_buffers: number;
  public num_readwrite_storage_textures: number;
  public num_readwrite_storage_buffers: number;
  public num_uniform_buffers: number;
  public threadcount_x: number;
  public threadcount_y: number;
  public threadcount_z: number;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUComputePipelineCreateInfo) {
    this.code_size = options.code_size;
    this.code = options.code;
    this.entrypoint = options.entrypoint;
    this.format = options.format;
    this.num_samplers = options.num_samplers;
    this.num_readonly_storage_textures = options.num_readonly_storage_textures;
    this.num_readonly_storage_buffers = options.num_readonly_storage_buffers;
    this.num_readwrite_storage_textures =
      options.num_readwrite_storage_textures;
    this.num_readwrite_storage_buffers = options.num_readwrite_storage_buffers;
    this.num_uniform_buffers = options.num_uniform_buffers;
    this.threadcount_x = options.threadcount_x;
    this.threadcount_y = options.threadcount_y;
    this.threadcount_z = options.threadcount_z;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const entrypointPtr = read.ptr(pointer, 16) as Pointer;

    const result = {
      code_size: read.u64(pointer, 0),
      code: read.ptr(pointer, 8),
      entrypoint: new CString(entrypointPtr).toString(),
      format: read.i32(pointer, 24),
      num_samplers: read.u32(pointer, 28),
      num_readonly_storage_textures: read.u32(pointer, 32),
      num_readonly_storage_buffers: read.u32(pointer, 36),
      num_readwrite_storage_textures: read.u32(pointer, 40),
      num_readwrite_storage_buffers: read.u32(pointer, 44),
      num_uniform_buffers: read.u32(pointer, 48),
      threadcount_x: read.u32(pointer, 52),
      threadcount_y: read.u32(pointer, 56),
      threadcount_z: read.u32(pointer, 60),
      props: read.u32(pointer, 64),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUComputePipelineCreateInfo;

    return new GPUComputePipelineCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const entrypointPtr = view.getBigUint64(16, true) as unknown as Pointer;

    const result = {
      code_size: view.getBigUint64(0, true),
      code: view.getBigUint64(8, true) as unknown as Pointer,
      entrypoint: new CString(entrypointPtr).toString(),
      format: view.getInt32(24, true),
      num_samplers: view.getUint32(28, true),
      num_readonly_storage_textures: view.getUint32(32, true),
      num_readonly_storage_buffers: view.getUint32(36, true),
      num_readwrite_storage_textures: view.getUint32(40, true),
      num_readwrite_storage_buffers: view.getUint32(44, true),
      num_uniform_buffers: view.getUint32(48, true),
      threadcount_x: view.getUint32(52, true),
      threadcount_y: view.getUint32(56, true),
      threadcount_z: view.getUint32(60, true),
      props: view.getUint32(64, true),
      free: null,
      address: null,
    } as RawGPUComputePipelineCreateInfo;

    return new GPUComputePipelineCreateInfo(result);
  }
}
