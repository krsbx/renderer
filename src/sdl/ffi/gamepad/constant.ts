export const GamepadType = {
  SDL_GAMEPAD_TYPE_UNKNOWN: 0,
  SDL_GAMEPAD_TYPE_STANDARD: 1,
  SDL_GAMEPAD_TYPE_XBOX360: 2,
  SDL_GAMEPAD_TYPE_XBOXONE: 3,
  SDL_GAMEPAD_TYPE_PS3: 4,
  SDL_GAMEPAD_TYPE_PS4: 5,
  SDL_GAMEPAD_TYPE_PS5: 6,
  SDL_GAMEPAD_TYPE_NINTENDO_SWITCH_PRO: 7,
  SDL_GAMEPAD_TYPE_NINTENDO_SWITCH_JOYCON_LEFT: 8,
  SDL_GAMEPAD_TYPE_NINTENDO_SWITCH_JOYCON_RIGHT: 9,
  SDL_GAMEPAD_TYPE_NINTENDO_SWITCH_JOYCON_PAIR: 10,
  SDL_GAMEPAD_TYPE_GAMECUBE: 11,
  SDL_GAMEPAD_TYPE_COUNT: 12,
};

export type GamepadType = (typeof GamepadType)[keyof typeof GamepadType];

export const GamepadAxis = {
  SDL_GAMEPAD_AXIS_INVALID: -1,
  SDL_GAMEPAD_AXIS_LEFTX: 0,
  SDL_GAMEPAD_AXIS_LEFTY: 1,
  SDL_GAMEPAD_AXIS_RIGHTX: 2,
  SDL_GAMEPAD_AXIS_RIGHTY: 3,
  SDL_GAMEPAD_AXIS_LEFT_TRIGGER: 4,
  SDL_GAMEPAD_AXIS_RIGHT_TRIGGER: 5,
  SDL_GAMEPAD_AXIS_COUNT: 6,
} as const;

export type GamepadAxis = (typeof GamepadAxis)[keyof typeof GamepadAxis];

export const GamepadButton = {
  SDL_GAMEPAD_BUTTON_INVALID: -1,
  SDL_GAMEPAD_BUTTON_SOUTH: 0 /**< Bottom face button (e.g. Xbox A button) */,
  SDL_GAMEPAD_BUTTON_EAST: 1 /**< Right face button (e.g. Xbox B button) */,
  SDL_GAMEPAD_BUTTON_WEST: 2 /**< Left face button (e.g. Xbox X button) */,
  SDL_GAMEPAD_BUTTON_NORTH: 3 /**< Top face button (e.g. Xbox Y button) */,
  SDL_GAMEPAD_BUTTON_BACK: 4,
  SDL_GAMEPAD_BUTTON_GUIDE: 5,
  SDL_GAMEPAD_BUTTON_START: 6,
  SDL_GAMEPAD_BUTTON_LEFT_STICK: 7,
  SDL_GAMEPAD_BUTTON_RIGHT_STICK: 8,
  SDL_GAMEPAD_BUTTON_LEFT_SHOULDER: 9,
  SDL_GAMEPAD_BUTTON_RIGHT_SHOULDER: 10,
  SDL_GAMEPAD_BUTTON_DPAD_UP: 11,
  SDL_GAMEPAD_BUTTON_DPAD_DOWN: 12,
  SDL_GAMEPAD_BUTTON_DPAD_LEFT: 13,
  SDL_GAMEPAD_BUTTON_DPAD_RIGHT: 14,
  SDL_GAMEPAD_BUTTON_MISC1: 15 /**< Additional button (e.g. Xbox Series X share button, PS5 microphone button, Nintendo Switch Pro capture button, Amazon Luna microphone button, Google Stadia capture button) */,
  SDL_GAMEPAD_BUTTON_RIGHT_PADDLE1: 16 /**< Upper or primary paddle, under your right hand (e.g. Xbox Elite paddle P1, DualSense Edge RB button, Right Joy-Con SR button) */,
  SDL_GAMEPAD_BUTTON_LEFT_PADDLE1: 17 /**< Upper or primary paddle, under your left hand (e.g. Xbox Elite paddle P3, DualSense Edge LB button, Left Joy-Con SL button) */,
  SDL_GAMEPAD_BUTTON_RIGHT_PADDLE2: 18 /**< Lower or secondary paddle, under your right hand (e.g. Xbox Elite paddle P2, DualSense Edge right Fn button, Right Joy-Con SL button) */,
  SDL_GAMEPAD_BUTTON_LEFT_PADDLE2: 19 /**< Lower or secondary paddle, under your left hand (e.g. Xbox Elite paddle P4, DualSense Edge left Fn button, Left Joy-Con SR button) */,
  SDL_GAMEPAD_BUTTON_TOUCHPAD: 20 /**< PS4/PS5 touchpad button */,
  SDL_GAMEPAD_BUTTON_MISC2: 21 /**< Additional button */,
  SDL_GAMEPAD_BUTTON_MISC3: 22 /**< Additional button (e.g. Nintendo GameCube left trigger click) */,
  SDL_GAMEPAD_BUTTON_MISC4: 23 /**< Additional button (e.g. Nintendo GameCube right trigger click) */,
  SDL_GAMEPAD_BUTTON_MISC5: 24 /**< Additional button */,
  SDL_GAMEPAD_BUTTON_MISC6: 25 /**< Additional button */,
  SDL_GAMEPAD_BUTTON_COUNT: 26,
} as const;

export type GamepadButton = (typeof GamepadButton)[keyof typeof GamepadButton];

export const GamepadLabel = {
  SDL_GAMEPAD_BUTTON_LABEL_UNKNOWN: 0,
  SDL_GAMEPAD_BUTTON_LABEL_A: 1,
  SDL_GAMEPAD_BUTTON_LABEL_B: 2,
  SDL_GAMEPAD_BUTTON_LABEL_X: 3,
  SDL_GAMEPAD_BUTTON_LABEL_Y: 4,
  SDL_GAMEPAD_BUTTON_LABEL_CROSS: 5,
  SDL_GAMEPAD_BUTTON_LABEL_CIRCLE: 6,
  SDL_GAMEPAD_BUTTON_LABEL_SQUARE: 7,
  SDL_GAMEPAD_BUTTON_LABEL_TRIANGLE: 8,
} as const;

export type GamepadLabel = (typeof GamepadLabel)[keyof typeof GamepadLabel];

export const SensorType = {
  SDL_SENSOR_INVALID: -1 /**< Returned for an invalid sensor */,
  SDL_SENSOR_UNKNOWN: 0 /**< Unknown sensor type */,
  SDL_SENSOR_ACCEL: 1 /**< Accelerometer */,
  SDL_SENSOR_GYRO: 2 /**< Gyroscope */,
  SDL_SENSOR_ACCEL_L: 3 /**< Accelerometer for left Joy-Con controller and Wii nunchuk */,
  SDL_SENSOR_GYRO_L: 4 /**< Gyroscope for left Joy-Con controller */,
  SDL_SENSOR_ACCEL_R: 5 /**< Accelerometer for right Joy-Con controller */,
  SDL_SENSOR_GYRO_R: 6 /**< Gyroscope for right Joy-Con controller */,
  SDL_SENSOR_COUNT: 7,
} as const;

export type SensorType = (typeof SensorType)[keyof typeof SensorType];
