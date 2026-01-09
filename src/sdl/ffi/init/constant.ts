export enum InitFlags {
  AUDIO = 0x00000010 /**< `SDL_INIT_AUDIO` implies `SDL_INIT_EVENTS` */,
  VIDEO = 0x00000020 /**< `SDL_INIT_VIDEO` implies `SDL_INIT_EVENTS`, should be initialized on the main thread */,
  JOYSTICK = 0x00000200 /**< `SDL_INIT_JOYSTICK` implies `SDL_INIT_EVENTS` */,
  HAPTIC = 0x00001000,
  GAMEPAD = 0x00002000 /**< `SDL_INIT_GAMEPAD` implies `SDL_INIT_JOYSTICK` */,
  EVENTS = 0x00004000,
  SENSOR = 0x00008000 /**< `SDL_INIT_SENSOR` implies `SDL_INIT_EVENTS` */,
  CAMERA = 0x00010000 /**< `SDL_INIT_CAMERA` implies `SDL_INIT_EVENTS` */,
}

export enum AppResult {
  CONTINUE = 0 /**< Value that requests that the app continue from the main callbacks. */,
  SUCCESS = 1 /**< Value that requests termination with success from the main callbacks. */,
  FAILURE = 2 /**< Value that requests termination with error from the main callbacks. */,
}
