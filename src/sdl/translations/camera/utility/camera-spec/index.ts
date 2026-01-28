import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { Colorspace, PixelFormat } from '../../../../ffi/pixels/constant';
import { ByteOffset } from './constant';

export class CameraSpec {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, CameraSpec.BYTE_SIZE);
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
