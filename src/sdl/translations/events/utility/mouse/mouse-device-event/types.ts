import type { EventType } from '../../../../../ffi/events/constant';

export type MouseDeviceEventType =
  | typeof EventType.MOUSE_ADDED
  | typeof EventType.MOUSE_REMOVED;
