import type { UInt16, UInt32 } from '@/types/primitive';
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
    return this.$view.getUint32(ByteOffset.length, true) as UInt32;
  }

  public set length(value: UInt32) {
    this.$view.setUint32(ByteOffset.length, value, true);
  }

  public get largeMagnitude() {
    return this.$view.getUint16(ByteOffset.large_magnitude, true) as UInt16;
  }

  public set largeMagnitude(value: UInt16) {
    this.$view.setUint16(ByteOffset.large_magnitude, value, true);
  }

  public get smallMagnitude() {
    return this.$view.getUint16(ByteOffset.small_magnitude, true) as UInt16;
  }

  public set smallMagnitude(value: UInt16) {
    this.$view.setUint16(ByteOffset.small_magnitude, value, true);
  }
}
