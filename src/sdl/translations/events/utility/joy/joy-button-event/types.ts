import type { EventType } from '../../../../../ffi/events/constant';

export type JoyButtonEventType =
  | typeof EventType.JOYSTICK_BUTTON_DOWN
  | typeof EventType.JOYSTICK_BUTTON_UP;
