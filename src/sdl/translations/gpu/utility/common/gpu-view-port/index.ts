import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUViewport {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GPUViewport.BYTE_SIZE);
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

  public get w() {
    return this.$view.getFloat32(ByteOffset.w, true);
  }

  public set w(value: number) {
    this.$view.setFloat32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getFloat32(ByteOffset.h, true);
  }

  public set h(value: number) {
    this.$view.setFloat32(ByteOffset.h, value, true);
  }

  public get minDepth() {
    return this.$view.getFloat32(ByteOffset.min_depth, true);
  }

  public set minDepth(value: number) {
    this.$view.setFloat32(ByteOffset.min_depth, value, true);
  }

  public get maxDepth() {
    return this.$view.getFloat32(ByteOffset.max_depth, true);
  }

  public set maxDepth(value: number) {
    this.$view.setFloat32(ByteOffset.max_depth, value, true);
  }
}
