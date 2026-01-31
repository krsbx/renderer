import type { EventType } from '@sdl/ffi/constant/events';

export type GamepadDeviceEventType =
  | typeof EventType.GAMEPAD_ADDED
  | typeof EventType.GAMEPAD_REMOVED
  | typeof EventType.GAMEPAD_REMAPPED
  | typeof EventType.GAMEPAD_STEAM_HANDLE_UPDATED;
