import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUBlitRegion } from './types';

export class GPUBlitRegion implements RawGPUBlitRegion {
  public texture: Pointer;
  public mip_level: number;
  public layer_or_depth_plane: number;
  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUBlitRegion) {
    this.texture = options.texture;
    this.mip_level = options.mip_level;
    this.layer_or_depth_plane = options.layer_or_depth_plane;
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUBlitRegion.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.texture), true);
    view.setUint32(8, this.mip_level, true);
    view.setUint32(12, this.layer_or_depth_plane, true);
    view.setUint32(16, this.x, true);
    view.setUint32(20, this.y, true);
    view.setUint32(24, this.w, true);
    view.setUint32(28, this.h, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(32);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      texture: read.ptr(pointer, 0),
      mip_level: read.u32(pointer, 8),
      layer_or_depth_plane: read.u32(pointer, 12),
      x: read.u32(pointer, 16),
      y: read.u32(pointer, 20),
      w: read.u32(pointer, 24),
      h: read.u32(pointer, 28),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUBlitRegion;

    return new GPUBlitRegion(result);
  }

  public static fromMemory(buffer: Uint8Array) {
    const view = new DataView(
      buffer.buffer,
      buffer.byteOffset,
      buffer.byteLength
    );

    const result = {
      texture: view.getBigUint64(0, true) as unknown as Pointer,
      mip_level: view.getUint32(8, true),
      layer_or_depth_plane: view.getUint32(12, true),
      x: view.getUint32(16, true),
      y: view.getUint32(20, true),
      w: view.getUint32(24, true),
      h: view.getUint32(28, true),
      free: null,
      address: null,
    } as RawGPUBlitRegion;

    return new GPUBlitRegion(result);
  }
}
