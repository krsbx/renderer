import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUShaderFormat, GPUShaderStage } from '@sdl/ffi/constant/gpu';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUShaderCreateInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 56;

  private $cache: Partial<{
    entrypoint: CString;
  }> = {};

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

  public get stage() {
    return this.$view.getInt32(ByteOffset.stage, true) as GPUShaderStage;
  }

  public set stage(value: GPUShaderStage) {
    this.$view.setInt32(ByteOffset.stage, value, true);
  }

  public get samplerCount() {
    return this.$view.getUint32(ByteOffset.num_samplers, true) as UInt32;
  }

  public set samplerCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_samplers, value, true);
  }

  public get storageTextureCount() {
    return this.$view.getUint32(
      ByteOffset.num_storage_textures,
      true
    ) as UInt32;
  }

  public set storageTextureCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_storage_textures, value, true);
  }

  public get storageBufferCount() {
    return this.$view.getUint32(ByteOffset.num_storage_buffers, true) as UInt32;
  }

  public set storageBufferCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_storage_buffers, value, true);
  }

  public get uniformBufferCount() {
    return this.$view.getUint32(ByteOffset.num_uniform_buffers, true) as UInt32;
  }

  public set uniformBufferCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_uniform_buffers, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true) as UInt32;
  }

  public set props(value: UInt32) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
