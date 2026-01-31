import type { EventType } from '@sdl/ffi/constant/events';

export type KeyboardDeviceEventType =
  | typeof EventType.KEYBOARD_ADDED
  | typeof EventType.KEYBOARD_REMOVED;
