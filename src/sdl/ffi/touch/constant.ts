export const TouchDeviceType = {
  INVALID: -1,
  DIRECT: 0 /**< touch screen with window-relative coordinates */,
  INDIRECT_ABSOLUTE: 1 /**< trackpad with absolute device coordinates */,
  INDIRECT_RELATIVE: 2 /**< trackpad with screen cursor-relative coordinates */,
} as const;

export type TouchDeviceType =
  (typeof TouchDeviceType)[keyof typeof TouchDeviceType];
