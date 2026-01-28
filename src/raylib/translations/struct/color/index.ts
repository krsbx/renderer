import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Color {
  public static readonly BYTE_SIZE = 4;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Color.BYTE_SIZE);
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

  public get r() {
    return this.$view.getUint8(ByteOffset.r);
  }

  public set r(value: number) {
    this.$view.setUint8(ByteOffset.r, value);
  }

  public get g() {
    return this.$view.getUint8(ByteOffset.g);
  }

  public set g(value: number) {
    this.$view.setUint8(ByteOffset.g, value);
  }

  public get b() {
    return this.$view.getUint8(ByteOffset.b);
  }

  public set b(value: number) {
    this.$view.setUint8(ByteOffset.b, value);
  }

  public get a() {
    return this.$view.getUint8(ByteOffset.a);
  }

  public set a(value: number) {
    this.$view.setUint8(ByteOffset.a, value);
  }
}
