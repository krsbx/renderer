import type { EventType } from '@sdl/ffi/constant/events';

export type JoyDeviceEventType =
  | typeof EventType.JOYSTICK_ADDED
  | typeof EventType.JOYSTICK_REMOVED;
