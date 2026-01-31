import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { HapticEffectType } from '@sdl/ffi/constant/haptic';
import { HapticDirection } from '../haptic-direction';
import { ByteOffset } from './constant';

export class HapticRamp extends BaseStruct {
  public static override readonly BYTE_SIZE = 44;

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

  public get start() {
    return this.$view.getInt16(ByteOffset.start, true);
  }

  public set start(value: number) {
    this.$view.setInt16(ByteOffset.start, value, true);
  }

  public get end() {
    return this.$view.getInt16(ByteOffset.end, true);
  }

  public set end(value: number) {
    this.$view.setInt16(ByteOffset.end, value, true);
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
