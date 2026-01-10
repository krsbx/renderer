import type { EventType } from '../../../../../ffi/events/constant';

export type DropEventType =
  | EventType.DROP_FILE
  | EventType.DROP_TEXT
  | EventType.DROP_BEGIN
  | EventType.DROP_COMPLETE
  | EventType.DROP_POSITION;
