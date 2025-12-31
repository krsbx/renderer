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
