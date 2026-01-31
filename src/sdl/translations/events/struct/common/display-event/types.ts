import type { EventType } from '@sdl/ffi/constant/events';

export type DisplayEventType =
  | typeof EventType.DISPLAY_ORIENTATION
  | typeof EventType.DISPLAY_ADDED
  | typeof EventType.DISPLAY_REMOVED
  | typeof EventType.DISPLAY_MOVED
  | typeof EventType.DISPLAY_DESKTOP_MODE_CHANGED
  | typeof EventType.DISPLAY_CURRENT_MODE_CHANGED
  | typeof EventType.DISPLAY_CONTENT_SCALE_CHANGED
  | typeof EventType.DISPLAY_USABLE_BOUNDS_CHANGED;
