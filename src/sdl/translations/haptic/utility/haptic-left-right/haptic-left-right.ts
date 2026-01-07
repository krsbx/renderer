import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { ByteOffset } from './constant';

export class HapticLeftRight {
  public static readonly BYTE_SIZE = 12;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
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

  public get type() {
    return this.$view.getUint16(ByteOffset.type, true) as HapticEffectType;
  }

  public set type(value: number) {
    this.$view.setUint16(ByteOffset.type, value, true);
  }

  public get length() {
    return this.$view.getUint32(ByteOffset.length, true);
  }

  public set length(value: number) {
    this.$view.setUint32(ByteOffset.length, value, true);
  }

  public get large_magnitude() {
    return this.$view.getUint16(ByteOffset.large_magnitude, true);
  }

  public set large_magnitude(value: number) {
    this.$view.setUint16(ByteOffset.large_magnitude, value, true);
  }

  public get small_magnitude() {
    return this.$view.getUint16(ByteOffset.small_magnitude, true);
  }

  public set small_magnitude(value: number) {
    this.$view.setUint16(ByteOffset.small_magnitude, value, true);
  }
}
