import type { EventType } from '../../../../../ffi/events/constant';

export type KeyboardDeviceEventType =
  | EventType.KEYBOARD_ADDED
  | EventType.KEYBOARD_REMOVED;
