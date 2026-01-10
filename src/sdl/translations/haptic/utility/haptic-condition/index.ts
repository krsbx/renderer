import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import type { NumericRange } from '../../../../types/shared';
import { HapticDirection } from '../haptic-direction/haptic-direction';
import { ByteOffset } from './constant';

export class HapticCondition {
  public static readonly BYTE_SIZE = 72;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly direction: HapticDirection;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, HapticCondition.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.direction = new HapticDirection(
      this.$memory.subarray(
        ByteOffset.direction,
        HapticDirection.BYTE_SIZE + ByteOffset.direction
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get type() {
    return this.$view.getUint16(ByteOffset.type, true) as HapticEffectType;
  }

  public set type(value: HapticEffectType) {
    this.$view.setUint16(ByteOffset.type, value, true);
  }

  public get length() {
    return this.$view.getUint32(ByteOffset.length, true);
  }

  public set length(value: number) {
    this.$view.setUint32(ByteOffset.length, value, true);
  }

  public get delay() {
    return this.$view.getUint16(ByteOffset.delay, true);
  }

  public set delay(value: number) {
    this.$view.setUint16(ByteOffset.delay, value, true);
  }

  public get button() {
    return this.$view.getUint16(ByteOffset.button, true);
  }

  public set button(value: number) {
    this.$view.setUint16(ByteOffset.button, value, true);
  }

  public get interval() {
    return this.$view.getUint16(ByteOffset.interval, true);
  }

  public set interval(value: number) {
    this.$view.setUint16(ByteOffset.interval, value, true);
  }

  public getRight_sat(index: NumericRange<0, 2>) {
    return this.$view.getUint16(ByteOffset.right_sat1 + index * 2, true);
  }

  public setRight_sat(index: NumericRange<0, 2>, value: number) {
    this.$view.setUint16(ByteOffset.right_sat1 + index * 2, value, true);
  }

  public getLeft_sat(index: NumericRange<0, 2>) {
    return this.$view.getUint16(ByteOffset.left_sat1 + index * 2, true);
  }

  public setLeft_sat(index: NumericRange<0, 2>, value: number) {
    this.$view.setUint16(ByteOffset.left_sat1 + index * 2, value, true);
  }

  public getRight_coeff(index: NumericRange<0, 2>) {
    return this.$view.getInt16(ByteOffset.right_coeff1 + index * 2, true);
  }

  public setRight_coeff(index: NumericRange<0, 2>, value: number) {
    this.$view.setInt16(ByteOffset.right_coeff1 + index * 2, value, true);
  }

  public getLeft_coeff(index: NumericRange<0, 2>) {
    return this.$view.getInt16(ByteOffset.left_coeff1 + index * 2, true);
  }

  public setLeft_coeff(index: NumericRange<0, 2>, value: number) {
    this.$view.setInt16(ByteOffset.left_coeff1 + index * 2, value, true);
  }

  public getDeadband(index: NumericRange<0, 2>) {
    return this.$view.getUint16(ByteOffset.deadband1 + index * 2, true);
  }

  public setDeadband(index: NumericRange<0, 2>, value: number) {
    this.$view.setUint16(ByteOffset.deadband1 + index * 2, value, true);
  }

  public getCenter(index: NumericRange<0, 2>) {
    return this.$view.getInt16(ByteOffset.center1 + index * 2, true);
  }

  public setCenter(index: NumericRange<0, 2>, value: number) {
    this.$view.setInt16(ByteOffset.center1 + index * 2, value, true);
  }
}
