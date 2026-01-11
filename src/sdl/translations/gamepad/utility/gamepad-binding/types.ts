import type { GamepadButton } from '../../../../ffi/gamepad/constant';

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
