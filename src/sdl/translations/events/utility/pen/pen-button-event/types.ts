import type { EventType } from '../../../../../ffi/events/constant';

export type PenButtonEventType =
  | typeof EventType.PEN_BUTTON_DOWN
  | typeof EventType.PEN_BUTTON_UP;
