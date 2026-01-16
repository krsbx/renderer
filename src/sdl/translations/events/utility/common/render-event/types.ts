import type { EventType } from '../../../../../ffi/events/constant';

export type RenderEventType =
  | typeof EventType.RENDER_TARGETS_RESET
  | typeof EventType.RENDER_DEVICE_RESET
  | typeof EventType.RENDER_DEVICE_LOST;
