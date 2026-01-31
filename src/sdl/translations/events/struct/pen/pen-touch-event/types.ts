import type { EventType } from '@sdl/ffi/constant/events';

export type PenTouchEventType =
  | typeof EventType.PEN_DOWN
  | typeof EventType.PEN_UP;
