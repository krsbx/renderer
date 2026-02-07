import type { SDL } from '@/sdl';
import type { PropertiesID, Sensor, SensorID } from '@/sdl/types/definition';
import type { Int32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type { SensorType } from '../../../ffi/sensor/constant';

export function getSensors(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetSensors(countStruct.$memory);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const sensors = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return sensors;
}

export function getSensorNameForID(this: SDL, instanceId: SensorID) {
  return this.symbols.SDL_GetSensorNameForID(instanceId).toString();
}

export function getSensorTypeForID(this: SDL, instanceId: SensorID) {
  return this.symbols.SDL_GetSensorTypeForID(instanceId) as SensorType;
}

export function getSensorNonPortableTypeForID(this: SDL, instanceId: SensorID) {
  return this.symbols.SDL_GetSensorNonPortableTypeForID(instanceId) as Int32;
}

export function openSensor(this: SDL, instanceId: SensorID) {
  return this.symbols.SDL_OpenSensor(instanceId) as Sensor | null;
}

export function getSensorFromID(this: SDL, instanceId: SensorID) {
  return this.symbols.SDL_GetSensorFromID(instanceId) as Sensor | null;
}

export function getSensorProperties(this: SDL, sensor: Sensor) {
  return this.symbols.SDL_GetSensorProperties(sensor) as PropertiesID;
}

export function getSensorName(this: SDL, sensor: Sensor) {
  return this.symbols.SDL_GetSensorName(sensor).toString();
}

export function getSensorType(this: SDL, sensor: Sensor) {
  return this.symbols.SDL_GetSensorType(sensor) as SensorType;
}

export function getSensorNonPortableType(this: SDL, sensor: Sensor) {
  return this.symbols.SDL_GetSensorNonPortableType(sensor) as Int32;
}

export function getSensorID(this: SDL, sensor: Sensor) {
  return this.symbols.SDL_GetSensorID(sensor) as SensorID;
}

export function getSensorData(
  this: SDL,
  options: {
    sensor: Sensor;
    numValues: Int32;
  }
) {
  const data = new Float32Array(options.numValues);

  const success = this.symbols.SDL_GetSensorData(
    options.sensor,
    data,
    options.numValues
  );

  if (!success) return null;

  return data;
}

export function closeSensor(this: SDL, sensor: Sensor) {
  this.symbols.SDL_CloseSensor(sensor);
}

export function updateSensors(this: SDL) {
  this.symbols.SDL_UpdateSensors();
}
