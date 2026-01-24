import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Rect {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Rect.BYTE_SIZE);
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

  public get x() {
    return this.$view.getInt32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setInt32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getInt32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setInt32(ByteOffset.y, value, true);
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
}
