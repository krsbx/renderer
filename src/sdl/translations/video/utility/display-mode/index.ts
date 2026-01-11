import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class DisplayMode {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, DisplayMode.BYTE_SIZE);
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

  public get displayId() {
    return this.$view.getInt32(ByteOffset.displayID, true);
  }

  public set displayID(value: number) {
    this.$view.setInt32(ByteOffset.displayID, value, true);
  }

  public get format() {
    return this.$view.getInt32(ByteOffset.format, true);
  }

  public set format(value: number) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }

  public get w() {
    return this.$view.getInt32(ByteOffset.w, true);
  }

  public set w(value: number) {
    this.$view.setInt32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getInt32(ByteOffset.h, true);
  }

  public set h(value: number) {
    this.$view.setInt32(ByteOffset.h, value, true);
  }

  public get pixelDensity() {
    return this.$view.getInt32(ByteOffset.pixel_density, true);
  }

  public set pixelDensity(value: number) {
    this.$view.setInt32(ByteOffset.pixel_density, value, true);
  }

  public get refreshRate() {
    return this.$view.getInt32(ByteOffset.refresh_rate, true);
  }

  public set refreshRate(value: number) {
    this.$view.setInt32(ByteOffset.refresh_rate, value, true);
  }

  public get refreshRateNumerator() {
    return this.$view.getInt32(ByteOffset.refresh_rate_numerator, true);
  }

  public set refreshRateNumerator(value: number) {
    this.$view.setInt32(ByteOffset.refresh_rate_numerator, value, true);
  }

  public get refreshRateDenominator() {
    return this.$view.getInt32(ByteOffset.refresh_rate_denominator, true);
  }

  public set refreshRateDenominator(value: number) {
    this.$view.setInt32(ByteOffset.refresh_rate_denominator, value, true);
  }
}
