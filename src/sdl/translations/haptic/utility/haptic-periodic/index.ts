import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { HapticDirection } from '../haptic-direction';
import { ByteOffset } from './constant';

export class HapticPeriodic {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly direction: HapticDirection;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, HapticPeriodic.BYTE_SIZE);
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

  public get period() {
    return this.$view.getInt16(ByteOffset.period, true);
  }

  public set period(value: number) {
    this.$view.setInt16(ByteOffset.period, value, true);
  }

  public get magnitude() {
    return this.$view.getInt16(ByteOffset.magnitude, true);
  }

  public set magnitude(value: number) {
    this.$view.setInt16(ByteOffset.magnitude, value, true);
  }

  public get attackLength() {
    return this.$view.getUint16(ByteOffset.attack_length, true);
  }

  public set attackLength(value: number) {
    this.$view.setUint16(ByteOffset.attack_length, value, true);
  }

  public get attackLevel() {
    return this.$view.getUint16(ByteOffset.attack_level, true);
  }

  public set attackLevel(value: number) {
    this.$view.setUint16(ByteOffset.attack_level, value, true);
  }

  public get fadeLength() {
    return this.$view.getUint16(ByteOffset.fade_length, true);
  }

  public set fadeLength(value: number) {
    this.$view.setUint16(ByteOffset.fade_length, value, true);
  }

  public get fadeLevel() {
    return this.$view.getUint16(ByteOffset.fade_level, true);
  }

  public set fadeLevel(value: number) {
    this.$view.setUint16(ByteOffset.fade_level, value, true);
  }
}
