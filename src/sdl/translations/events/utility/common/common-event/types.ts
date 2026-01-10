import type { EventType } from '../../../../../ffi/events/constant';

export type CommonEventType =
  | EventType.TERMINATING
  | EventType.LOW_MEMORY
  | EventType.WILL_ENTER_BACKGROUND
  | EventType.DID_ENTER_BACKGROUND
  | EventType.WILL_ENTER_FOREGROUND
  | EventType.DID_ENTER_FOREGROUND
  | EventType.LOCALE_CHANGED
  | EventType.SYSTEM_THEME_CHANGED
  | EventType.KEYMAP_CHANGED
  | EventType.SCREEN_KEYBOARD_SHOWN
  | EventType.SCREEN_KEYBOARD_HIDDEN
  | EventType.JOYSTICK_UPDATE_COMPLETE
  | EventType.GAMEPAD_UPDATE_COMPLETE
  | EventType.POLL_SENTINEL;
