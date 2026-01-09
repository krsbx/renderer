export enum SystemCursor {
  DEFAULT = 0 /**< Default cursor. Usually an arrow. */,
  TEXT = 1 /**< Text selection. Usually an I-beam. */,
  WAIT = 2 /**< Wait. Usually an hourglass or watch or spinning ball. */,
  CROSSHAIR = 3 /**< Crosshair. */,
  PROGRESS = 4 /**< Program is busy but still interactive. Usually it's WAIT with an arrow. */,
  NWSE_RESIZE = 5 /**< Double arrow pointing northwest and southeast. */,
  NESW_RESIZE = 6 /**< Double arrow pointing northeast and southwest. */,
  EW_RESIZE = 7 /**< Double arrow pointing west and east. */,
  NS_RESIZE = 8 /**< Double arrow pointing north and south. */,
  MOVE = 9 /**< Four pointed arrow pointing north, south, east, and west. */,
  NOT_ALLOWED = 10 /**< Not permitted. Usually a slashed circle or crossbones. */,
  POINTER = 11 /**< Pointer that indicates a link. Usually a pointing hand. */,
  NW_RESIZE = 12 /**< Window resize top-left. This may be a single arrow or a double arrow like NWSE_RESIZE. */,
  N_RESIZE = 13 /**< Window resize top. May be NS_RESIZE. */,
  NE_RESIZE = 14 /**< Window resize top-right. May be NESW_RESIZE. */,
  E_RESIZE = 15 /**< Window resize right. May be EW_RESIZE. */,
  SE_RESIZE = 16 /**< Window resize bottom-right. May be NWSE_RESIZE. */,
  S_RESIZE = 17 /**< Window resize bottom. May be NS_RESIZE. */,
  SW_RESIZE = 18 /**< Window resize bottom-left. May be NESW_RESIZE. */,
  W_RESIZE = 19 /**< Window resize left. May be EW_RESIZE. */,
  COUNT = 20,
}

export enum MouseWheelDirection {
  NORMAL = 0,
  FLIPPED = 1,
}

export enum MouseButton {
  LEFT = 1,
  MIDDLE = 2,
  RIGHT = 3,
  X1 = 4,
  X2 = 5,
}

export enum MouseButtonFlags {
  // SDL_BUTTON_MASK(X) logic:(1 << (X - 1))
  L_MASK = 1 << (MouseButton.LEFT - 1), // 0x01 (00001)
  M_MASK = 1 << (MouseButton.MIDDLE - 1), // 0x02 (00010)
  R_MASK = 1 << (MouseButton.RIGHT - 1), // 0x04 (00100)
  X1_MASK = 1 << (MouseButton.X1 - 1), // 0x08 (01000)
  X2_MASK = 1 << (MouseButton.X2 - 1), // 0x10 (10000)
}
