import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class FColor {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, FColor.BYTE_SIZE);
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

  public get r() {
    return this.$view.getFloat32(ByteOffset.r);
  }

  public set r(value: number) {
    this.$view.setFloat32(ByteOffset.r, value);
  }

  public get g() {
    return this.$view.getFloat32(ByteOffset.g);
  }

  public set g(value: number) {
    this.$view.setFloat32(ByteOffset.g, value);
  }

  public get b() {
    return this.$view.getFloat32(ByteOffset.b);
  }

  public set b(value: number) {
    this.$view.setFloat32(ByteOffset.b, value);
  }

  public get a() {
    return this.$view.getFloat32(ByteOffset.a);
  }

  public set a(value: number) {
    this.$view.setFloat32(ByteOffset.a, value);
  }
}
