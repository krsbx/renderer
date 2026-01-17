import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { GamepadAxis } from '../../../ffi/gamepad/constant';

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
