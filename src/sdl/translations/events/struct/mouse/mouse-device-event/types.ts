import type { EventType } from '@sdl/ffi/constant/events';

export type MouseDeviceEventType =
  | typeof EventType.MOUSE_ADDED
  | typeof EventType.MOUSE_REMOVED;
