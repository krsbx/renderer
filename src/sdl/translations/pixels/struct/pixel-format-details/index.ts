import type { UInt32, UInt8 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class PixelFormatDetails extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true) as UInt32;
  }

  public set format(value: UInt32) {
    this.$view.setUint32(ByteOffset.format, value, true);
  }

  public get bitsPerPixel() {
    return this.$view.getUint8(ByteOffset.bits_per_pixel) as UInt8;
  }

  public set bitsPerPixel(value: UInt8) {
    this.$view.setUint8(ByteOffset.bits_per_pixel, value);
  }

  public get bytesPerPixel() {
    return this.$view.getUint8(ByteOffset.bytes_per_pixel) as UInt8;
  }

  public set bytesPerPixel(value: UInt8) {
    this.$view.setUint8(ByteOffset.bytes_per_pixel, value);
  }

  public get rMask() {
    return this.$view.getUint32(ByteOffset.Rmask, true) as UInt32;
  }

  public set rMask(value: UInt32) {
    this.$view.setUint32(ByteOffset.Rmask, value, true);
  }

  public get gMask() {
    return this.$view.getUint32(ByteOffset.Gmask, true) as UInt32;
  }

  public set gMask(value: UInt32) {
    this.$view.setUint32(ByteOffset.Gmask, value, true);
  }

  public get bMask() {
    return this.$view.getUint32(ByteOffset.Bmask, true) as UInt32;
  }

  public set bMask(value: UInt32) {
    this.$view.setUint32(ByteOffset.Bmask, value, true);
  }

  public get aMask() {
    return this.$view.getUint32(ByteOffset.Amask, true) as UInt32;
  }

  public set aMask(value: UInt32) {
    this.$view.setUint32(ByteOffset.Amask, value, true);
  }

  public get rBits() {
    return this.$view.getUint8(ByteOffset.Rbits) as UInt8;
  }

  public set rBits(value: UInt8) {
    this.$view.setUint8(ByteOffset.Rbits, value);
  }

  public get gBits() {
    return this.$view.getUint8(ByteOffset.Gbits) as UInt8;
  }

  public set gBits(value: UInt8) {
    this.$view.setUint8(ByteOffset.Gbits, value);
  }

  public get bBits() {
    return this.$view.getUint8(ByteOffset.Bbits) as UInt8;
  }

  public set bBits(value: UInt8) {
    this.$view.setUint8(ByteOffset.Bbits, value);
  }

  public get aBits() {
    return this.$view.getUint8(ByteOffset.Abits) as UInt8;
  }

  public set aBits(value: UInt8) {
    this.$view.setUint8(ByteOffset.Abits, value);
  }

  public get rShift() {
    return this.$view.getUint8(ByteOffset.Rshift) as UInt8;
  }

  public set rShift(value: UInt8) {
    this.$view.setUint8(ByteOffset.Rshift, value);
  }

  public get gShift() {
    return this.$view.getUint8(ByteOffset.Gshift) as UInt8;
  }

  public set gShift(value: UInt8) {
    this.$view.setUint8(ByteOffset.Gshift, value);
  }

  public get bShift() {
    return this.$view.getUint8(ByteOffset.Bshift) as UInt8;
  }

  public set bShift(value: UInt8) {
    this.$view.setUint8(ByteOffset.Bshift, value);
  }

  public get aShift() {
    return this.$view.getUint8(ByteOffset.Ashift) as UInt8;
  }

  public set aShift(value: UInt8) {
    this.$view.setUint8(ByteOffset.Ashift, value);
  }
}
