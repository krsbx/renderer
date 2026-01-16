import type { EventType } from '../../../../../ffi/events/constant';

export type GamepadButtonEventType =
  | typeof EventType.GAMEPAD_BUTTON_DOWN
  | typeof EventType.GAMEPAD_BUTTON_UP;
