import { ptr, read, toArrayBuffer, type Pointer } from 'bun:ffi';
import { GPUTextureSamplerBinding } from '../../../gpu/utility';
import { ByteOffset } from './constant';

export class GPURenderStateCreateInfo {
  public static readonly BYTE_SIZE = 64;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public $samplerBindingBuffer: Uint8Array | null;
  public $storageTextureBuffer: Uint8Array | null;
  public $storageBufferBuffer: Uint8Array | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPURenderStateCreateInfo.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.$samplerBindingBuffer = null;
    this.$storageTextureBuffer = null;
    this.$storageBufferBuffer = null;
  }

  public get fragmentShader() {
    const addr = this.$view.getBigUint64(ByteOffset.fragment_shader, true);

    return Number(addr) as Pointer;
  }

  public set fragmentShader(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.fragment_shader, BigInt(value), true);
  }

  public get samplerBindingCount() {
    return this.$view.getInt32(ByteOffset.num_sampler_bindings, true);
  }

  public set samplerBindingCount(value: number) {
    this.$view.setInt32(ByteOffset.num_sampler_bindings, value, true);
  }

  public get samplerBindings() {
    const numSamplers = this.samplerBindingCount;
    const samplerBindingsAddr = this.$view.getBigUint64(
      ByteOffset.sampler_bindings,
      true
    );

    if (!numSamplers || !samplerBindingsAddr || samplerBindingsAddr === 0n)
      return [];

    const bindings: GPUTextureSamplerBinding[] = [];
    const samplerBindingPtr = Number(samplerBindingsAddr) as Pointer;

    for (let i = 0; i < numSamplers; i++) {
      const offset = i * GPUTextureSamplerBinding.BYTE_SIZE;
      const bindingPtr = (samplerBindingPtr + offset) as Pointer;

      bindings.push(new GPUTextureSamplerBinding(bindingPtr));
    }

    return bindings;
  }

  public set samplerBindings(value: GPUTextureSamplerBinding[]) {
    this.samplerBindingCount = value.length;

    if (this.samplerBindingCount === 0) {
      this.$view.setBigUint64(ByteOffset.sampler_bindings, 0n, true);
      this.$samplerBindingBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      GPUTextureSamplerBinding.BYTE_SIZE * this.samplerBindingCount
    );

    for (let i = 0; i < this.samplerBindingCount; i++) {
      const offset = i * GPUTextureSamplerBinding.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$samplerBindingBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.sampler_bindings,
      BigInt(ptr(this.$samplerBindingBuffer)),
      true
    );
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

    const textures: Pointer[] = [];
    const texturePtr = Number(addr) as Pointer;

    for (let i = 0; i < numTextures; i++) {
      const texPtr = read.ptr(texturePtr, i * 8) as Pointer;

      textures.push(texPtr);
    }

    return textures;
  }

  public set storageTextures(value: Pointer[]) {
    this.storageTextureCount = value.length;

    if (this.storageTextureCount === 0) {
      this.$view.setBigUint64(ByteOffset.storage_textures, 0n, true);
      this.$storageTextureBuffer = null;
      return;
    }

    const buffer = new Uint8Array(this.storageTextureCount * 8);
    const view = new DataView(buffer.buffer);

    for (let i = 0; i < this.storageTextureCount; i++) {
      const addr = value[i]!;

      view.setBigUint64(i * 8, BigInt(addr), true);
    }

    this.$storageTextureBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.storage_textures,
      BigInt(ptr(this.$storageTextureBuffer)),
      true
    );
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

    const buffers: Pointer[] = [];
    const bufferPtr = Number(addr) as Pointer;

    for (let i = 0; i < numBuffers; i++) {
      const bufPtr = read.ptr(bufferPtr, i * 8) as Pointer;

      buffers.push(bufPtr);
    }

    return buffers;
  }

  public set storageBuffers(value: Pointer[]) {
    this.storageBufferCount = value.length;

    if (this.storageBufferCount === 0) {
      this.$view.setBigUint64(ByteOffset.storage_buffers, 0n, true);
      this.$storageBufferBuffer = null;
      return;
    }

    const buffer = new Uint8Array(this.storageBufferCount * 8);
    const view = new DataView(buffer.buffer);

    for (let i = 0; i < this.storageBufferCount; i++) {
      const addr = value[i]!;

      view.setBigUint64(i * 8, BigInt(addr), true);
    }

    this.$storageBufferBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.storage_buffers,
      BigInt(ptr(this.$storageBufferBuffer)),
      true
    );
  }
}
