import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import type { PixelFormat } from '@sdl/ffi/constant/pixels';
import type { SurfaceFlags } from '@sdl/ffi/constant/surface';
import { type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Surface extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public get flags() {
    return this.$view.getUint32(ByteOffset.flags, true) as SurfaceFlags;
  }

  public set flags(value: SurfaceFlags) {
    this.$view.setUint32(ByteOffset.flags, value, true);
  }

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true) as PixelFormat;
  }

  public set format(value: PixelFormat) {
    this.$view.setUint32(ByteOffset.format, value, true);
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

  public get pitch() {
    return this.$view.getInt32(ByteOffset.pitch, true) as Int32;
  }

  public set pitch(value: Int32) {
    this.$view.setInt32(ByteOffset.pitch, value, true);
  }

  public get pixels() {
    const addr = this.$view.getBigUint64(ByteOffset.pixels, true);

    return Number(addr) as Pointer;
  }

  public set pixels(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.pixels, BigInt(value), true);
  }

  public get refcount() {
    return this.$view.getInt32(ByteOffset.refcount, true) as Int32;
  }

  public set refcount(value: Int32) {
    this.$view.setInt32(ByteOffset.refcount, value, true);
  }
}
