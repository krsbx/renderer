import type { EventType } from '../../../../../ffi/events/constant';

export type WindowEventType =
  | typeof EventType.WINDOW_SHOWN
  | typeof EventType.WINDOW_HIDDEN
  | typeof EventType.WINDOW_EXPOSED
  | typeof EventType.WINDOW_MOVED
  | typeof EventType.WINDOW_RESIZED
  | typeof EventType.WINDOW_PIXEL_SIZE_CHANGED
  | typeof EventType.WINDOW_METAL_VIEW_RESIZED
  | typeof EventType.WINDOW_MINIMIZED
  | typeof EventType.WINDOW_MAXIMIZED
  | typeof EventType.WINDOW_RESTORED
  | typeof EventType.WINDOW_MOUSE_ENTER
  | typeof EventType.WINDOW_MOUSE_LEAVE
  | typeof EventType.WINDOW_FOCUS_GAINED
  | typeof EventType.WINDOW_FOCUS_LOST
  | typeof EventType.WINDOW_CLOSE_REQUESTED
  | typeof EventType.WINDOW_HIT_TEST
  | typeof EventType.WINDOW_ICCPROF_CHANGED
  | typeof EventType.WINDOW_DISPLAY_CHANGED
  | typeof EventType.WINDOW_DISPLAY_SCALE_CHANGED
  | typeof EventType.WINDOW_SAFE_AREA_CHANGED
  | typeof EventType.WINDOW_OCCLUDED
  | typeof EventType.WINDOW_ENTER_FULLSCREEN
  | typeof EventType.WINDOW_LEAVE_FULLSCREEN
  | typeof EventType.WINDOW_DESTROYED
  | typeof EventType.WINDOW_HDR_STATE_CHANGED;
