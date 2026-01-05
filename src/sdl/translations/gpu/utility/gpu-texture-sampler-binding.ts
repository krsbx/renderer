import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUTextureSamplerBinding } from './types';

export class GPUTextureSamplerBinding implements RawGPUTextureSamplerBinding {
  public static readonly BYTE_SIZE = 16;

  public texture: Pointer;
  public sampler: Pointer;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUTextureSamplerBinding) {
    this.texture = options.texture;
    this.sampler = options.sampler;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUTextureSamplerBinding.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.texture), true);
    view.setBigUint64(8, BigInt(this.sampler), true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      texture: read.ptr(pointer, 0),
      sampler: read.ptr(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUTextureSamplerBinding;

    return new GPUTextureSamplerBinding(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      texture: view.getBigUint64(0, true) as unknown as Pointer,
      sampler: view.getBigUint64(8, true) as unknown as Pointer,
      free: null,
      address: null,
    } as RawGPUTextureSamplerBinding;

    return new GPUTextureSamplerBinding(result);
  }
}
