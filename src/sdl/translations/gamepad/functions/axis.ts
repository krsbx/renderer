import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import type { GamepadAxis } from '../../../ffi/gamepad/constant';

export function getGamepadAxisFromString(this: SDL, str: string) {
  return this.symbols.SDL_GetGamepadAxisFromString(
    stringToCString(str).ptr
  ) as GamepadAxis;
}

export function getGamepadStringForAxis(this: SDL, axis: GamepadAxis) {
  return this.symbols.SDL_GetGamepadStringForAxis(axis).toString();
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
