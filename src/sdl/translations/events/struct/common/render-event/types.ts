import type { EventType } from '@sdl/ffi/constant/events';

export type RenderEventType =
  | typeof EventType.RENDER_TARGETS_RESET
  | typeof EventType.RENDER_DEVICE_RESET
  | typeof EventType.RENDER_DEVICE_LOST;
