import { FFIType, type FFIFunction } from 'bun:ffi';

export const AudioDeviceDefinition = {
  // void InitAudioDevice(void);
  InitAudioDevice: {
    args: [],
    returns: FFIType.void,
  },
  // void CloseAudioDevice(void);
  CloseAudioDevice: {
    args: [],
    returns: FFIType.void,
  },
  // bool IsAudioDeviceReady(void);
  IsAudioDeviceReady: {
    args: [],
    returns: FFIType.bool,
  },
  // void SetMasterVolume(float volume);
  SetMasterVolume: {
    args: [FFIType.f32],
    returns: FFIType.void,
  },
  // float GetMasterVolume(void);
  GetMasterVolume: {
    args: [],
    returns: FFIType.f32,
  },
} satisfies Record<string, FFIFunction>;
