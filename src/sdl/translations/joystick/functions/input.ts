import type { SDL } from '@/sdl';
import type { Joystick } from '@/sdl/types/definition';
import type { Int16, Int32, UInt8 } from '@/types/primitive';
import { CStruct } from '@cstruct';

export function getJoystickAxis(
  this: SDL,
  options: {
    joystick: Joystick;
    axis: Int32;
  }
) {
  return this.symbols.SDL_GetJoystickAxis(
    options.joystick,
    options.axis
  ) as Int16;
}

export function getJoystickAxisInitialState(
  this: SDL,
  options: {
    joystick: Joystick;
    axis: Int32;
  }
) {
  const stateStruct = new CStruct({ length: CStruct.BYTE_SIZE.i16 });

  const success = this.symbols.SDL_GetJoystickAxisInitialState(
    options.joystick,
    options.axis,
    stateStruct.$memory
  );

  if (!success) return null;

  return stateStruct.getValue(0, 'i16') as Int16;
}

export function getJoystickBall(
  this: SDL,
  options: {
    joystick: Joystick;
    ball: Int32;
  }
) {
  const dxStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const dyStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetJoystickBall(
    options.joystick,
    options.ball,
    dxStruct.$memory,
    dyStruct.$memory
  );

  if (!success) return null;

  return {
    dx: dxStruct.getValue(0, 'i32') as Int32,
    dy: dyStruct.getValue(0, 'i32') as Int32,
  };
}

export function getJoystickHat(
  this: SDL,
  options: {
    joystick: Joystick;
    hat: Int32;
  }
) {
  return this.symbols.SDL_GetJoystickHat(
    options.joystick,
    options.hat
  ) as UInt8;
}

export function getJoystickButton(
  this: SDL,
  options: {
    joystick: Joystick;
    button: Int32;
  }
) {
  return this.symbols.SDL_GetJoystickButton(options.joystick, options.button);
}
