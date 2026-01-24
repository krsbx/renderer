import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Point {
  public static readonly BYTE_SIZE = 8;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Point.BYTE_SIZE);
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
}
