import type { EventType } from '@sdl/ffi/constant/events';

export type JoyButtonEventType =
  | typeof EventType.JOYSTICK_BUTTON_DOWN
  | typeof EventType.JOYSTICK_BUTTON_UP;
