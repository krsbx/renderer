import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { GamepadBindingType } from '../../../ffi/gamepad/constant';
import { ByteOffset } from './constant';
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

    view.setInt32(ByteOffset.input_type, this.input_type, true);

    switch (this.input_type) {
      case GamepadBindingType.BUTTON:
        view.setInt32(ByteOffset.input.button, this.input.button, true);
        break;

      case GamepadBindingType.AXIS:
        view.setInt32(ByteOffset.input.axis.axis, this.input.axis.axis, true);
        view.setInt32(
          ByteOffset.input.axis.axis_min,
          this.input.axis.axis_min,
          true
        );
        view.setInt32(
          ByteOffset.input.axis.axis_max,
          this.input.axis.axis_max,
          true
        );
        break;

      case GamepadBindingType.HAT:
        view.setInt32(ByteOffset.input.hat.hat, this.input.hat.hat, true);
        view.setInt32(
          ByteOffset.input.hat.hat_mask,
          this.input.hat.hat_mask,
          true
        );
        break;

      case GamepadBindingType.NONE:
      default:
        break;
    }

    view.setInt32(ByteOffset.output_type, this.output_type, true);

    switch (this.output_type) {
      case GamepadBindingType.BUTTON:
        view.setInt32(ByteOffset.output.button, this.output.button, true);
        break;

      case GamepadBindingType.AXIS:
      case GamepadBindingType.HAT:
      case GamepadBindingType.NONE:
      default:
        view.setInt32(ByteOffset.output.axis.axis, this.output.axis.axis, true);
        view.setInt32(
          ByteOffset.output.axis.axis_min,
          this.output.axis.axis_min,
          true
        );
        view.setInt32(
          ByteOffset.output.axis.axis_max,
          this.output.axis.axis_max,
          true
        );
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
      input_type: read.i32(pointer, ByteOffset.input_type),
      input: {
        button: read.i32(pointer, ByteOffset.input.button),
        axis: {
          axis: read.i32(pointer, ByteOffset.input.axis.axis),
          axis_min: read.i32(pointer, ByteOffset.input.axis.axis_min),
          axis_max: read.i32(pointer, ByteOffset.input.axis.axis_max),
        },
        hat: {
          hat: read.i32(pointer, ByteOffset.input.hat.hat),
          hat_mask: read.i32(pointer, ByteOffset.input.hat.hat_mask),
        },
      },
      output_type: read.i32(pointer, ByteOffset.output_type),
      output: {
        button: read.i32(pointer, ByteOffset.output.button),
        axis: {
          axis: read.i32(pointer, ByteOffset.output.axis.axis),
          axis_min: read.i32(pointer, ByteOffset.output.axis.axis_min),
          axis_max: read.i32(pointer, ByteOffset.output.axis.axis_max),
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
      input_type: view.getInt32(ByteOffset.input_type, true),
      input: {
        button: view.getInt32(ByteOffset.input.button, true),
        axis: {
          axis: view.getInt32(ByteOffset.input.axis.axis, true),
          axis_min: view.getInt32(ByteOffset.input.axis.axis_min, true),
          axis_max: view.getInt32(ByteOffset.input.axis.axis_max, true),
        },
        hat: {
          hat: view.getInt32(ByteOffset.input.hat.hat, true),
          hat_mask: view.getInt32(ByteOffset.input.hat.hat_mask, true),
        },
      },
      output_type: view.getInt32(ByteOffset.output_type, true),
      output: {
        button: view.getInt32(ByteOffset.output.button, true),
        axis: {
          axis: view.getInt32(ByteOffset.output.axis.axis, true),
          axis_min: view.getInt32(ByteOffset.output.axis.axis_min, true),
          axis_max: view.getInt32(ByteOffset.output.axis.axis_max, true),
        },
      },
      free: null,
      address: null,
    } as RawGamepadBinding;

    return new GamepadBinding(result);
  }
}
