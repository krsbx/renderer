import type { EventType } from '@sdl/ffi/constant/events';

export type DropEventType =
  | typeof EventType.DROP_FILE
  | typeof EventType.DROP_TEXT
  | typeof EventType.DROP_BEGIN
  | typeof EventType.DROP_COMPLETE
  | typeof EventType.DROP_POSITION;
