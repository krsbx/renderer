import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { Wave } from '../struct';

export function loadWave(this: RayLib, fileName: string) {
  const wave = Wave.create();

  this.symbols.LoadWave(stringToCString(fileName).ptr, wave.$memory);

  return wave;
}

export function loadWaveFromMemory(
  this: RayLib,
  options: {
    fileType: string;
    data: Uint8Array;
  }
) {
  const wave = Wave.create();

  this.symbols.LoadWaveFromMemory(
    stringToCString(options.fileType).ptr,
    options.data,
    options.data.byteLength,
    wave.$memory
  );

  return wave;
}

export function isWaveValid(this: RayLib, wave: Wave) {
  return this.symbols.IsWaveValid(wave.$memory);
}

export function unloadWave(this: RayLib, wave: Wave) {
  this.symbols.UnloadWave(wave.$memory);
}

export function exportWave(
  this: RayLib,
  options: {
    wave: Wave;
    fileName: string;
  }
) {
  return this.symbols.ExportWave(
    options.wave.$memory,
    stringToCString(options.fileName).ptr
  );
}

export function exportWaveAsCode(
  this: RayLib,
  options: {
    wave: Wave;
    fileName: string;
  }
) {
  return this.symbols.ExportWaveAsCode(
    options.wave.$memory,
    stringToCString(options.fileName).ptr
  );
}

export function waveCopy(this: RayLib, wave: Wave) {
  const copy = Wave.create();

  this.symbols.WaveCopy(wave.$memory, copy.$memory);

  return copy;
}

export function waveCrop(
  this: RayLib,
  options: {
    wave: Wave;
    initFrame: number;
    finalFrame: number;
  }
) {
  this.symbols.WaveCrop(
    options.wave.$memory,
    options.initFrame,
    options.finalFrame
  );
}

export function waveFormat(
  this: RayLib,
  options: {
    wave: Wave;
    sampleRate: number;
    sampleSize: number;
    channels: number;
  }
) {
  this.symbols.WaveFormat(
    options.wave.$memory,
    options.sampleRate,
    options.sampleSize,
    options.channels
  );
}

export function loadWaveSamples(this: RayLib, wave: Wave) {
  const ptr = this.symbols.LoadWaveSamples(wave.$memory);

  if (!ptr) return null;

  const sampleCount = wave.frameCount * wave.channels;

  const samples = CStruct.readArrayPrimitive(ptr, sampleCount, 'f32').slice();

  this.symbols.UnloadWaveSamples(ptr);

  return samples;
}

export function unloadWaveSamples(this: RayLib, samples: Pointer) {
  this.symbols.UnloadWaveSamples(samples);
}
