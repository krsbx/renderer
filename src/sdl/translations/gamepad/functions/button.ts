import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import {
  GamepadButtonLabel,
  type GamepadButton,
  type GamepadType,
} from '../../../ffi/gamepad/constant';

export function getGamepadButtonFromString(this: SDL, str: string) {
  return this.symbols.SDL_GetGamepadButtonFromString(
    stringToCString(str).ptr
  ) as GamepadButton;
}

export function getGamepadStringForButton(this: SDL, button: GamepadButton) {
  return this.symbols.SDL_GetGamepadStringForButton(button).toString();
}

export function gamepadHasButton(
  this: SDL,
  options: {
    gamepad: Pointer;
    button: GamepadButton;
  }
) {
  return this.symbols.SDL_GamepadHasButton(options.gamepad, options.button);
}

export function getGamepadButton(
  this: SDL,
  options: {
    gamepad: Pointer;
    button: GamepadButton;
  }
) {
  return this.symbols.SDL_GetGamepadButton(options.gamepad, options.button);
}

export function getGamepadButtonLabelForType(
  this: SDL,
  options: {
    type: GamepadType;
    button: GamepadButton;
  }
) {
  return this.symbols.SDL_GetGamepadButtonLabelForType(
    options.type,
    options.button
  ) as GamepadButtonLabel;
}

export function getGamepadButtonLabel(
  this: SDL,
  options: {
    gamepad: Pointer;
    button: GamepadButton;
  }
) {
  return this.symbols.SDL_GetGamepadButtonLabel(
    options.gamepad,
    options.button
  ) as GamepadButtonLabel;
}
