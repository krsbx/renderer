import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { HapticDirection } from '../haptic-direction/haptic-direction';
import { ByteOffset } from './constant';

export class HapticConstant {
  public static readonly BYTE_SIZE = 40;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly direction: HapticDirection;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, HapticConstant.BYTE_SIZE);
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

  public get level() {
    return this.$view.getInt16(ByteOffset.level, true);
  }

  public set level(value: number) {
    this.$view.setInt16(ByteOffset.level, value, true);
  }

  public get attack_length() {
    return this.$view.getUint16(ByteOffset.attack_length, true);
  }

  public set attack_length(value: number) {
    this.$view.setUint16(ByteOffset.attack_length, value, true);
  }

  public get attack_level() {
    return this.$view.getUint16(ByteOffset.attack_level, true);
  }

  public set attack_level(value: number) {
    this.$view.setUint16(ByteOffset.attack_level, value, true);
  }

  public get fade_length() {
    return this.$view.getUint16(ByteOffset.fade_length, true);
  }

  public set fade_length(value: number) {
    this.$view.setUint16(ByteOffset.fade_length, value, true);
  }

  public get fade_level() {
    return this.$view.getUint16(ByteOffset.fade_level, true);
  }

  public set fade_level(value: number) {
    this.$view.setUint16(ByteOffset.fade_level, value, true);
  }
}
