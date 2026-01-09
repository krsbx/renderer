export enum JoystickType {
  UNKNOWN = 0,
  GAMEPAD = 1,
  WHEEL = 2,
  ARCADE_STICK = 3,
  FLIGHT_STICK = 4,
  DANCE_PAD = 5,
  GUITAR = 6,
  DRUM_KIT = 7,
  ARCADE_PAD = 8,
  THROTTLE = 9,
  COUNT = 10,
}

export enum JoystickConnectionState {
  CONNECTION_INVALID = -1,
  CONNECTION_UNKNOWN = 0,
  CONNECTION_WIRED = 1,
  CONNECTION_WIRELESS = 2,
}

export enum JoyHatPosition {
  CENTERED = 0x00,
  UP = 0x01,
  RIGHT = 0x02,
  DOWN = 0x04,
  LEFT = 0x08,
  RIGHTUP = JoyHatPosition.RIGHT | JoyHatPosition.UP, // 0x03
  RIGHTDOWN = JoyHatPosition.RIGHT | JoyHatPosition.DOWN, // 0x06
  LEFTUP = JoyHatPosition.LEFT | JoyHatPosition.UP, // 0x09
  LEFTDOWN = JoyHatPosition.LEFT | JoyHatPosition.DOWN, // 0x0C
}
