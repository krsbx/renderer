import type { EventType } from '@sdl/ffi/constant/events';

export type PenButtonEventType =
  | typeof EventType.PEN_BUTTON_DOWN
  | typeof EventType.PEN_BUTTON_UP;
