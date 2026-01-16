import type { EventType } from '../../../../../ffi/events/constant';

export type PenProximityEventType =
  | typeof EventType.PEN_PROXIMITY_IN
  | typeof EventType.PEN_PROXIMITY_OUT;
