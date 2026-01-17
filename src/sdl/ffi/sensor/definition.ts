import { FFIType, type FFIFunction } from 'bun:ffi';

export const SensorDefinition = {
  // SDL_SensorID * SDL_GetSensors(int *count);                                // Get a list of currently connected sensors.
  SDL_GetSensors: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetSensorNameForID(SDL_SensorID instance_id);            // Get the implementation dependent name of a sensor.
  SDL_GetSensorNameForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // SDL_SensorType SDL_GetSensorTypeForID(SDL_SensorID instance_id);          // Get the type of a sensor.
  SDL_GetSensorTypeForID: {
    args: [FFIType.u32],
    returns: FFIType.u32,
  },
  // int SDL_GetSensorNonPortableTypeForID(SDL_SensorID instance_id);          // Get the platform dependent type of a sensor.
  SDL_GetSensorNonPortableTypeForID: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // SDL_Sensor * SDL_OpenSensor(SDL_SensorID instance_id);                    // Open a sensor for use.
  SDL_OpenSensor: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Sensor * SDL_GetSensorFromID(SDL_SensorID instance_id);               // Return the SDL_Sensor associated with an instance ID.
  SDL_GetSensorFromID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_PropertiesID SDL_GetSensorProperties(SDL_Sensor *sensor);             // Get the properties associated with a sensor.
  SDL_GetSensorProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // const char * SDL_GetSensorName(SDL_Sensor *sensor);                       // Get the implementation dependent name of a sensor.
  SDL_GetSensorName: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // SDL_SensorType SDL_GetSensorType(SDL_Sensor *sensor);                     // Get the type of a sensor.
  SDL_GetSensorType: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // int SDL_GetSensorNonPortableType(SDL_Sensor *sensor);                     // Get the platform dependent type of a sensor.
  SDL_GetSensorNonPortableType: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // SDL_SensorID SDL_GetSensorID(SDL_Sensor *sensor);                         // Get the instance ID of a sensor.
  SDL_GetSensorID: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_GetSensorData(SDL_Sensor *sensor, float *data, int num_values);  // Get the current state of an opened sensor.
  SDL_GetSensorData: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_CloseSensor(SDL_Sensor *sensor);                                 // Close a sensor previously opened with SDL_OpenSensor().
  SDL_CloseSensor: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_UpdateSensors(void);                                             // Update the current state of the open sensors.
  SDL_UpdateSensors: {
    args: [],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
