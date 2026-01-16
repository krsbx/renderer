import type { Brand } from '../../types/shared';

const RawJoystickType = {
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

export const JoystickType = RawJoystickType as Readonly<
  Record<keyof typeof RawJoystickType, Brand<number, 'JoystickType'>>
>;

export type JoystickType = (typeof JoystickType)[keyof typeof JoystickType];

const RawJoystickConnectionState = {
  CONNECTION_INVALID: -1,
  CONNECTION_UNKNOWN: 0,
  CONNECTION_WIRED: 1,
  CONNECTION_WIRELESS: 2,
} as const;

export const JoystickConnectionState = RawJoystickConnectionState as Readonly<
  Record<
    keyof typeof RawJoystickConnectionState,
    Brand<number, 'JoystickConnectionState'>
  >
>;

export type JoystickConnectionState =
  (typeof JoystickConnectionState)[keyof typeof JoystickConnectionState];

const RawJoyHatPosition = {
  CENTERED: 0x00,
  UP: 0x01,
  RIGHT: 0x02,
  DOWN: 0x04,
  LEFT: 0x08,
  get RIGHTUP() {
    return this.RIGHT | this.UP;
  }, // 0x03
  get RIGHTDOWN() {
    return this.RIGHT | this.DOWN;
  }, // 0x06
  get LEFTUP() {
    return this.LEFT | this.UP;
  }, // 0x09
  get LEFTDOWN() {
    return this.LEFT | this.DOWN;
  }, // 0x0C
} as const;

export const JoyHatPosition = RawJoyHatPosition as Readonly<
  Record<keyof typeof RawJoyHatPosition, Brand<number, 'JoyHatPosition'>>
>;

export type JoyHatPosition =
  (typeof JoyHatPosition)[keyof typeof JoyHatPosition];
