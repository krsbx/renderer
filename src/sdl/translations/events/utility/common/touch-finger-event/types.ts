import type { EventType } from '../../../../../ffi/events/constant';

export type TouchFingerEventType =
  | EventType.FINGER_DOWN
  | EventType.FINGER_UP
  | EventType.FINGER_MOTION
  | EventType.FINGER_CANCELED;
