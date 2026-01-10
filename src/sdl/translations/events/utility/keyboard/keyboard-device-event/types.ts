import type { EventType } from '../../../../../ffi/events/constant';

export type KeyboardDeviceEventType =
  | typeof EventType.KEYBOARD_ADDED
  | typeof EventType.KEYBOARD_REMOVED;
