export enum SensorType {
  INVALID = -1 /**< Returned for an invalid sensor */,
  UNKNOWN = 0 /**< Unknown sensor type */,
  ACCEL = 1 /**< Accelerometer */,
  GYRO = 2 /**< Gyroscope */,
  ACCEL_L = 3 /**< Accelerometer for left Joy-Con controller and Wii nunchuk */,
  GYRO_L = 4 /**< Gyroscope for left Joy-Con controller */,
  ACCEL_R = 5 /**< Accelerometer for right Joy-Con controller */,
  GYRO_R = 6 /**< Gyroscope for right Joy-Con controller */,
  COUNT = 7,
}
