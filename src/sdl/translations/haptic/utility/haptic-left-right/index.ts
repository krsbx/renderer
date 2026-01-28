import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { ByteOffset } from './constant';

export class HapticLeftRight {
  public static readonly BYTE_SIZE = 12;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, HapticLeftRight.BYTE_SIZE);
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
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
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

  public get largeMagnitude() {
    return this.$view.getUint16(ByteOffset.large_magnitude, true);
  }

  public set largeMagnitude(value: number) {
    this.$view.setUint16(ByteOffset.large_magnitude, value, true);
  }

  public get smallMagnitude() {
    return this.$view.getUint16(ByteOffset.small_magnitude, true);
  }

  public set smallMagnitude(value: number) {
    this.$view.setUint16(ByteOffset.small_magnitude, value, true);
  }
}
