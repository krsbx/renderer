import type { EventType } from '@sdl/ffi/constant/events';

export type AudioDeviceEventType =
  | typeof EventType.AUDIO_DEVICE_ADDED
  | typeof EventType.AUDIO_DEVICE_REMOVED
  | typeof EventType.AUDIO_DEVICE_FORMAT_CHANGED;
