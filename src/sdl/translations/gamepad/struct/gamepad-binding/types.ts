import type { GamepadButton } from '@sdl/ffi/constant/gamepad';

export interface GamepadAxis {
  axis: number;
  min: number;
  max: number;
}

export interface GamepadHat {
  hat: number;
  mask: number;
}

export interface GamepadInput {
  button: GamepadButton;
  readonly axis: GamepadAxis;
  readonly hat: GamepadHat;
}

export interface GamepadOutput {
  button: GamepadButton;
  readonly axis: GamepadAxis;
}
