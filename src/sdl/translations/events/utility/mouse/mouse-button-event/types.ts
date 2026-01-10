import type { EventType } from '../../../../../ffi/events/constant';

export type MouseButtonEventType =
  | typeof EventType.MOUSE_BUTTON_DOWN
  | typeof EventType.MOUSE_BUTTON_UP;
