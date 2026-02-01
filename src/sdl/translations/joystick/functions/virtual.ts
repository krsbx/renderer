import type { SDL } from '@/sdl';
import type { Joystick } from '@/sdl/types/definition';
import type { SensorType } from '../../../ffi/sensor/constant';
import { VirtualJoystickDesc } from '../struct';

export function attachVirtualJoystick(this: SDL, desc: VirtualJoystickDesc) {
  return this.symbols.SDL_AttachVirtualJoystick(desc.$memory);
}

export function detachVirtualJoystick(this: SDL, instanceId: number) {
  return this.symbols.SDL_DetachVirtualJoystick(instanceId);
}

export function isJoystickVirtual(this: SDL, instanceId: number) {
  return this.symbols.SDL_IsJoystickVirtual(instanceId);
}

export function setJoystickVirtualAxis(
  this: SDL,
  options: {
    joystick: Joystick;
    axis: number;
    value: number;
  }
) {
  return this.symbols.SDL_SetJoystickVirtualAxis(
    options.joystick,
    options.axis,
    options.value
  );
}

export function setJoystickVirtualBall(
  this: SDL,
  options: {
    joystick: Joystick;
    ball: number;
    xrel: number;
    yrel: number;
  }
) {
  return this.symbols.SDL_SetJoystickVirtualBall(
    options.joystick,
    options.ball,
    options.xrel,
    options.yrel
  );
}

export function setJoystickVirtualButton(
  this: SDL,
  options: {
    joystick: Joystick;
    button: number;
    down: boolean;
  }
) {
  return this.symbols.SDL_SetJoystickVirtualButton(
    options.joystick,
    options.button,
    options.down
  );
}

export function setJoystickVirtualHat(
  this: SDL,
  options: {
    joystick: Joystick;
    hat: number;
    value: number;
  }
) {
  return this.symbols.SDL_SetJoystickVirtualHat(
    options.joystick,
    options.hat,
    options.value
  );
}

export function setJoystickVirtualTouchpad(
  this: SDL,
  options: {
    joystick: Joystick;
    touchpad: number;
    finger: number;
    down: boolean;
    x: number;
    y: number;
    pressure: number;
  }
) {
  return this.symbols.SDL_SetJoystickVirtualTouchpad(
    options.joystick,
    options.touchpad,
    options.finger,
    options.down,
    options.x,
    options.y,
    options.pressure
  );
}

export function sendJoystickVirtualSensorData(
  this: SDL,
  options: {
    joystick: Joystick;
    type: SensorType;
    sensorTimestamp: bigint;
    data: Float32Array;
  }
) {
  return this.symbols.SDL_SendJoystickVirtualSensorData(
    options.joystick,
    options.type,
    options.sensorTimestamp,
    options.data,
    options.data.length
  );
}
