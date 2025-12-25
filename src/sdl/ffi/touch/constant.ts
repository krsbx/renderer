export const TouchDeviceType = {
  SDL_TOUCH_DEVICE_INVALID: -1,
  SDL_TOUCH_DEVICE_DIRECT: 0 /**< touch screen with window-relative coordinates */,
  SDL_TOUCH_DEVICE_INDIRECT_ABSOLUTE: 1 /**< trackpad with absolute device coordinates */,
  SDL_TOUCH_DEVICE_INDIRECT_RELATIVE: 2 /**< trackpad with screen cursor-relative coordinates */,
} as const;

export type TouchDeviceType =
  (typeof TouchDeviceType)[keyof typeof TouchDeviceType];
