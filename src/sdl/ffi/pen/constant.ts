export enum PenInputFlags {
  DOWN = 1 << 0,
  BUTTON_1 = 1 << 1,
  BUTTON_2 = 1 << 2,
  BUTTON_3 = 1 << 3,
  BUTTON_4 = 1 << 4,
  BUTTON_5 = 1 << 5,
  ERASER_TIP = 1 << 30,
  IN_PROXIMITY = 1 << 31,
}

export enum PenAxis {
  PRESSURE = 0 /**< Pen pressure.  Unidirectional: 0 to 1.0 */,
  XTILT = 1 /**< Pen horizontal tilt angle.  Bidirectional: -90.0 to 90.0 (left-to-right). */,
  YTILT = 2 /**< Pen vertical tilt angle.  Bidirectional: -90.0 to 90.0 (top-to-down). */,
  DISTANCE = 3 /**< Pen distance to drawing surface.  Unidirectional: 0.0 to 1.0 */,
  ROTATION = 4 /**< Pen barrel rotation.  Bidirectional: -180 to 179.9 (clockwise, 0 is facing up, -180.0 is facing down). */,
  SLIDER = 5 /**< Pen finger wheel or slider (e.g., Airbrush Pen).  Unidirectional: 0 to 1.0 */,
  TANGENTIAL_PRESSURE = 6 /**< Pressure from squeezing the pen ("barrel pressure"). */,
  COUNT = 7 /**< Total known pen axis types in this version of SDL. This number may grow in future releases! */,
}

export enum PenDeviceType {
  INVALID = -1 /**< Not a valid pen device. */,
  UNKNOWN = 0 /**< Don't know specifics of this pen. */,
  DIRECT = 1 /**< Pen touches display. */,
  INDIRECT = 2 /**< Pen touches something that isn't the display. */,
}
