import { BaseStruct } from '@/utility/base-struct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Image extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  private $data: Uint8Array | null = null;

  public get data_ptr() {
    const dataAddr = this.$view.getBigUint64(ByteOffset.data, true);
    const dataPtr = Number(dataAddr) as Pointer;

    return dataPtr;
  }

  public set data_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.data, BigInt(value), true);
    this.$data = null;
  }

  public get data() {
    if (this.$data) return this.$data;

    const ptr = this.data_ptr;
    if (!ptr) return null;

    // Calculate byte size based on format (approximation using 4 bytes per pixel for RGBA)
    // The actual size depends on the pixel format, but we use a conservative estimate
    const length = this.width * this.height * 4;
    const buffer = toArrayBuffer(ptr, 0, length);

    this.$data = new Uint8Array(buffer);

    return this.$data;
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

  public get mipmaps() {
    return this.$view.getInt32(ByteOffset.mipmaps, true);
  }

  public set mipmaps(value: number) {
    this.$view.setInt32(ByteOffset.mipmaps, value, true);
  }

  public get format() {
    return this.$view.getInt32(ByteOffset.format, true);
  }

  public set format(value: number) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }
}
