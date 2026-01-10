import type { EventType } from '../../../../../ffi/events/constant';

export type MouseButtonEventType =
  | EventType.MOUSE_BUTTON_DOWN
  | EventType.MOUSE_BUTTON_UP;
