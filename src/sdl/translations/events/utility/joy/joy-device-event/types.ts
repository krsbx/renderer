import type { EventType } from '../../../../../ffi/events/constant';

export type JoyDeviceEventType =
  | EventType.JOYSTICK_ADDED
  | EventType.JOYSTICK_REMOVED;
