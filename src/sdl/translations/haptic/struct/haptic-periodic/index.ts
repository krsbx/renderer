import type { Int16, UInt16, UInt32 } from '@/types/primitive';
import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { HapticEffectType } from '@sdl/ffi/constant/haptic';
import { HapticDirection } from '../haptic-direction';
import { ByteOffset } from './constant';

export class HapticPeriodic extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  public readonly direction: HapticDirection;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.direction = new HapticDirection(
      this.$memory.subarray(
        ByteOffset.direction,
        HapticDirection.BYTE_SIZE + ByteOffset.direction
      )
    );
  }

  public get type() {
    return this.$view.getUint16(ByteOffset.type, true) as HapticEffectType;
  }

  public set type(value: HapticEffectType) {
    this.$view.setUint16(ByteOffset.type, value, true);
  }

  public get length() {
    return this.$view.getUint32(ByteOffset.length, true) as UInt32;
  }

  public set length(value: UInt32) {
    this.$view.setUint32(ByteOffset.length, value, true);
  }

  public get delay() {
    return this.$view.getUint16(ByteOffset.delay, true) as UInt16;
  }

  public set delay(value: UInt16) {
    this.$view.setUint16(ByteOffset.delay, value, true);
  }

  public get button() {
    return this.$view.getUint16(ByteOffset.button, true) as UInt16;
  }

  public set button(value: UInt16) {
    this.$view.setUint16(ByteOffset.button, value, true);
  }

  public get interval() {
    return this.$view.getUint16(ByteOffset.interval, true) as UInt16;
  }

  public set interval(value: UInt16) {
    this.$view.setUint16(ByteOffset.interval, value, true);
  }

  public get period() {
    return this.$view.getUint16(ByteOffset.period, true) as UInt16;
  }

  public set period(value: UInt16) {
    this.$view.setUint16(ByteOffset.period, value, true);
  }

  public get magnitude() {
    return this.$view.getInt16(ByteOffset.magnitude, true) as Int16;
  }

  public set magnitude(value: Int16) {
    this.$view.setInt16(ByteOffset.magnitude, value, true);
  }

  public get attackLength() {
    return this.$view.getUint16(ByteOffset.attack_length, true) as UInt16;
  }

  public set attackLength(value: UInt16) {
    this.$view.setUint16(ByteOffset.attack_length, value, true);
  }

  public get attackLevel() {
    return this.$view.getUint16(ByteOffset.attack_level, true) as UInt16;
  }

  public set attackLevel(value: UInt16) {
    this.$view.setUint16(ByteOffset.attack_level, value, true);
  }

  public get fadeLength() {
    return this.$view.getUint16(ByteOffset.fade_length, true) as UInt16;
  }

  public set fadeLength(value: UInt16) {
    this.$view.setUint16(ByteOffset.fade_length, value, true);
  }

  public get fadeLevel() {
    return this.$view.getUint16(ByteOffset.fade_level, true) as UInt16;
  }

  public set fadeLevel(value: UInt16) {
    this.$view.setUint16(ByteOffset.fade_level, value, true);
  }
}
