import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class CameraSpec {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
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
    const buffer = new Uint8Array(CameraSpec.BYTE_SIZE);

    return buffer;
  }

  public get format() {
    return this.$view.getUint32(ByteOffset.format, true);
  }

  public set format(value: number) {
    this.$view.setUint32(ByteOffset.format, value, true);
  }

  public get colorspace() {
    return this.$view.getUint32(ByteOffset.colorspace, true);
  }

  public set colorspace(value: number) {
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

  public get framerate_numerator() {
    return this.$view.getInt32(ByteOffset.framerate_numerator, true);
  }

  public set framerate_numerator(value: number) {
    this.$view.setInt32(ByteOffset.framerate_numerator, value, true);
  }

  public get framerate_denominator() {
    return this.$view.getInt32(ByteOffset.framerate_denominator, true);
  }

  public set framerate_denominator(value: number) {
    this.$view.setInt32(ByteOffset.framerate_denominator, value, true);
  }
}
