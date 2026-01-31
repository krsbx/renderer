import type { EventType } from '@sdl/ffi/constant/events';

export type GamepadTouchpadEventType =
  | typeof EventType.GAMEPAD_TOUCHPAD_DOWN
  | typeof EventType.GAMEPAD_TOUCHPAD_MOTION
  | typeof EventType.GAMEPAD_TOUCHPAD_UP;
