import type { EventType } from '../../../../../ffi/events/constant';

export type GamepadButtonEventType =
  | EventType.GAMEPAD_BUTTON_DOWN
  | EventType.GAMEPAD_BUTTON_UP;
