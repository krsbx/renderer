import type { EventType } from '../../../../../ffi/events/constant';

export type GamepadDeviceEventType =
  | EventType.GAMEPAD_ADDED
  | EventType.GAMEPAD_REMOVED
  | EventType.GAMEPAD_REMAPPED
  | EventType.GAMEPAD_STEAM_HANDLE_UPDATED;
