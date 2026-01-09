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

  public get displayID() {
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
    return this.$view.getInt32(ByteOffset.pixelDensity, true);
  }

  public set pixelDensity(value: number) {
    this.$view.setInt32(ByteOffset.pixelDensity, value, true);
  }

  public get refreshRate() {
    return this.$view.getInt32(ByteOffset.refreshRate, true);
  }

  public set refreshRate(value: number) {
    this.$view.setInt32(ByteOffset.refreshRate, value, true);
  }

  public get refreshRateNumerator() {
    return this.$view.getInt32(ByteOffset.refreshRateNumerator, true);
  }

  public set refreshRateNumerator(value: number) {
    this.$view.setInt32(ByteOffset.refreshRateNumerator, value, true);
  }

  public get refreshRateDenominator() {
    return this.$view.getInt32(ByteOffset.refreshRateDenominator, true);
  }

  public set refreshRateDenominator(value: number) {
    this.$view.setInt32(ByteOffset.refreshRateDenominator, value, true);
  }
}
