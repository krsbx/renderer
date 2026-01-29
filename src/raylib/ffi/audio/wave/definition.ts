import { FFIType, type FFIFunction } from 'bun:ffi';

export const WaveDefinition = {
  // Wave LoadWave(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Wave LoadWaveFromMemory(const char *fileType, const unsigned char *fileData, int dataSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsWaveValid(Wave wave);
  IsWaveValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadWave(Wave wave);
  UnloadWave: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool ExportWave(Wave wave, const char *fileName);
  ExportWave: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool ExportWaveAsCode(Wave wave, const char *fileName);
  ExportWaveAsCode: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // Wave WaveCopy(Wave wave);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // void WaveCrop(Wave *wave, int initFrame, int finalFrame);
  WaveCrop: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void WaveFormat(Wave *wave, int sampleRate, int sampleSize, int channels);
  WaveFormat: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // float *LoadWaveSamples(Wave wave);
  LoadWaveSamples: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UnloadWaveSamples(float *samples);
  UnloadWaveSamples: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
