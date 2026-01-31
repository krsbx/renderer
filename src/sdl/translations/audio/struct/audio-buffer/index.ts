import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../../..';
import type { AudioSpec } from '../audio-spec';

export class AudioBuffer {
  public readonly $address: Pointer;
  public readonly $length: number;
  public readonly $spec: AudioSpec;

  private readonly $sdl: SDL;
  private $isFreed: boolean;

  public constructor(options: {
    sdl: SDL;
    address: Pointer;
    length: number;
    spec: AudioSpec;
  }) {
    this.$sdl = options.sdl;
    this.$address = options.address;
    this.$length = options.length;
    this.$spec = options.spec;
    this.$isFreed = false;
  }

  public get isFreed() {
    return this.$isFreed;
  }

  public $free(sdl: SDL = this.$sdl) {
    if (this.$isFreed || !this.$address) return;

    this.$isFreed = true;

    sdl.symbols.SDL_free(this.$address);
  }
}
