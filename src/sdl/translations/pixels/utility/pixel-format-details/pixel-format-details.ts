import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class PixelFormatDetails {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, PixelFormatDetails.BYTE_SIZE);
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

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true);
  }

  public set format(value: number) {
    this.$view.setUint32(ByteOffset.format, value, true);
  }

  public get bits_per_pixel() {
    return this.$view.getUint8(ByteOffset.bits_per_pixel);
  }

  public set bits_per_pixel(value: number) {
    this.$view.setUint8(ByteOffset.bits_per_pixel, value);
  }

  public get bytes_per_pixel() {
    return this.$view.getUint8(ByteOffset.bytes_per_pixel);
  }

  public set bytes_per_pixel(value: number) {
    this.$view.setUint8(ByteOffset.bytes_per_pixel, value);
  }

  public get Rmask() {
    return this.$view.getUint32(ByteOffset.Rmask, true);
  }

  public set Rmask(value: number) {
    this.$view.setUint32(ByteOffset.Rmask, value, true);
  }

  public get Gmask() {
    return this.$view.getUint32(ByteOffset.Gmask, true);
  }

  public set Gmask(value: number) {
    this.$view.setUint32(ByteOffset.Gmask, value, true);
  }

  public get Bmask() {
    return this.$view.getUint32(ByteOffset.Bmask, true);
  }

  public set Bmask(value: number) {
    this.$view.setUint32(ByteOffset.Bmask, value, true);
  }

  public get Amask() {
    return this.$view.getUint32(ByteOffset.Amask, true);
  }

  public set Amask(value: number) {
    this.$view.setUint32(ByteOffset.Amask, value, true);
  }

  public get Rbits() {
    return this.$view.getUint8(ByteOffset.Rbits);
  }

  public set Rbits(value: number) {
    this.$view.setUint8(ByteOffset.Rbits, value);
  }

  public get Gbits() {
    return this.$view.getUint8(ByteOffset.Gbits);
  }

  public set Gbits(value: number) {
    this.$view.setUint8(ByteOffset.Gbits, value);
  }

  public get Bbits() {
    return this.$view.getUint8(ByteOffset.Bbits);
  }

  public set Bbits(value: number) {
    this.$view.setUint8(ByteOffset.Bbits, value);
  }

  public get Abits() {
    return this.$view.getUint8(ByteOffset.Abits);
  }

  public set Abits(value: number) {
    this.$view.setUint8(ByteOffset.Abits, value);
  }

  public get Rshift() {
    return this.$view.getUint8(ByteOffset.Rshift);
  }

  public set Rshift(value: number) {
    this.$view.setUint8(ByteOffset.Rshift, value);
  }

  public get Gshift() {
    return this.$view.getUint8(ByteOffset.Gshift);
  }

  public set Gshift(value: number) {
    this.$view.setUint8(ByteOffset.Gshift, value);
  }

  public get Bshift() {
    return this.$view.getUint8(ByteOffset.Bshift);
  }

  public set Bshift(value: number) {
    this.$view.setUint8(ByteOffset.Bshift, value);
  }

  public get Ashift() {
    return this.$view.getUint8(ByteOffset.Ashift);
  }

  public set Ashift(value: number) {
    this.$view.setUint8(ByteOffset.Ashift, value);
  }
}
