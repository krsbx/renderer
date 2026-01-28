import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Rectangle {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Rectangle.BYTE_SIZE);
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

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get width() {
    return this.$view.getFloat32(ByteOffset.width, true);
  }

  public set width(value: number) {
    this.$view.setFloat32(ByteOffset.width, value, true);
  }

  public get height() {
    return this.$view.getFloat32(ByteOffset.height, true);
  }

  public set height(value: number) {
    this.$view.setFloat32(ByteOffset.height, value, true);
  }
}
