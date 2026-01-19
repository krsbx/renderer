import type { CString, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { GamepadAxis } from '../../../ffi/gamepad/constant';

export function getGamepadAxisFromString(this: SDL, str: CString) {
  return this.symbols.SDL_GetGamepadAxisFromString(str.ptr) as GamepadAxis;
}

export function getGamepadStringForAxis(this: SDL, axis: GamepadAxis) {
  return this.symbols.SDL_GetGamepadStringForAxis(axis);
}

export function gamepadHasAxis(
  this: SDL,
  options: {
    gamepad: Pointer;
    axis: GamepadAxis;
  }
) {
  return this.symbols.SDL_GamepadHasAxis(options.gamepad, options.axis);
}

export function getGamepadAxis(
  this: SDL,
  options: {
    gamepad: Pointer;
    axis: GamepadAxis;
  }
) {
  return this.symbols.SDL_GetGamepadAxis(options.gamepad, options.axis);
}
