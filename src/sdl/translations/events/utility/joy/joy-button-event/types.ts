import type { EventType } from '../../../../../ffi/events/constant';

export type JoyButtonEventType =
  | EventType.JOYSTICK_BUTTON_DOWN
  | EventType.JOYSTICK_BUTTON_UP;
