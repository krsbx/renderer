import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import type { Colorspace, PixelFormat } from '@sdl/ffi/constant/pixels';
import { ByteOffset } from './constant';

export class CameraSpec extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true) as PixelFormat;
  }

  public set format(value: PixelFormat) {
    this.$view.setUint32(ByteOffset.format, value, true);
  }

  public get colorspace() {
    return this.$view.getUint32(ByteOffset.colorspace, true) as Colorspace;
  }

  public set colorspace(value: Colorspace) {
    this.$view.setUint32(ByteOffset.colorspace, value, true);
  }

  public get width() {
    return this.$view.getInt32(ByteOffset.width, true) as Int32;
  }

  public set width(value: Int32) {
    this.$view.setInt32(ByteOffset.width, value, true);
  }

  public get height() {
    return this.$view.getInt32(ByteOffset.height, true) as Int32;
  }

  public set height(value: Int32) {
    this.$view.setInt32(ByteOffset.height, value, true);
  }

  public get framerateNumerator() {
    return this.$view.getInt32(ByteOffset.framerate_numerator, true) as Int32;
  }

  public set framerateNumerator(value: Int32) {
    this.$view.setInt32(ByteOffset.framerate_numerator, value, true);
  }

  public get framerateDenominator() {
    return this.$view.getInt32(ByteOffset.framerate_denominator, true) as Int32;
  }

  public set framerateDenominator(value: Int32) {
    this.$view.setInt32(ByteOffset.framerate_denominator, value, true);
  }
}
