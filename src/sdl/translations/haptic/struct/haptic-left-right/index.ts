import { BaseStruct } from '@basestruct';
import type { HapticEffectType } from '@sdl/ffi/constant/haptic';
import { ByteOffset } from './constant';

export class HapticLeftRight extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

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
