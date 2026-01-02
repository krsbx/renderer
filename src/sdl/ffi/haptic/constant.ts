export const HapticDirectionType = {
  SDL_HAPTIC_POLAR: 0,
  SDL_HAPTIC_CARTESIAN: 1,
  SDL_HAPTIC_SPHERICAL: 2,
  SDL_HAPTIC_STEERING_AXIS: 3,
} as const;

export type HapticDirectionType =
  (typeof HapticDirectionType)[keyof typeof HapticDirectionType];

export const HapticEffectType = {
  SDL_HAPTIC_CONSTANT: 1 << 0, // 1
  SDL_HAPTIC_SINE: 1 << 1, // 2
  SDL_HAPTIC_SQUARE: 1 << 2, // 4
  SDL_HAPTIC_TRIANGLE: 1 << 3, // 8
  SDL_HAPTIC_SAWTOOTHUP: 1 << 4, // 16
  SDL_HAPTIC_SAWTOOTHDOWN: 1 << 5, // 32
  SDL_HAPTIC_RAMP: 1 << 6, // 64
  SDL_HAPTIC_SPRING: 1 << 7, // 128
  SDL_HAPTIC_DAMPER: 1 << 8, // 256
  SDL_HAPTIC_INERTIA: 1 << 9, // 512
  SDL_HAPTIC_FRICTION: 1 << 10, // 1024
  SDL_HAPTIC_LEFTRIGHT: 1 << 11, // 2048
  SDL_HAPTIC_RESERVED1: 1 << 12, // 4096
  SDL_HAPTIC_RESERVED2: 1 << 13, // 8192
  SDL_HAPTIC_RESERVED3: 1 << 14, // 16384
  SDL_HAPTIC_CUSTOM: 1 << 15, // 32768
  // Device features
  SDL_HAPTIC_GAIN: 1 << 16, // 65536
  SDL_HAPTIC_AUTOCENTER: 1 << 17, // 131072
  SDL_HAPTIC_STATUS: 1 << 18, // 262144
  SDL_HAPTIC_PAUSE: 1 << 19, // 524288
} as const;

export type HapticEffectType =
  (typeof HapticEffectType)[keyof typeof HapticEffectType];
