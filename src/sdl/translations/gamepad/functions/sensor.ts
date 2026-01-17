import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { SensorType } from '../../../ffi/sensor/constant';
import { CStruct } from '../../../utility/cstruct';

export function gamepadHasSensor(
  this: SDL,
  options: {
    gamepad: Pointer;
    type: SensorType;
  }
) {
  return this.symbols.SDL_GamepadHasSensor(options.gamepad, options.type);
}

export function setGamepadSensorEnabled(
  this: SDL,
  options: {
    gamepad: Pointer;
    type: SensorType;
    enabled: boolean;
  }
) {
  return this.symbols.SDL_SetGamepadSensorEnabled(
    options.gamepad,
    options.type,
    options.enabled
  );
}

export function gamepadSensorEnabled(
  this: SDL,
  options: {
    gamepad: Pointer;
    type: SensorType;
  }
) {
  return this.symbols.SDL_GamepadSensorEnabled(options.gamepad, options.type);
}

export function getGamepadSensorDataRate(
  this: SDL,
  options: {
    gamepad: Pointer;
    type: SensorType;
  }
) {
  return this.symbols.SDL_GetGamepadSensorDataRate(
    options.gamepad,
    options.type
  );
}

export function getGamepadSensorData(
  this: SDL,
  options: {
    gamepad: Pointer;
    type: SensorType;
    numValues: number;
  }
) {
  const dataSize = options.numValues * CStruct.BYTE_SIZE.f32;
  const struct = new CStruct({ length: dataSize });

  const success = this.symbols.SDL_GetGamepadSensorData(
    options.gamepad,
    options.type,
    struct.$address,
    options.numValues
  );

  return success ? struct : null;
}
