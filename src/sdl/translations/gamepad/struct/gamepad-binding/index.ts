import type { Int32 } from '@/types/primitive';
import { BaseStruct, type BaseStructOptions } from '@basestruct';
import { GamepadBindingType, GamepadButton } from '@sdl/ffi/constant/gamepad';
import { ByteOffset } from './constant';
import type { GamepadInput, GamepadOutput } from './types';

export class GamepadBinding extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public readonly input: GamepadInput;
  public readonly output: GamepadOutput;

  public constructor(data: BaseStructOptions) {
    super(data);

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
          return view.getInt32(ByteOffset.input.axis.axis, true) as Int32;
        },
        set axis(value: Int32) {
          view.setInt32(ByteOffset.input.axis.axis, value, true);
        },
        get min() {
          return view.getInt32(ByteOffset.input.axis.axis_min, true) as Int32;
        },
        set min(value: Int32) {
          view.setInt32(ByteOffset.input.axis.axis_min, value, true);
        },
        get max() {
          return view.getInt32(ByteOffset.input.axis.axis_max, true) as Int32;
        },
        set max(value: Int32) {
          view.setInt32(ByteOffset.input.axis.axis_max, value, true);
        },
      },
      hat: {
        get hat() {
          return view.getInt32(ByteOffset.input.hat.hat, true) as Int32;
        },
        set hat(value: Int32) {
          view.setInt32(ByteOffset.input.hat.hat, value, true);
        },
        get mask() {
          return view.getInt32(ByteOffset.input.hat.hat_mask, true) as Int32;
        },
        set mask(value: Int32) {
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
          return view.getInt32(ByteOffset.output.axis.axis, true) as Int32;
        },
        set axis(value: Int32) {
          view.setInt32(ByteOffset.output.axis.axis, value, true);
        },
        get min() {
          return view.getInt32(ByteOffset.output.axis.axis_min, true) as Int32;
        },
        set min(value: Int32) {
          view.setInt32(ByteOffset.output.axis.axis_min, value, true);
        },
        get max() {
          return view.getInt32(ByteOffset.output.axis.axis_max, true) as Int32;
        },
        set max(value: Int32) {
          view.setInt32(ByteOffset.output.axis.axis_max, value, true);
        },
      },
    };
  }

  public get inputType() {
    return this.$view.getInt32(
      ByteOffset.input_type,
      true
    ) as GamepadBindingType;
  }

  public set inputType(value: GamepadBindingType) {
    this.$view.setInt32(ByteOffset.input_type, value, true);
  }

  public get outputType() {
    return this.$view.getInt32(
      ByteOffset.output_type,
      true
    ) as GamepadBindingType;
  }

  public set outputType(value: GamepadBindingType) {
    this.$view.setInt32(ByteOffset.output_type, value, true);
  }
}
