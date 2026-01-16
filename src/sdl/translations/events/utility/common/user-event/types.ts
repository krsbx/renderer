import type { EventType } from '../../../../../ffi/events/constant';

export type UserEventType = typeof EventType.LAST | typeof EventType.USER;
