import { BaseStruct } from '@/utility/base-struct';
import type { Colorspace, PixelFormat } from '../../../../ffi/pixels/constant';
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
    return this.$view.getInt32(ByteOffset.width, true);
  }

  public set width(value: number) {
    this.$view.setInt32(ByteOffset.width, value, true);
  }

  public get height() {
    return this.$view.getInt32(ByteOffset.height, true);
  }

  public set height(value: number) {
    this.$view.setInt32(ByteOffset.height, value, true);
  }

  public get framerateNumerator() {
    return this.$view.getInt32(ByteOffset.framerate_numerator, true);
  }

  public set framerateNumerator(value: number) {
    this.$view.setInt32(ByteOffset.framerate_numerator, value, true);
  }

  public get framerateDenominator() {
    return this.$view.getInt32(ByteOffset.framerate_denominator, true);
  }

  public set framerateDenominator(value: number) {
    this.$view.setInt32(ByteOffset.framerate_denominator, value, true);
  }
}
