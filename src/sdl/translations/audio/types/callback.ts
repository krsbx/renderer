import type { AudioStream } from '@/sdl/types/definition';
import type { AudioSpec } from '../struct';

export interface AudioStreamCallbackFn {
  (options: {
    stream: AudioStream;
    additionalAmount: number;
    totalAmount: number;
  }): void;
}

export interface AudioPostmixCallbackFn {
  (options: { spec: AudioSpec; buffer: Float32Array }): void;
}

export interface AudioStreamDataCompleteCallbackFn {
  (buffer: Uint8Array): void;
}
