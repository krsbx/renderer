import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUViewport } from './types';

export class GPUViewport implements RawGPUViewport {
  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public min_depth: number;
  public max_depth: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUViewport) {
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.min_depth = options.min_depth;
    this.max_depth = options.max_depth;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUViewport.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setFloat32(0, this.x);
    view.setFloat32(4, this.y);
    view.setFloat32(8, this.w);
    view.setFloat32(12, this.h);
    view.setFloat32(16, this.min_depth);
    view.setFloat32(20, this.max_depth);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(24);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      x: read.f32(pointer, 0),
      y: read.f32(pointer, 4),
      w: read.f32(pointer, 8),
      h: read.f32(pointer, 12),
      min_depth: read.f32(pointer, 16),
      max_depth: read.f32(pointer, 20),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUViewport;

    return new GPUViewport(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      x: view.getFloat32(0, true),
      y: view.getFloat32(4, true),
      w: view.getFloat32(8, true),
      h: view.getFloat32(12, true),
      min_depth: view.getFloat32(16, true),
      max_depth: view.getFloat32(20, true),
      free: null,
      address: null,
    } as RawGPUViewport;

    return new GPUViewport(result);
  }
}
