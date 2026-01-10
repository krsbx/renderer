import type { EventType } from '../../../../../ffi/events/constant';

export type GamepadTouchpadEventType =
  | EventType.GAMEPAD_TOUCHPAD_DOWN
  | EventType.GAMEPAD_TOUCHPAD_MOTION
  | EventType.GAMEPAD_TOUCHPAD_UP;
