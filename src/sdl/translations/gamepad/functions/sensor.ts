import type { SDL } from '@/sdl';
import type { Gamepad } from '@/sdl/types/definition';
import type { Float, Int32 } from '@/types/primitive';
import type { SensorType } from '../../../ffi/sensor/constant';

export function gamepadHasSensor(
  this: SDL,
  options: {
    gamepad: Gamepad;
    type: SensorType;
  }
) {
  return this.symbols.SDL_GamepadHasSensor(options.gamepad, options.type);
}

export function setGamepadSensorEnabled(
  this: SDL,
  options: {
    gamepad: Gamepad;
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
    gamepad: Gamepad;
    type: SensorType;
  }
) {
  return this.symbols.SDL_GamepadSensorEnabled(options.gamepad, options.type);
}

export function getGamepadSensorDataRate(
  this: SDL,
  options: {
    gamepad: Gamepad;
    type: SensorType;
  }
) {
  return this.symbols.SDL_GetGamepadSensorDataRate(
    options.gamepad,
    options.type
  ) as Float;
}

export function getGamepadSensorData(
  this: SDL,
  options: {
    gamepad: Gamepad;
    type: SensorType;
    numValues: Int32;
  }
) {
  const data = new Float32Array(options.numValues);

  const success = this.symbols.SDL_GetGamepadSensorData(
    options.gamepad,
    options.type,
    data,
    options.numValues
  );

  return success ? data : null;
}
