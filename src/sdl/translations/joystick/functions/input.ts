import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { Pointer } from 'bun:ffi';

export function getJoystickAxis(
  this: SDL,
  options: {
    joystick: Pointer;
    axis: number;
  }
) {
  return this.symbols.SDL_GetJoystickAxis(options.joystick, options.axis);
}

export function getJoystickAxisInitialState(
  this: SDL,
  options: {
    joystick: Pointer;
    axis: number;
  }
) {
  const stateStruct = new CStruct({ length: CStruct.BYTE_SIZE.i16 });

  const success = this.symbols.SDL_GetJoystickAxisInitialState(
    options.joystick,
    options.axis,
    stateStruct.$address
  );

  if (!success) return null;

  return stateStruct.getValue(0, 'i16');
}

export function getJoystickBall(
  this: SDL,
  options: {
    joystick: Pointer;
    ball: number;
  }
) {
  const dxStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const dyStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetJoystickBall(
    options.joystick,
    options.ball,
    dxStruct.$address,
    dyStruct.$address
  );

  if (!success) return null;

  return {
    dx: dxStruct.getValue(0, 'i32'),
    dy: dyStruct.getValue(0, 'i32'),
  };
}

export function getJoystickHat(
  this: SDL,
  options: {
    joystick: Pointer;
    hat: number;
  }
) {
  return this.symbols.SDL_GetJoystickHat(options.joystick, options.hat);
}

export function getJoystickButton(
  this: SDL,
  options: {
    joystick: Pointer;
    button: number;
  }
) {
  return this.symbols.SDL_GetJoystickButton(options.joystick, options.button);
}
