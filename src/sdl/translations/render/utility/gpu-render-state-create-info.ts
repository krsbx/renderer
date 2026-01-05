import { ptr, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { GPUTextureSamplerBinding } from '../../gpu/utility/gpu-texture-sampler-binding';
import type { RawGPURenderStateCreateInfo } from './types';

export class GPURenderStateCreateInfo implements RawGPURenderStateCreateInfo {
  public static readonly BYTE_SIZE = 64;

  public fragment_shader: Pointer;
  public num_sampler_bindings: number;
  public sampler_bindings: GPUTextureSamplerBinding[];
  public num_storage_textures: number;
  public storage_textures: Pointer;
  public num_storage_buffers: number;
  public storage_buffers: Pointer;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPURenderStateCreateInfo) {
    this.fragment_shader = options.fragment_shader;
    this.num_sampler_bindings = options.num_sampler_bindings;
    this.sampler_bindings = options.sampler_bindings;
    this.num_storage_textures = options.num_storage_textures;
    this.storage_textures = options.storage_textures;
    this.num_storage_buffers = options.num_storage_buffers;
    this.storage_buffers = options.storage_buffers;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPURenderStateCreateInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    const samplerBindingsBuffers = new Uint8Array(
      this.num_sampler_bindings * GPUTextureSamplerBinding.BYTE_SIZE
    );

    view.setBigUint64(0, BigInt(this.fragment_shader), true);
    view.setUint32(8, this.num_sampler_bindings, true);

    for (let i = 0; i < this.num_sampler_bindings; i++) {
      const offset = i * GPUTextureSamplerBinding.BYTE_SIZE;

      const samplerBinding = this.sampler_bindings[i];

      if (!samplerBinding) continue;

      samplerBindingsBuffers.set(samplerBinding.toMemory(), offset);
    }

    view.setBigUint64(16, BigInt(ptr(samplerBindingsBuffers)), true);
    view.setUint32(24, this.num_storage_textures, true);
    view.setBigUint64(32, BigInt(this.storage_textures), true);
    view.setUint32(40, this.num_storage_buffers, true);
    view.setBigUint64(48, BigInt(this.storage_buffers), true);
    view.setUint32(56, this.props, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const numSamplers = read.u32(pointer, 8);
    const samplerBindingsPtr = read.ptr(pointer, 16) as Pointer | null;
    const samplerBindings: GPUTextureSamplerBinding[] = [];

    if (samplerBindingsPtr && numSamplers > 0) {
      for (let i = 0; i < numSamplers; i++) {
        const offset = BigInt(i) * BigInt(GPUTextureSamplerBinding.BYTE_SIZE);
        const samplerBindingPtr = (BigInt(samplerBindingsPtr) +
          offset) as unknown as Pointer | null;

        if (!samplerBindingPtr) continue;

        samplerBindings.push(
          GPUTextureSamplerBinding.fromPointer(samplerBindingPtr, sdl)
        );
      }
    }

    const result = {
      fragment_shader: read.ptr(pointer, 0),
      num_sampler_bindings: numSamplers,
      sampler_bindings: samplerBindings,
      num_storage_textures: read.u32(pointer, 24),
      storage_textures: read.ptr(pointer, 32),
      num_storage_buffers: read.u32(pointer, 40),
      storage_buffers: read.ptr(pointer, 48),
      props: read.u32(pointer, 56),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPURenderStateCreateInfo;

    return new GPURenderStateCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const numSamplers = view.getUint32(8, true);
    const samplerBindingsPtr = view.getBigUint64(
      16,
      true
    ) as unknown as Pointer;
    const samplerBindings: GPUTextureSamplerBinding[] = [];

    if (samplerBindingsPtr && numSamplers > 0) {
      for (let i = 0; i < numSamplers; i++) {
        const offset = BigInt(i) * BigInt(GPUTextureSamplerBinding.BYTE_SIZE);
        const samplerBindingPtr = (BigInt(samplerBindingsPtr) +
          offset) as unknown as Pointer | null;

        if (!samplerBindingPtr) continue;

        samplerBindings.push(
          GPUTextureSamplerBinding.fromPointer(samplerBindingPtr, sdl)
        );
      }
    }

    const result = {
      fragment_shader: view.getBigUint64(0, true) as unknown as Pointer,
      num_sampler_bindings: numSamplers,
      sampler_bindings: samplerBindings,
      num_storage_textures: view.getUint32(24, true),
      storage_textures: view.getBigUint64(32, true) as unknown as Pointer,
      num_storage_buffers: view.getUint32(40, true),
      storage_buffers: view.getBigUint64(48, true) as unknown as Pointer,
      props: view.getUint32(56, true),
      free: null,
      address: null,
    } as RawGPURenderStateCreateInfo;

    return new GPURenderStateCreateInfo(result);
  }
}
