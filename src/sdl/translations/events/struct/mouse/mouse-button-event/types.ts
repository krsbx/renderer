import type { EventType } from '@sdl/ffi/constant/events';

export type MouseButtonEventType =
  | typeof EventType.MOUSE_BUTTON_DOWN
  | typeof EventType.MOUSE_BUTTON_UP;
