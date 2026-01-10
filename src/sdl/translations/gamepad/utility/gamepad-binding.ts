import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import {
  GamepadBindingType,
  GamepadButton,
} from '../../../ffi/gamepad/constant';
import { ByteOffset } from './constant';
import type { GamepadInput, GamepadOutput } from './types';

export class GamepadBinding {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly input: GamepadInput;

  public readonly output: GamepadOutput;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GamepadBinding.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.input = this.createInputBinding();
    this.output = this.createOutputBinding();
  }

  private createInputBinding() {
    const view = this.$view;

    return {
      get button() {
        return view.getInt32(ByteOffset.input.button, true) as GamepadButton;
      },
      set button(value: GamepadButton) {
        view.setInt32(ByteOffset.input.button, value, true);
      },
      axis: {
        get axis() {
          return view.getInt32(ByteOffset.input.axis.axis, true);
        },
        set axis(value: number) {
          view.setInt32(ByteOffset.input.axis.axis, value, true);
        },
        get min() {
          return view.getInt32(ByteOffset.input.axis.axis_min, true);
        },
        set min(value: number) {
          view.setInt32(ByteOffset.input.axis.axis_min, value, true);
        },
        get max() {
          return view.getInt32(ByteOffset.input.axis.axis_max, true);
        },
        set max(value: number) {
          view.setInt32(ByteOffset.input.axis.axis_max, value, true);
        },
      },
      hat: {
        get hat() {
          return view.getInt32(ByteOffset.input.hat.hat, true);
        },
        set hat(value: number) {
          view.setInt32(ByteOffset.input.hat.hat, value, true);
        },
        get mask() {
          return view.getInt32(ByteOffset.input.hat.hat_mask, true);
        },
        set mask(value: number) {
          view.setInt32(ByteOffset.input.hat.hat_mask, value, true);
        },
      },
    };
  }

  private createOutputBinding() {
    const view = this.$view;

    return {
      get button() {
        return view.getInt32(ByteOffset.output.button, true) as GamepadButton;
      },
      set button(value: GamepadButton) {
        view.setInt32(ByteOffset.output.button, value, true);
      },
      axis: {
        get axis() {
          return view.getInt32(ByteOffset.output.axis.axis, true);
        },
        set axis(value: number) {
          view.setInt32(ByteOffset.output.axis.axis, value, true);
        },
        get min() {
          return view.getInt32(ByteOffset.output.axis.axis_min, true);
        },
        set min(value: number) {
          view.setInt32(ByteOffset.output.axis.axis_min, value, true);
        },
        get max() {
          return view.getInt32(ByteOffset.output.axis.axis_max, true);
        },
        set max(value: number) {
          view.setInt32(ByteOffset.output.axis.axis_max, value, true);
        },
      },
    };
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get input_type() {
    return this.$view.getInt32(
      ByteOffset.input_type,
      true
    ) as GamepadBindingType;
  }

  public set input_type(value: GamepadBindingType) {
    this.$view.setInt32(ByteOffset.input_type, value, true);
  }

  public get output_type() {
    return this.$view.getInt32(
      ByteOffset.output_type,
      true
    ) as GamepadBindingType;
  }

  public set output_type(value: GamepadBindingType) {
    this.$view.setInt32(ByteOffset.output_type, value, true);
  }
}
