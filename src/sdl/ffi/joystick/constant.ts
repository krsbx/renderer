export const JoystickType = {
  UNKNOWN: 0,
  GAMEPAD: 1,
  WHEEL: 2,
  ARCADE_STICK: 3,
  FLIGHT_STICK: 4,
  DANCE_PAD: 5,
  GUITAR: 6,
  DRUM_KIT: 7,
  ARCADE_PAD: 8,
  THROTTLE: 9,
  COUNT: 10,
} as const;

export type JoystickType = (typeof JoystickType)[keyof typeof JoystickType];

export const JoystickConnectionState = {
  CONNECTION_INVALID: -1,
  CONNECTION_UNKNOWN: 0,
  CONNECTION_WIRED: 1,
  CONNECTION_WIRELESS: 2,
} as const;

export type JoystickConnectionState =
  (typeof JoystickConnectionState)[keyof typeof JoystickConnectionState];

export const JoyHatPosition = {
  CENTERED: 0x00,
  UP: 0x01,
  RIGHT: 0x02,
  DOWN: 0x04,
  LEFT: 0x08,
  RIGHTUP: 0x02 | 0x01, // 0x03
  RIGHTDOWN: 0x02 | 0x04, // 0x06
  LEFTUP: 0x08 | 0x01, // 0x09
  LEFTDOWN: 0x08 | 0x04, // 0x0C
} as const;

export type JoyHatPosition =
  (typeof JoyHatPosition)[keyof typeof JoyHatPosition];
