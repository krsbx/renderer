import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import type { RawAudioSpec } from './types';

export class AudioSpec implements RawAudioSpec {
  public format: number;
  public channels: number;
  public freq: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawAudioSpec) {
    this.format = options.format;
    this.channels = options.channels;
    this.freq = options.freq;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = AudioSpec.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.format, true);
    view.setInt32(4, this.channels, true);
    view.setInt32(8, this.freq, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(12);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      format: read.u32(pointer, 0),
      channels: read.i32(pointer, 4),
      freq: read.i32(pointer, 8),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawAudioSpec;

    return new AudioSpec(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      format: view.getUint32(0, true),
      channels: view.getInt32(4, true),
      freq: view.getInt32(8, true),
      free: null,
      address: null,
    } as RawAudioSpec;

    return new AudioSpec(result);
  }
}
