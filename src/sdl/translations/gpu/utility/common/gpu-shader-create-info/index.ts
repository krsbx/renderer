import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type {
  GPUShaderFormat,
  GPUShaderStage,
} from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUShaderCreateInfo {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUShaderCreateInfo.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get code_size() {
    return this.$view.getBigUint64(ByteOffset.code_size, true);
  }

  public set code_size(value: bigint) {
    this.$view.setBigUint64(ByteOffset.code_size, value, true);
  }

  public get code() {
    return this.$view.getBigUint64(ByteOffset.code, true);
  }

  public set code(value: bigint) {
    this.$view.setBigUint64(ByteOffset.code, value, true);
  }

  public get entrypoint() {
    const entrypointAddr = this.$view.getBigUint64(ByteOffset.entrypoint, true);
    const entrypointPtr = Number(entrypointAddr) as Pointer;

    return new CString(entrypointPtr);
  }

  public set entrypoint(value: CString) {
    this.$view.setBigUint64(ByteOffset.entrypoint, BigInt(value.ptr), true);
  }

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true) as GPUShaderFormat;
  }

  public set format(value: GPUShaderFormat) {
    this.$view.setUint32(ByteOffset.format, value, true);
  }

  public get stage() {
    return this.$view.getInt32(ByteOffset.stage, true) as GPUShaderStage;
  }

  public set stage(value: GPUShaderStage) {
    this.$view.setInt32(ByteOffset.stage, value, true);
  }

  public get num_samplers() {
    return this.$view.getUint32(ByteOffset.num_samplers, true);
  }

  public set num_samplers(value: number) {
    this.$view.setUint32(ByteOffset.num_samplers, value, true);
  }

  public get num_storage_textures() {
    return this.$view.getUint32(ByteOffset.num_storage_textures, true);
  }

  public set num_storage_textures(value: number) {
    this.$view.setUint32(ByteOffset.num_storage_textures, value, true);
  }

  public get num_storage_buffers() {
    return this.$view.getUint32(ByteOffset.num_storage_buffers, true);
  }

  public set num_storage_buffers(value: number) {
    this.$view.setUint32(ByteOffset.num_storage_buffers, value, true);
  }

  public get num_uniform_buffers() {
    return this.$view.getUint32(ByteOffset.num_uniform_buffers, true);
  }

  public set num_uniform_buffers(value: number) {
    this.$view.setUint32(ByteOffset.num_uniform_buffers, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
