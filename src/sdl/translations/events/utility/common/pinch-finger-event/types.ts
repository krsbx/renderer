import type { EventType } from '../../../../../ffi/events/constant';

export type PinchFingerEventType =
  | typeof EventType.PINCH_BEGIN
  | typeof EventType.PINCH_UPDATE
  | typeof EventType.PINCH_END;
