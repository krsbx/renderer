import type { EventType } from '@sdl/ffi/constant/events';

export type PenProximityEventType =
  | typeof EventType.PEN_PROXIMITY_IN
  | typeof EventType.PEN_PROXIMITY_OUT;
