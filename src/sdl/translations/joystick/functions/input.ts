import type { SDL } from '@/sdl';
import type { Joystick } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';

export function getJoystickAxis(
  this: SDL,
  options: {
    joystick: Joystick;
    axis: number;
  }
) {
  return this.symbols.SDL_GetJoystickAxis(options.joystick, options.axis);
}

export function getJoystickAxisInitialState(
  this: SDL,
  options: {
    joystick: Joystick;
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
    joystick: Joystick;
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
    joystick: Joystick;
    hat: number;
  }
) {
  return this.symbols.SDL_GetJoystickHat(options.joystick, options.hat);
}

export function getJoystickButton(
  this: SDL,
  options: {
    joystick: Joystick;
    button: number;
  }
) {
  return this.symbols.SDL_GetJoystickButton(options.joystick, options.button);
}
