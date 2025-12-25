export const SensorType = {
  SDL_SENSOR_INVALID: -1 /**< Returned for an invalid sensor */,
  SDL_SENSOR_UNKNOWN: 2 /**< Unknown sensor type */,
  SDL_SENSOR_ACCEL: 3 /**< Accelerometer */,
  SDL_SENSOR_GYRO: 4 /**< Gyroscope */,
  SDL_SENSOR_ACCEL_L: 5 /**< Accelerometer for left Joy-Con controller and Wii nunchuk */,
  SDL_SENSOR_GYRO_L: 6 /**< Gyroscope for left Joy-Con controller */,
  SDL_SENSOR_ACCEL_R: 7 /**< Accelerometer for right Joy-Con controller */,
  SDL_SENSOR_GYRO_R: 8 /**< Gyroscope for right Joy-Con controller */,
  SDL_SENSOR_COUNT: 9,
} as const;

export type SensorType = (typeof SensorType)[keyof typeof SensorType];
