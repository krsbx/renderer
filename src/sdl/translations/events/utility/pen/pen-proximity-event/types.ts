import type { EventType } from '../../../../../ffi/events/constant';

export type PenProximityEventType =
  | EventType.PEN_PROXIMITY_IN
  | EventType.PEN_PROXIMITY_OUT;
