import type { EventType } from '../../../../../ffi/events/constant';

export type PenTouchEventType =
  | typeof EventType.PEN_DOWN
  | typeof EventType.PEN_UP;
