import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { Pointer } from 'bun:ffi';
import type { SensorType } from '../../../ffi/sensor/constant';

export function getSensors(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetSensors(countStruct.$address);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const sensors: number[] = [];

  for (let i = 0; i < count; i++) {
    const sensorId = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    sensors.push(sensorId);
  }

  this.symbols.SDL_free(listPtr);

  return sensors;
}

export function getSensorNameForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetSensorNameForID(instanceId).toString();
}

export function getSensorTypeForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetSensorTypeForID(instanceId) as SensorType;
}

export function getSensorNonPortableTypeForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetSensorNonPortableTypeForID(instanceId);
}

export function openSensor(this: SDL, instanceId: number) {
  return this.symbols.SDL_OpenSensor(instanceId);
}

export function getSensorFromID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetSensorFromID(instanceId);
}

export function getSensorProperties(this: SDL, sensor: Pointer) {
  return this.symbols.SDL_GetSensorProperties(sensor);
}

export function getSensorName(this: SDL, sensor: Pointer) {
  return this.symbols.SDL_GetSensorName(sensor).toString();
}

export function getSensorType(this: SDL, sensor: Pointer) {
  return this.symbols.SDL_GetSensorType(sensor) as SensorType;
}

export function getSensorNonPortableType(this: SDL, sensor: Pointer) {
  return this.symbols.SDL_GetSensorNonPortableType(sensor);
}

export function getSensorID(this: SDL, sensor: Pointer) {
  return this.symbols.SDL_GetSensorID(sensor);
}

export function getSensorData(
  this: SDL,
  options: {
    sensor: Pointer;
    numValues: number;
  }
) {
  const data = new CStruct({
    length: CStruct.BYTE_SIZE.f32 * options.numValues,
  });

  const success = this.symbols.SDL_GetSensorData(
    options.sensor,
    data.$address,
    options.numValues
  );

  if (!success) return null;

  return data;
}

export function closeSensor(this: SDL, sensor: Pointer) {
  this.symbols.SDL_CloseSensor(sensor);
}

export function updateSensors(this: SDL) {
  this.symbols.SDL_UpdateSensors();
}
