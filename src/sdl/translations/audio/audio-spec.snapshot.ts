import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import { ByteOffset } from './constant';
import type { RawAudioSpec } from './types';

export class AudioSpec implements RawAudioSpec {
  public static readonly BYTE_SIZE = 12;

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

    view.setUint32(ByteOffset.format, this.format, true);
    view.setInt32(ByteOffset.channels, this.channels, true);
    view.setInt32(ByteOffset.freq, this.freq, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      format: read.u32(pointer, ByteOffset.format),
      channels: read.i32(pointer, ByteOffset.channels),
      freq: read.i32(pointer, ByteOffset.freq),
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
      format: view.getUint32(ByteOffset.format, true),
      channels: view.getInt32(ByteOffset.channels, true),
      freq: view.getInt32(ByteOffset.freq, true),
      free: null,
      address: null,
    } as RawAudioSpec;

    return new AudioSpec(result);
  }
}
