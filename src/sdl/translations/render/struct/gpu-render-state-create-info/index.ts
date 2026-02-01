import type { GPUBuffer, GPUShader, GPUTexture } from '@/sdl/types/definition';
import { BaseStruct } from '@basestruct';
import { CStruct } from '@utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { GPUTextureSamplerBinding } from '../../../gpu/struct';
import { ByteOffset } from './constant';

export class GPURenderStateCreateInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 64;

  public $samplerBindingBuffer: Uint8Array | null = null;
  public $storageTextureBuffer: BigUint64Array | null = null;
  public $storageBufferBuffer: BigUint64Array | null = null;

  public get fragmentShader() {
    const addr = this.$view.getBigUint64(ByteOffset.fragment_shader, true);

    return Number(addr) as GPUShader;
  }

  public set fragmentShader(value: GPUShader) {
    this.$view.setBigUint64(ByteOffset.fragment_shader, BigInt(value), true);
  }

  public get samplerBindingCount() {
    return this.$view.getInt32(ByteOffset.num_sampler_bindings, true);
  }

  public set samplerBindingCount(value: number) {
    this.$view.setInt32(ByteOffset.num_sampler_bindings, value, true);
  }

  public get samplerBindings() {
    if (!this.samplerBindingCount) return [];

    const samplerBindingsAddr = this.$view.getBigUint64(
      ByteOffset.sampler_bindings,
      true
    );

    if (!samplerBindingsAddr || samplerBindingsAddr === 0n) return [];

    const samplerBindingPtr = Number(samplerBindingsAddr) as Pointer;

    return CStruct.readArray(
      GPUTextureSamplerBinding,
      samplerBindingPtr,
      this.samplerBindingCount
    );
  }

  public set samplerBindings(value: GPUTextureSamplerBinding[]) {
    this.samplerBindingCount = value.length;

    if (this.samplerBindingCount === 0) {
      this.$view.setBigUint64(ByteOffset.sampler_bindings, 0n, true);
      this.$samplerBindingBuffer = null;
      return;
    }

    const { address, buffer } = CStruct.writeArray(
      value,
      GPUTextureSamplerBinding.BYTE_SIZE
    );

    this.$samplerBindingBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.sampler_bindings, BigInt(address), true);
  }

  public get storageTextureCount() {
    return this.$view.getInt32(ByteOffset.num_storage_textures, true);
  }

  public set storageTextureCount(value: number) {
    this.$view.setInt32(ByteOffset.num_storage_textures, value, true);
  }

  public get storageTextures() {
    const numTextures = this.storageTextureCount;
    const addr = this.$view.getBigUint64(ByteOffset.storage_textures, true);

    if (!numTextures || !addr || addr === 0n) return [];

    const texturePtr = Number(addr) as Pointer;

    return CStruct.readArrayPrimitive(
      texturePtr,
      numTextures,
      'ptr'
    ) as GPUTexture[];
  }

  public set storageTextures(value: GPUTexture[]) {
    this.storageTextureCount = value.length;

    if (this.storageTextureCount === 0) {
      this.$view.setBigUint64(ByteOffset.storage_textures, 0n, true);
      this.$storageTextureBuffer = null;
      return;
    }

    const { buffer, address } = CStruct.writeArrayPointer(value);

    this.$storageTextureBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.storage_textures, BigInt(address), true);
  }

  public get storageBufferCount() {
    return this.$view.getInt32(ByteOffset.num_storage_buffers, true);
  }

  public set storageBufferCount(value: number) {
    this.$view.setInt32(ByteOffset.num_storage_buffers, value, true);
  }

  public get storageBuffers() {
    const numBuffers = this.storageBufferCount;
    const addr = this.$view.getBigUint64(ByteOffset.storage_buffers, true);

    if (!numBuffers || !addr || addr === 0n) return [];

    const bufferPtr = Number(addr) as Pointer;

    return CStruct.readArrayPrimitive(
      bufferPtr,
      numBuffers,
      'ptr'
    ) as GPUBuffer[];
  }

  public set storageBuffers(value: GPUBuffer[]) {
    this.storageBufferCount = value.length;

    if (this.storageBufferCount === 0) {
      this.$view.setBigUint64(ByteOffset.storage_buffers, 0n, true);
      this.$storageBufferBuffer = null;
      return;
    }

    const { buffer, address } = CStruct.writeArrayPointer(value);

    this.$storageBufferBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.storage_buffers, BigInt(address), true);
  }
}
