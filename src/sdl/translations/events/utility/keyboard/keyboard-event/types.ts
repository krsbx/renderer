import type { EventType } from '../../../../../ffi/events/constant';

export type KeyboardEventType =
  | typeof EventType.KEY_DOWN
  | typeof EventType.KEY_UP;
