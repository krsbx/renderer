import type { AudioStream } from '@/sdl/types/definition';
import type { Int32 } from '@/types/primitive';
import type { AudioSpec } from '../struct';

export interface AudioStreamCallbackFn {
  (options: {
    stream: AudioStream;
    additionalAmount: Int32;
    totalAmount: Int32;
  }): void;
}

export interface AudioPostmixCallbackFn {
  (options: { spec: AudioSpec; buffer: Float32Array }): void;
}

export interface AudioStreamDataCompleteCallbackFn {
  (buffer: Uint8Array): void;
}
