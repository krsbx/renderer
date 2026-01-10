import type { EventType } from '../../../../../ffi/events/constant';

export type GamepadTouchpadEventType =
  | typeof EventType.GAMEPAD_TOUCHPAD_DOWN
  | typeof EventType.GAMEPAD_TOUCHPAD_MOTION
  | typeof EventType.GAMEPAD_TOUCHPAD_UP;
