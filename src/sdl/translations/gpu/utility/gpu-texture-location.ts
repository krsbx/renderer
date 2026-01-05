import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUTextureLocation } from './types';

export class GPUTextureLocation implements RawGPUTextureLocation {
  public static readonly BYTE_SIZE = 32;

  public texture: Pointer;
  public mip_level: number;
  public layer: number;
  public x: number;
  public y: number;
  public z: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUTextureLocation) {
    this.texture = options.texture;
    this.mip_level = options.mip_level;
    this.layer = options.layer;
    this.x = options.x;
    this.y = options.y;
    this.z = options.z;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUTextureLocation.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.texture), true);
    view.setUint32(8, this.mip_level, true);
    view.setUint32(12, this.layer, true);
    view.setUint32(16, this.x, true);
    view.setUint32(20, this.y, true);
    view.setUint32(24, this.z, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      texture: read.ptr(pointer, 0),
      mip_level: read.u32(pointer, 8),
      layer: read.u32(pointer, 12),
      x: read.u32(pointer, 16),
      y: read.u32(pointer, 20),
      z: read.u32(pointer, 24),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUTextureLocation;

    return new GPUTextureLocation(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      texture: view.getBigUint64(0, true) as unknown as Pointer,
      mip_level: view.getUint32(8, true),
      layer: view.getUint32(12, true),
      x: view.getUint32(16, true),
      y: view.getUint32(20, true),
      z: view.getUint32(24, true),
      free: null,
      address: null,
    } as RawGPUTextureLocation;

    return new GPUTextureLocation(result);
  }
}
