import { FFIType, type FFIFunction } from 'bun:ffi';

export const AudioStreamDefinition = {
  // AudioStream LoadAudioStream(unsigned int sampleRate, unsigned int sampleSize, unsigned int channels);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsAudioStreamValid(AudioStream stream);
  IsAudioStreamValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadAudioStream(AudioStream stream);
  UnloadAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void UpdateAudioStream(AudioStream stream, const void *data, int frameCount);
  UpdateAudioStream: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // bool IsAudioStreamProcessed(AudioStream stream);
  IsAudioStreamProcessed: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void PlayAudioStream(AudioStream stream);
  PlayAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void PauseAudioStream(AudioStream stream);
  PauseAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void ResumeAudioStream(AudioStream stream);
  ResumeAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool IsAudioStreamPlaying(AudioStream stream);
  IsAudioStreamPlaying: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void StopAudioStream(AudioStream stream);
  StopAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetAudioStreamVolume(AudioStream stream, float volume);
  SetAudioStreamVolume: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetAudioStreamPitch(AudioStream stream, float pitch);
  SetAudioStreamPitch: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetAudioStreamPan(AudioStream stream, float pan);
  SetAudioStreamPan: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
  // void SetAudioStreamBufferSizeDefault(int size);
  SetAudioStreamBufferSizeDefault: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // void SetAudioStreamCallback(AudioStream stream, AudioCallback callback);
  SetAudioStreamCallback: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void AttachAudioStreamProcessor(AudioStream stream, AudioCallback processor);
  AttachAudioStreamProcessor: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DetachAudioStreamProcessor(AudioStream stream, AudioCallback processor);
  DetachAudioStreamProcessor: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void AttachAudioMixedProcessor(AudioCallback processor);
  AttachAudioMixedProcessor: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void DetachAudioMixedProcessor(AudioCallback processor);
  DetachAudioMixedProcessor: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
