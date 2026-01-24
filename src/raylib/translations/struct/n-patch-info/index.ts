import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { Rectangle } from '../rectangle';
import { ByteOffset } from './constant';

export class NPatchInfo {
  public static readonly BYTE_SIZE = 36;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly source: Rectangle;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, NPatchInfo.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.source = new Rectangle(
      this.$memory.subarray(
        ByteOffset.source,
        ByteOffset.source + Rectangle.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get left() {
    return this.$view.getInt32(ByteOffset.left, true);
  }

  public set left(value: number) {
    this.$view.setInt32(ByteOffset.left, value, true);
  }

  public get top() {
    return this.$view.getInt32(ByteOffset.top, true);
  }

  public set top(value: number) {
    this.$view.setInt32(ByteOffset.top, value, true);
  }

  public get right() {
    return this.$view.getInt32(ByteOffset.right, true);
  }

  public set right(value: number) {
    this.$view.setInt32(ByteOffset.right, value, true);
  }

  public get bottom() {
    return this.$view.getInt32(ByteOffset.bottom, true);
  }

  public set bottom(value: number) {
    this.$view.setInt32(ByteOffset.bottom, value, true);
  }

  public get layout() {
    return this.$view.getInt32(ByteOffset.layout, true);
  }

  public set layout(value: number) {
    this.$view.setInt32(ByteOffset.layout, value, true);
  }
}
