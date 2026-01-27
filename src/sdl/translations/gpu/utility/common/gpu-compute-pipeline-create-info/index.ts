import type { StructInit } from '@/types/shared';
import { stringToCString } from '@utility/common';
import { CString, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUShaderFormat } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';
export class GPUComputePipelineCreateInfo {
  public static readonly BYTE_SIZE = 72;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  private $cache: Partial<{
    entrypoint: CString;
  }>;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        GPUComputePipelineCreateInfo.BYTE_SIZE
      );
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.$cache = {};
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<GPUComputePipelineCreateInfo>) {
    const instance = new GPUComputePipelineCreateInfo(
      GPUComputePipelineCreateInfo.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get codeSize() {
    return this.$view.getBigUint64(ByteOffset.code_size, true);
  }

  public set codeSize(value: bigint) {
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

    return new CString(entrypointPtr).toString();
  }

  public set entrypoint(value: string) {
    this.$cache.entrypoint = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.entrypoint,
      BigInt(this.$cache.entrypoint.ptr),
      true
    );
  }

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true) as GPUShaderFormat;
  }

  public set format(value: GPUShaderFormat) {
    this.$view.setUint32(ByteOffset.format, value, true);
  }

  public get samplerCount() {
    return this.$view.getUint32(ByteOffset.num_samplers, true);
  }

  public set samplerCount(value: number) {
    this.$view.setUint32(ByteOffset.num_samplers, value, true);
  }

  public get readonlyStorageTextureCount() {
    return this.$view.getUint32(ByteOffset.num_readonly_storage_textures, true);
  }

  public set readonlyStorageTextureCount(value: number) {
    this.$view.setUint32(ByteOffset.num_readonly_storage_textures, value, true);
  }

  public get readonlyStorageBufferCount() {
    return this.$view.getUint32(ByteOffset.num_readonly_storage_buffers, true);
  }

  public set readonlyStorageBufferCount(value: number) {
    this.$view.setUint32(ByteOffset.num_readonly_storage_buffers, value, true);
  }

  public get readwriteStorageTextureCount() {
    return this.$view.getUint32(
      ByteOffset.num_readwrite_storage_textures,
      true
    );
  }

  public set readwriteStorageTextureCount(value: number) {
    this.$view.setUint32(
      ByteOffset.num_readwrite_storage_textures,
      value,
      true
    );
  }

  public get readwriteStorageBufferCount() {
    return this.$view.getUint32(ByteOffset.num_readwrite_storage_buffers, true);
  }

  public set readwriteStorageBufferCount(value: number) {
    this.$view.setUint32(ByteOffset.num_readwrite_storage_buffers, value, true);
  }

  public get uniformBufferCount() {
    return this.$view.getUint32(ByteOffset.num_uniform_buffers, true);
  }

  public set uniformBufferCount(value: number) {
    this.$view.setUint32(ByteOffset.num_uniform_buffers, value, true);
  }

  public get threadcountX() {
    return this.$view.getUint32(ByteOffset.threadcount_x, true);
  }

  public set threadcountX(value: number) {
    this.$view.setUint32(ByteOffset.threadcount_x, value, true);
  }

  public get threadcountY() {
    return this.$view.getUint32(ByteOffset.threadcount_y, true);
  }

  public set threadcountY(value: number) {
    this.$view.setUint32(ByteOffset.threadcount_y, value, true);
  }

  public get threadcountZ() {
    return this.$view.getUint32(ByteOffset.threadcount_z, true);
  }

  public set threadcountZ(value: number) {
    this.$view.setUint32(ByteOffset.threadcount_z, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
