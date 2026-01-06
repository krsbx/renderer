import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import {
  GamepadBindingType,
  GamepadButton,
} from '../../../ffi/gamepad/constant';
import { ByteOffset } from './constant';

export class GamepadBinding {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

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
  }

  public static allocMemory() {
    const buffer = new Uint8Array(GamepadBinding.BYTE_SIZE);

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

  public get input_button() {
    return this.$view.getInt32(ByteOffset.input.button, true) as GamepadButton;
  }

  public set input_button(value: GamepadButton) {
    this.$view.setInt32(ByteOffset.input.button, value, true);
  }

  public get input_axis_axis() {
    return this.$view.getInt32(ByteOffset.input.axis.axis, true);
  }

  public set input_axis_axis(value: number) {
    this.$view.setInt32(ByteOffset.input.axis.axis, value, true);
  }

  public get input_axis_axis_min() {
    return this.$view.getInt32(ByteOffset.input.axis.axis_min, true);
  }

  public set input_axis_axis_min(value: number) {
    this.$view.setInt32(ByteOffset.input.axis.axis_min, value, true);
  }

  public get input_axis_axis_max() {
    return this.$view.getInt32(ByteOffset.input.axis.axis_max, true);
  }

  public set input_axis_axis_max(value: number) {
    this.$view.setInt32(ByteOffset.input.axis.axis_max, value, true);
  }

  public get input_hat_hat() {
    return this.$view.getInt32(ByteOffset.input.hat.hat, true);
  }

  public set input_hat_hat(value: number) {
    this.$view.setInt32(ByteOffset.input.hat.hat, value, true);
  }

  public get input_hat_hat_mask() {
    return this.$view.getInt32(ByteOffset.input.hat.hat_mask, true);
  }

  public set input_hat_hat_mask(value: number) {
    this.$view.setInt32(ByteOffset.input.hat.hat_mask, value, true);
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

  public get output_button() {
    return this.$view.getInt32(ByteOffset.output.button, true) as GamepadButton;
  }

  public set output_button(value: GamepadButton) {
    this.$view.setInt32(ByteOffset.output.button, value, true);
  }

  public get output_axis_axis() {
    return this.$view.getInt32(ByteOffset.output.axis.axis, true);
  }

  public set output_axis_axis(value: number) {
    this.$view.setInt32(ByteOffset.output.axis.axis, value, true);
  }

  public get output_axis_axis_min() {
    return this.$view.getInt32(ByteOffset.output.axis.axis_min, true);
  }

  public set output_axis_axis_min(value: number) {
    this.$view.setInt32(ByteOffset.output.axis.axis_min, value, true);
  }

  public get output_axis_axis_max() {
    return this.$view.getInt32(ByteOffset.output.axis.axis_max, true);
  }

  public set output_axis_axis_max(value: number) {
    this.$view.setInt32(ByteOffset.output.axis.axis_max, value, true);
  }
}
