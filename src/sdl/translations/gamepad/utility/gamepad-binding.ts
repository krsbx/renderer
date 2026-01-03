import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { GamepadBindingType } from '../../../ffi/gamepad/constant';
import type { GamepadInput, GamepadOutput, RawGamepadBinding } from './types';

export class GamepadBinding implements RawGamepadBinding {
  public static readonly BYTE_SIZE = 32;

  public input_type: GamepadBindingType;
  public input: GamepadInput;
  public output_type: GamepadBindingType;
  public output: GamepadOutput;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGamepadBinding) {
    this.input_type = options.input_type;
    this.input = options.input;
    this.output_type = options.output_type;
    this.output = options.output;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GamepadBinding.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.input_type, true);

    switch (this.input_type) {
      case GamepadBindingType.BUTTON:
        view.setInt32(4, this.input.button, true);
        break;

      case GamepadBindingType.AXIS:
        view.setInt32(4, this.input.axis.axis, true);
        view.setInt32(8, this.input.axis.axis_min, true);
        view.setInt32(12, this.input.axis.axis_max, true);
        break;

      case GamepadBindingType.HAT:
        view.setInt32(4, this.input.hat.hat, true);
        view.setInt32(8, this.input.hat.hat_mask, true);
        break;

      case GamepadBindingType.NONE:
      default:
        break;
    }

    view.setInt32(16, this.output_type, true);

    switch (this.output_type) {
      case GamepadBindingType.BUTTON:
        view.setInt32(20, this.output.button, true);
        break;

      case GamepadBindingType.AXIS:
      case GamepadBindingType.HAT:
      case GamepadBindingType.NONE:
      default:
        view.setInt32(20, this.output.axis.axis, true);
        view.setInt32(24, this.output.axis.axis_min, true);
        view.setInt32(28, this.output.axis.axis_max, true);
        break;
    }

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      input_type: read.i32(pointer, 0),
      input: {
        button: read.i32(pointer, 4),
        axis: {
          axis: read.i32(pointer, 4),
          axis_min: read.i32(pointer, 8),
          axis_max: read.i32(pointer, 12),
        },
        hat: {
          hat: read.i32(pointer, 4),
          hat_mask: read.i32(pointer, 8),
        },
      },
      output_type: read.i32(pointer, 16),
      output: {
        button: read.i32(pointer, 20),
        axis: {
          axis: read.i32(pointer, 20),
          axis_min: read.i32(pointer, 24),
          axis_max: read.i32(pointer, 28),
        },
      },
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGamepadBinding;

    return new GamepadBinding(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      input_type: view.getInt32(0, true),
      input: {
        button: view.getInt32(4, true),
        axis: {
          axis: view.getInt32(4, true),
          axis_min: view.getInt32(8, true),
          axis_max: view.getInt32(12, true),
        },
        hat: {
          hat: view.getInt32(4, true),
          hat_mask: view.getInt32(8, true),
        },
      },
      output_type: view.getInt32(16, true),
      output: {
        button: view.getInt32(20, true),
        axis: {
          axis: view.getInt32(20, true),
          axis_min: view.getInt32(24, true),
          axis_max: view.getInt32(28, true),
        },
      },
      free: null,
      address: null,
    } as RawGamepadBinding;

    return new GamepadBinding(result);
  }
}
