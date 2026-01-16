import type { Brand } from '../../types/shared';

const RawMessageBoxFlags = {
  ERROR: 0x00000010 /**< error dialog */,
  WARNING: 0x00000020 /**< warning dialog */,
  INFORMATION: 0x00000040 /**< informational dialog */,
  BUTTONS_LEFT_TO_RIGHT: 0x00000080 /**< buttons placed left to right */,
  BUTTONS_RIGHT_TO_LEFT: 0x00000100 /**< buttons placed right to left */,
} as const;

export const MessageBoxFlags = RawMessageBoxFlags as Readonly<
  Record<keyof typeof RawMessageBoxFlags, Brand<number, 'MessageBoxFlags'>>
>;

export type MessageBoxFlags =
  (typeof MessageBoxFlags)[keyof typeof MessageBoxFlags];

const RawMessageBoxButtonFlags = {
  RETURNKEY_DEFAULT: 0x00000001 /**< Marks the default button when return is hit */,
  ESCAPEKEY_DEFAULT: 0x00000002 /**< Marks the default button when escape is hit */,
} as const;

export const MessageBoxButtonFlags = RawMessageBoxButtonFlags as Readonly<
  Record<
    keyof typeof RawMessageBoxButtonFlags,
    Brand<number, 'MessageBoxButtonFlags'>
  >
>;

export type MessageBoxButtonFlags =
  (typeof MessageBoxButtonFlags)[keyof typeof MessageBoxButtonFlags];

const RawMessageBoxColorType = {
  BACKGROUND: 0,
  TEXT: 1,
  BUTTON_BORDER: 2,
  BUTTON_BACKGROUND: 3,
  BUTTON_SELECTED: 4,
  COUNT: 5 /**< Size of the colors array of SDL_MessageBoxColorScheme. */,
} as const;

export const MessageBoxColorType = RawMessageBoxColorType as Readonly<
  Record<
    keyof typeof RawMessageBoxColorType,
    Brand<number, 'MessageBoxColorType'>
  >
>;

export type MessageBoxColorType =
  (typeof MessageBoxColorType)[keyof typeof MessageBoxColorType];
