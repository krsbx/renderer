import type { EventType } from '../../../../../ffi/events/constant';

export type MouseDeviceEventType =
  | EventType.MOUSE_ADDED
  | EventType.MOUSE_REMOVED;
