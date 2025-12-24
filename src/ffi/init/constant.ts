export const InitFlags = {
  INIT_AUDIO: 0x00000010 /**< `SDL_INIT_AUDIO` implies `SDL_INIT_EVENTS` */,
  INIT_VIDEO: 0x00000020 /**< `SDL_INIT_VIDEO` implies `SDL_INIT_EVENTS`, should be initialized on the main thread */,
  INIT_JOYSTICK: 0x00000200 /**< `SDL_INIT_JOYSTICK` implies `SDL_INIT_EVENTS` */,
  INIT_HAPTIC: 0x00001000,
  INIT_GAMEPAD: 0x00002000 /**< `SDL_INIT_GAMEPAD` implies `SDL_INIT_JOYSTICK` */,
  INIT_EVENTS: 0x00004000,
  INIT_SENSOR: 0x00008000 /**< `SDL_INIT_SENSOR` implies `SDL_INIT_EVENTS` */,
  INIT_CAMERA: 0x00010000 /**< `SDL_INIT_CAMERA` implies `SDL_INIT_EVENTS` */,
} as const;

export type InitFlags = (typeof InitFlags)[keyof typeof InitFlags];
