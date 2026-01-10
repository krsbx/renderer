import type { EventType } from '../../../../../ffi/events/constant';

export type JoyDeviceEventType =
  | typeof EventType.JOYSTICK_ADDED
  | typeof EventType.JOYSTICK_REMOVED;
