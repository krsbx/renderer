import type { EventType } from '../../../../../ffi/events/constant';

export type TouchFingerEventType =
  | typeof EventType.FINGER_DOWN
  | typeof EventType.FINGER_UP
  | typeof EventType.FINGER_MOTION
  | typeof EventType.FINGER_CANCELED;
