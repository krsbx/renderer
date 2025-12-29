export const MessageBoxFlags = {
  SDL_MESSAGEBOX_ERROR: 0x00000010 /**< error dialog */,
  SDL_MESSAGEBOX_WARNING: 0x00000020 /**< warning dialog */,
  SDL_MESSAGEBOX_INFORMATION: 0x00000040 /**< informational dialog */,
  SDL_MESSAGEBOX_BUTTONS_LEFT_TO_RIGHT: 0x00000080 /**< buttons placed left to right */,
  SDL_MESSAGEBOX_BUTTONS_RIGHT_TO_LEFT: 0x00000100 /**< buttons placed right to left */,
} as const;

export type MessageBoxFlags =
  (typeof MessageBoxFlags)[keyof typeof MessageBoxFlags];

export const MessageBoxButtonFlags = {
  SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT: 0x00000001 /**< Marks the default button when return is hit */,
  SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT: 0x00000002 /**< Marks the default button when escape is hit */,
} as const;

export type MessageBoxButtonFlags =
  (typeof MessageBoxButtonFlags)[keyof typeof MessageBoxButtonFlags];

export const MessageBoxColorType = {
  SDL_MESSAGEBOX_COLOR_BACKGROUND: 0,
  SDL_MESSAGEBOX_COLOR_TEXT: 1,
  SDL_MESSAGEBOX_COLOR_BUTTON_BORDER: 2,
  SDL_MESSAGEBOX_COLOR_BUTTON_BACKGROUND: 3,
  SDL_MESSAGEBOX_COLOR_BUTTON_SELECTED: 4,
  SDL_MESSAGEBOX_COLOR_COUNT: 5 /**< Size of the colors array of SDL_MessageBoxColorScheme. */,
} as const;

export type MessageBoxColorType =
  (typeof MessageBoxColorType)[keyof typeof MessageBoxColorType];
