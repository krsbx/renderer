import type {
  GamepadBindingType,
  GamepadButton,
} from '../../../ffi/gamepad/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface GamepadAxis {
  axis: number;
  axis_min: number;
  axis_max: number;
}

export interface GamepadHat {
  hat: number;
  hat_mask: number;
}

export interface GamepadInput {
  button: GamepadButton;
  axis: GamepadAxis;
  hat: GamepadHat;
}

export interface GamepadOutput {
  button: GamepadButton;
  axis: GamepadAxis;
}

export interface RawGamepadBinding extends FreeAddress, MemoryAddress {
  input_type: GamepadBindingType;
  input: GamepadInput;
  output_type: GamepadBindingType;
  output: GamepadOutput;
}
