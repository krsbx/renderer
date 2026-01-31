import type { EventType } from '@sdl/ffi/constant/events';

export type KeyboardEventType =
  | typeof EventType.KEY_DOWN
  | typeof EventType.KEY_UP;
