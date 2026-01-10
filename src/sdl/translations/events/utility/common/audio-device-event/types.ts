import type { EventType } from '../../../../../ffi/events/constant';

export type AudioDeviceEventType =
  | EventType.AUDIO_DEVICE_ADDED
  | EventType.AUDIO_DEVICE_REMOVED
  | EventType.AUDIO_DEVICE_FORMAT_CHANGED;
