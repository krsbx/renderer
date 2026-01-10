import type { EventType } from '../../../../../ffi/events/constant';

export type PenButtonEventType =
  | EventType.PEN_BUTTON_DOWN
  | EventType.PEN_BUTTON_UP;
