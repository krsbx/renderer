import type { EventType } from '@sdl/ffi/constant/events';

export type GamepadButtonEventType =
  | typeof EventType.GAMEPAD_BUTTON_DOWN
  | typeof EventType.GAMEPAD_BUTTON_UP;
