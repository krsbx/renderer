import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { PixelFormat } from '../../../../ffi/pixels/constant';
import type { SurfaceFlags } from '../../../../ffi/surface/constant';
import { ByteOffset } from './constant';

export class Surface {
  public static readonly BYTE_SIZE = 40;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Surface.BYTE_SIZE);
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

  public get pitch() {
    return this.$view.getInt32(ByteOffset.pitch, true);
  }

  public set pitch(value: number) {
    this.$view.setInt32(ByteOffset.pitch, value, true);
  }

  public get pixels() {
    const addr = this.$view.getBigUint64(ByteOffset.pixels, true);

    return Number(addr) as Pointer;
  }

  public set pixels(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.pitch, BigInt(value), true);
  }

  public get refcount() {
    return this.$view.getInt32(ByteOffset.refcount, true);
  }

  public set refcount(value: number) {
    this.$view.setInt32(ByteOffset.refcount, value, true);
  }
}
