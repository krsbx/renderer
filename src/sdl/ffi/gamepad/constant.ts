import type { Brand } from '@/types/shared';

const RawGamepadType = {
  UNKNOWN: 0,
  STANDARD: 1,
  XBOX360: 2,
  XBOXONE: 3,
  PS3: 4,
  PS4: 5,
  PS5: 6,
  NINTENDO_SWITCH_PRO: 7,
  NINTENDO_SWITCH_JOYCON_LEFT: 8,
  NINTENDO_SWITCH_JOYCON_RIGHT: 9,
  NINTENDO_SWITCH_JOYCON_PAIR: 10,
  GAMECUBE: 11,
  COUNT: 12,
} as const;

export const GamepadType = RawGamepadType as Readonly<
  Record<keyof typeof RawGamepadType, Brand<number, 'GamepadType'>>
>;

export type GamepadType = (typeof GamepadType)[keyof typeof GamepadType];

const RawGamepadButton = {
  INVALID: -1,
  SOUTH: 0 /**< Bottom face button (e.g. Xbox A button) */,
  EAST: 1 /**< Right face button (e.g. Xbox B button) */,
  WEST: 2 /**< Left face button (e.g. Xbox X button) */,
  NORTH: 3 /**< Top face button (e.g. Xbox Y button) */,
  BACK: 4,
  GUIDE: 5,
  START: 6,
  LEFT_STICK: 7,
  RIGHT_STICK: 8,
  LEFT_SHOULDER: 9,
  RIGHT_SHOULDER: 10,
  DPAD_UP: 11,
  DPAD_DOWN: 12,
  DPAD_LEFT: 13,
  DPAD_RIGHT: 14,
  MISC1: 15 /**< Additional button (e.g. Xbox Series X share button, PS5 microphone button, Nintendo Switch Pro capture button, Amazon Luna microphone button, Google Stadia capture button) */,
  RIGHT_PADDLE1: 16 /**< Upper or primary paddle, under your right hand (e.g. Xbox Elite paddle P1, DualSense Edge RB button, Right Joy-Con SR button) */,
  LEFT_PADDLE1: 17 /**< Upper or primary paddle, under your left hand (e.g. Xbox Elite paddle P3, DualSense Edge LB button, Left Joy-Con SL button) */,
  RIGHT_PADDLE2: 18 /**< Lower or secondary paddle, under your right hand (e.g. Xbox Elite paddle P2, DualSense Edge right Fn button, Right Joy-Con SL button) */,
  LEFT_PADDLE2: 19 /**< Lower or secondary paddle, under your left hand (e.g. Xbox Elite paddle P4, DualSense Edge left Fn button, Left Joy-Con SR button) */,
  TOUCHPAD: 20 /**< PS4/PS5 touchpad button */,
  MISC2: 21 /**< Additional button */,
  MISC3: 22 /**< Additional button (e.g. Nintendo GameCube left trigger click) */,
  MISC4: 23 /**< Additional button (e.g. Nintendo GameCube right trigger click) */,
  MISC5: 24 /**< Additional button */,
  MISC6: 25 /**< Additional button */,
  COUNT: 26,
} as const;

export const GamepadButton = RawGamepadButton as Readonly<
  Record<keyof typeof RawGamepadButton, Brand<number, 'GamepadButton'>>
>;

export type GamepadButton = (typeof GamepadButton)[keyof typeof GamepadButton];

const RawGamepadButtonLabel = {
  UNKNOWN: 0,
  A: 1,
  B: 2,
  X: 3,
  Y: 4,
  CROSS: 5,
  CIRCLE: 6,
  SQUARE: 7,
  TRIANGLE: 8,
} as const;

export const GamepadButtonLabel = RawGamepadButtonLabel as Readonly<
  Record<
    keyof typeof RawGamepadButtonLabel,
    Brand<number, 'GamepadButtonLabel'>
  >
>;

export type GamepadButtonLabel =
  (typeof GamepadButtonLabel)[keyof typeof GamepadButtonLabel];

const RawGamepadAxis = {
  INVALID: -1,
  LEFTX: 0,
  LEFTY: 1,
  RIGHTX: 2,
  RIGHTY: 3,
  LEFT_TRIGGER: 4,
  RIGHT_TRIGGER: 5,
  COUNT: 6,
} as const;

export const GamepadAxis = RawGamepadAxis as Readonly<
  Record<keyof typeof RawGamepadAxis, Brand<number, 'GamepadAxis'>>
>;

export type GamepadAxis = (typeof GamepadAxis)[keyof typeof GamepadAxis];

const RawGamepadBindingType = {
  NONE: 0,
  BUTTON: 1,
  AXIS: 2,
  HAT: 3,
} as const;

export const GamepadBindingType = RawGamepadBindingType as Readonly<
  Record<
    keyof typeof RawGamepadBindingType,
    Brand<number, 'GamepadBindingType'>
  >
>;

export type GamepadBindingType =
  (typeof GamepadBindingType)[keyof typeof GamepadBindingType];
