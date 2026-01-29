import { FFIType, type FFIFunction } from 'bun:ffi';

export const SoundDefinition = {
  // Sound LoadSound(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Sound LoadSoundFromWave(Wave wave);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Sound LoadSoundAlias(Sound source);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsSoundValid(Sound sound);
  IsSoundValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UpdateSound(Sound sound, const void *data, int sampleCount);
  UpdateSound: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void UnloadSound(Sound sound);
  UnloadSound: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void UnloadSoundAlias(Sound alias);
  UnloadSoundAlias: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void PlaySound(Sound sound);
  PlaySound: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void StopSound(Sound sound);
  StopSound: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void PauseSound(Sound sound);
  PauseSound: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ResumeSound(Sound sound);
  ResumeSound: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool IsSoundPlaying(Sound sound);
  IsSoundPlaying: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SetSoundVolume(Sound sound, float volume);
  SetSoundVolume: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetSoundPitch(Sound sound, float pitch);
  SetSoundPitch: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetSoundPan(Sound sound, float pan);
  SetSoundPan: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
