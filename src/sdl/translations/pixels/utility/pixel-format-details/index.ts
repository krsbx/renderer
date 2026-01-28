import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class PixelFormatDetails {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
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

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true);
  }

  public set format(value: number) {
    this.$view.setUint32(ByteOffset.format, value, true);
  }

  public get bitsPerPixel() {
    return this.$view.getUint8(ByteOffset.bits_per_pixel);
  }

  public set bitsPerPixel(value: number) {
    this.$view.setUint8(ByteOffset.bits_per_pixel, value);
  }

  public get bytesPerPixel() {
    return this.$view.getUint8(ByteOffset.bytes_per_pixel);
  }

  public set bytesPerPixel(value: number) {
    this.$view.setUint8(ByteOffset.bytes_per_pixel, value);
  }

  public get rMask() {
    return this.$view.getUint32(ByteOffset.Rmask, true);
  }

  public set rMask(value: number) {
    this.$view.setUint32(ByteOffset.Rmask, value, true);
  }

  public get gMask() {
    return this.$view.getUint32(ByteOffset.Gmask, true);
  }

  public set gMask(value: number) {
    this.$view.setUint32(ByteOffset.Gmask, value, true);
  }

  public get bMask() {
    return this.$view.getUint32(ByteOffset.Bmask, true);
  }

  public set bMask(value: number) {
    this.$view.setUint32(ByteOffset.Bmask, value, true);
  }

  public get aMask() {
    return this.$view.getUint32(ByteOffset.Amask, true);
  }

  public set aMask(value: number) {
    this.$view.setUint32(ByteOffset.Amask, value, true);
  }

  public get rBits() {
    return this.$view.getUint8(ByteOffset.Rbits);
  }

  public set rBits(value: number) {
    this.$view.setUint8(ByteOffset.Rbits, value);
  }

  public get gBits() {
    return this.$view.getUint8(ByteOffset.Gbits);
  }

  public set gBits(value: number) {
    this.$view.setUint8(ByteOffset.Gbits, value);
  }

  public get bBits() {
    return this.$view.getUint8(ByteOffset.Bbits);
  }

  public set bBits(value: number) {
    this.$view.setUint8(ByteOffset.Bbits, value);
  }

  public get aBits() {
    return this.$view.getUint8(ByteOffset.Abits);
  }

  public set aBits(value: number) {
    this.$view.setUint8(ByteOffset.Abits, value);
  }

  public get rShift() {
    return this.$view.getUint8(ByteOffset.Rshift);
  }

  public set rShift(value: number) {
    this.$view.setUint8(ByteOffset.Rshift, value);
  }

  public get gShift() {
    return this.$view.getUint8(ByteOffset.Gshift);
  }

  public set gShift(value: number) {
    this.$view.setUint8(ByteOffset.Gshift, value);
  }

  public get bShift() {
    return this.$view.getUint8(ByteOffset.Bshift);
  }

  public set bShift(value: number) {
    this.$view.setUint8(ByteOffset.Bshift, value);
  }

  public get aShift() {
    return this.$view.getUint8(ByteOffset.Ashift);
  }

  public set aShift(value: number) {
    this.$view.setUint8(ByteOffset.Ashift, value);
  }
}
