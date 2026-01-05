import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUTextureFormat } from '../../../ffi/gpu/constant';
import { GPUColorTargetBlendState } from './gpu-color-target-blend-state';
import type { RawGPUColorTargetDescription } from './types';

export class GPUColorTargetDescription implements RawGPUColorTargetDescription {
  public static readonly BYTE_SIZE = 36;

  public format: GPUTextureFormat;
  public blend_state: GPUColorTargetBlendState;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUColorTargetDescription) {
    this.format = options.format;
    this.blend_state = options.blend_state;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUColorTargetDescription.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.format, true);

    buffer.set(this.blend_state.toMemory(), 4);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      format: read.i32(pointer, 0),
      blend_state: GPUColorTargetBlendState.fromPointer(
        (BigInt(pointer) + 4n) as unknown as Pointer,
        sdl
      ),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUColorTargetDescription;

    return new GPUColorTargetDescription(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      format: view.getInt32(0, true),
      blend_state: GPUColorTargetBlendState.fromMemory(data.slice(4)),
      free: null,
      address: null,
    } as RawGPUColorTargetDescription;

    return new GPUColorTargetDescription(result);
  }
}
