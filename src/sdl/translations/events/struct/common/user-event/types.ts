import type { EventType } from '@sdl/ffi/constant/events';

export type UserEventType = typeof EventType.LAST | typeof EventType.USER;
