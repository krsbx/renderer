import type { EventType } from '../../../../../ffi/events/constant';

export type RenderEventType =
  | EventType.RENDER_TARGETS_RESET
  | EventType.RENDER_DEVICE_RESET
  | EventType.RENDER_DEVICE_LOST;
