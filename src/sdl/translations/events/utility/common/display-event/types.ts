import type { EventType } from '../../../../../ffi/events/constant';

export type DisplayEventType =
  | EventType.DISPLAY_ORIENTATION
  | EventType.DISPLAY_ADDED
  | EventType.DISPLAY_REMOVED
  | EventType.DISPLAY_MOVED
  | EventType.DISPLAY_DESKTOP_MODE_CHANGED
  | EventType.DISPLAY_CURRENT_MODE_CHANGED
  | EventType.DISPLAY_CONTENT_SCALE_CHANGED
  | EventType.DISPLAY_USABLE_BOUNDS_CHANGED;
