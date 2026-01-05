import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  GPUShaderFormat,
  GPUShaderStage,
} from '../../../ffi/gpu/constant';
import { convertStringToFfi } from '../../../utility/common';
import type { RawGPUShaderCreateInfo } from './types';

export class GPUShaderCreateInfo implements RawGPUShaderCreateInfo {
  public static readonly BYTE_SIZE = 56;

  public code_size: bigint;
  public code: Pointer;
  public entrypoint: string;
  public format: GPUShaderFormat;
  public stage: GPUShaderStage;
  public num_samplers: number;
  public num_storage_textures: number;
  public num_storage_buffers: number;
  public num_uniform_buffers: number;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  constructor(options: RawGPUShaderCreateInfo) {
    this.code_size = options.code_size;
    this.code = options.code;
    this.entrypoint = options.entrypoint;
    this.format = options.format;
    this.stage = options.stage;
    this.num_samplers = options.num_samplers;
    this.num_storage_textures = options.num_storage_textures;
    this.num_storage_buffers = options.num_storage_buffers;
    this.num_uniform_buffers = options.num_uniform_buffers;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUShaderCreateInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.code_size), true);
    view.setBigUint64(8, BigInt(this.code), true);
    view.setBigUint64(
      16,
      BigInt(convertStringToFfi(this.entrypoint).reference),
      true
    );

    view.setUint32(24, this.format, true);
    view.setInt32(28, this.stage, true);
    view.setUint32(32, this.num_samplers, true);
    view.setUint32(36, this.num_storage_textures, true);
    view.setUint32(40, this.num_storage_buffers, true);
    view.setUint32(44, this.num_uniform_buffers, true);
    view.setUint32(48, this.props, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(GPUShaderCreateInfo.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const entrypointPtr = read.ptr(pointer, 16) as Pointer;

    const result = {
      code_size: read.u64(pointer, 0),
      code: read.ptr(pointer, 8),
      entrypoint: new CString(entrypointPtr).toString(),
      format: read.u32(pointer, 24),
      stage: read.i32(pointer, 28),
      num_samplers: read.u32(pointer, 32),
      num_storage_textures: read.u32(pointer, 36),
      num_storage_buffers: read.u32(pointer, 40),
      num_uniform_buffers: read.u32(pointer, 44),
      props: read.u32(pointer, 48),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUShaderCreateInfo;

    return new GPUShaderCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const entrypointPtr = view.getBigUint64(16, true) as unknown as Pointer;

    const result = {
      code_size: view.getBigUint64(0, true),
      code: view.getBigUint64(8, true) as unknown as Pointer,
      entrypoint: new CString(entrypointPtr).toString(),
      format: view.getUint32(24, true),
      stage: view.getInt32(28, true),
      num_samplers: view.getUint32(32, true),
      num_storage_textures: view.getUint32(36, true),
      num_storage_buffers: view.getUint32(40, true),
      num_uniform_buffers: view.getUint32(44, true),
      props: view.getUint32(48, true),
      free: null,
      address: null,
    } as RawGPUShaderCreateInfo;

    return new GPUShaderCreateInfo(result);
  }
}
