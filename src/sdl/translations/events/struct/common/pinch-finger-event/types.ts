import type { EventType } from '@sdl/ffi/constant/events';

export type PinchFingerEventType =
  | typeof EventType.PINCH_BEGIN
  | typeof EventType.PINCH_UPDATE
  | typeof EventType.PINCH_END;
