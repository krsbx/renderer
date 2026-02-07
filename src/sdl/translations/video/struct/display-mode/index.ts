import type { DisplayID } from '@/sdl/types/definition';
import type { Float, Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class DisplayMode extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get displayId() {
    return this.$view.getUint32(ByteOffset.displayID, true) as DisplayID;
  }

  public set displayID(value: DisplayID) {
    this.$view.setUint32(ByteOffset.displayID, value, true);
  }

  public get format() {
    return this.$view.getInt32(ByteOffset.format, true) as Int32;
  }

  public set format(value: Int32) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }

  public get w() {
    return this.$view.getInt32(ByteOffset.w, true) as Int32;
  }

  public set w(value: Int32) {
    this.$view.setInt32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getInt32(ByteOffset.h, true) as Int32;
  }

  public set h(value: Int32) {
    this.$view.setInt32(ByteOffset.h, value, true);
  }

  public get pixelDensity() {
    return this.$view.getFloat32(ByteOffset.pixel_density, true) as Float;
  }

  public set pixelDensity(value: Float) {
    this.$view.setFloat32(ByteOffset.pixel_density, value, true);
  }

  public get refreshRate() {
    return this.$view.getFloat32(ByteOffset.refresh_rate, true) as Float;
  }

  public set refreshRate(value: Float) {
    this.$view.setFloat32(ByteOffset.refresh_rate, value, true);
  }

  public get refreshRateNumerator() {
    return this.$view.getInt32(
      ByteOffset.refresh_rate_numerator,
      true
    ) as Int32;
  }

  public set refreshRateNumerator(value: Int32) {
    this.$view.setInt32(ByteOffset.refresh_rate_numerator, value, true);
  }

  public get refreshRateDenominator() {
    return this.$view.getInt32(
      ByteOffset.refresh_rate_denominator,
      true
    ) as Int32;
  }

  public set refreshRateDenominator(value: Int32) {
    this.$view.setInt32(ByteOffset.refresh_rate_denominator, value, true);
  }
}
