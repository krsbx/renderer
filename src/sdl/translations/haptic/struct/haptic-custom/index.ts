import type { UInt16, UInt32, UInt8 } from '@/types/primitive';
import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { HapticEffectType } from '@sdl/ffi/constant/haptic';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { HapticDirection } from '../haptic-direction';
import { ByteOffset } from './constant';

export class HapticCustom extends BaseStruct {
  public static override readonly BYTE_SIZE = 64;

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

  public get channels() {
    return this.$view.getUint8(ByteOffset.channels) as UInt8;
  }

  public set channels(value: UInt8) {
    this.$view.setUint8(ByteOffset.channels, value);
  }

  public get period() {
    return this.$view.getUint16(ByteOffset.period, true) as UInt16;
  }

  public set period(value: UInt16) {
    this.$view.setUint16(ByteOffset.period, value, true);
  }

  public get samples() {
    return this.$view.getUint16(ByteOffset.samples, true) as UInt16;
  }

  public set samples(value: UInt16) {
    this.$view.setUint16(ByteOffset.samples, value, true);
  }

  public get data_ptr() {
    const dataAddr = this.$view.getBigUint64(ByteOffset.data, true);
    const dataPtr = Number(dataAddr) as Pointer;

    return dataPtr;
  }

  public set data_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.data, BigInt(value), true);
  }

  public get data() {
    const ptr = this.data_ptr;

    if (!ptr) return null;

    const count = this.channels * this.samples;

    if (!count) return null;

    const buffer = toArrayBuffer(ptr, 0, count * 2);

    return new Uint16Array(buffer);
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
