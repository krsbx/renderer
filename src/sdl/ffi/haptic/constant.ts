export const HapticEffectType = {
  CONSTANT: 1 << 0, // 1
  SINE: 1 << 1, // 2
  SQUARE: 1 << 2, // 4
  TRIANGLE: 1 << 3, // 8
  SAWTOOTHUP: 1 << 4, // 16
  SAWTOOTHDOWN: 1 << 5, // 32
  RAMP: 1 << 6, // 64
  SPRING: 1 << 7, // 128
  DAMPER: 1 << 8, // 256
  INERTIA: 1 << 9, // 512
  FRICTION: 1 << 10, // 1024
  LEFTRIGHT: 1 << 11, // 2048
  RESERVED1: 1 << 12, // 4096
  RESERVED2: 1 << 13, // 8192
  RESERVED3: 1 << 14, // 16384
  CUSTOM: 1 << 15, // 32768
  // Device features
  GAIN: 1 << 16, // 65536
  AUTOCENTER: 1 << 17, // 131072
  STATUS: 1 << 18, // 262144
  PAUSE: 1 << 19, // 524288
} as const;

export type HapticEffectType =
  (typeof HapticEffectType)[keyof typeof HapticEffectType];

export const HapticDirectionType = {
  POLAR: 0,
  CARTESIAN: 1,
  SPHERICAL: 2,
  STEERING_AXIS: 3,
} as const;

export type HapticDirectionType =
  (typeof HapticDirectionType)[keyof typeof HapticDirectionType];
