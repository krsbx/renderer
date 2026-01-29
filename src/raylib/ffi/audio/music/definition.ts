import { FFIType, type FFIFunction } from 'bun:ffi';

export const MusicDefinition = {
  // Music LoadMusicStream(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Music LoadMusicStreamFromMemory(const char *fileType, const unsigned char *data, int dataSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsMusicValid(Music music);
  IsMusicValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadMusicStream(Music music);
  UnloadMusicStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void PlayMusicStream(Music music);
  PlayMusicStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool IsMusicStreamPlaying(Music music);
  IsMusicStreamPlaying: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UpdateMusicStream(Music music);
  UpdateMusicStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void StopMusicStream(Music music);
  StopMusicStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void PauseMusicStream(Music music);
  PauseMusicStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ResumeMusicStream(Music music);
  ResumeMusicStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SeekMusicStream(Music music, float position);
  SeekMusicStream: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetMusicVolume(Music music, float volume);
  SetMusicVolume: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetMusicPitch(Music music, float pitch);
  SetMusicPitch: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetMusicPan(Music music, float pan);
  SetMusicPan: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // float GetMusicTimeLength(Music music);
  GetMusicTimeLength: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // float GetMusicTimePlayed(Music music);
  GetMusicTimePlayed: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
} satisfies Record<string, FFIFunction>;
