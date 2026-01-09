export enum MessageBoxFlags {
  ERROR = 0x00000010 /**< error dialog */,
  WARNING = 0x00000020 /**< warning dialog */,
  INFORMATION = 0x00000040 /**< informational dialog */,
  BUTTONS_LEFT_TO_RIGHT = 0x00000080 /**< buttons placed left to right */,
  BUTTONS_RIGHT_TO_LEFT = 0x00000100 /**< buttons placed right to left */,
}

export enum MessageBoxButtonFlags {
  RETURNKEY_DEFAULT = 0x00000001 /**< Marks the default button when return is hit */,
  ESCAPEKEY_DEFAULT = 0x00000002 /**< Marks the default button when escape is hit */,
}

export enum MessageBoxColorType {
  BACKGROUND = 0,
  TEXT = 1,
  BUTTON_BORDER = 2,
  BUTTON_BACKGROUND = 3,
  BUTTON_SELECTED = 4,
  COUNT = 5 /**< Size of the colors array of SDL_MessageBoxColorScheme. */,
}
