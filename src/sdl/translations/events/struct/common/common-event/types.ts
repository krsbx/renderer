import type { EventType } from '@sdl/ffi/constant/events';

export type CommonEventType =
  | typeof EventType.TERMINATING
  | typeof EventType.LOW_MEMORY
  | typeof EventType.WILL_ENTER_BACKGROUND
  | typeof EventType.DID_ENTER_BACKGROUND
  | typeof EventType.WILL_ENTER_FOREGROUND
  | typeof EventType.DID_ENTER_FOREGROUND
  | typeof EventType.LOCALE_CHANGED
  | typeof EventType.SYSTEM_THEME_CHANGED
  | typeof EventType.KEYMAP_CHANGED
  | typeof EventType.SCREEN_KEYBOARD_SHOWN
  | typeof EventType.SCREEN_KEYBOARD_HIDDEN
  | typeof EventType.JOYSTICK_UPDATE_COMPLETE
  | typeof EventType.GAMEPAD_UPDATE_COMPLETE
  | typeof EventType.POLL_SENTINEL;
