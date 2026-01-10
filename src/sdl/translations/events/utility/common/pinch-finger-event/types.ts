import type { EventType } from '../../../../../ffi/events/constant';

export type PinchFingerEventType =
  | EventType.PINCH_BEGIN
  | EventType.PINCH_UPDATE
  | EventType.PINCH_END;
