import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUVertexElementFormat } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUVertexAttribute {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUVertexAttribute.BYTE_SIZE);
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

  public get location() {
    return this.$view.getUint32(ByteOffset.location, true);
  }

  public set location(value: number) {
    this.$view.setUint32(ByteOffset.location, value, true);
  }

  public get buffer_slot() {
    return this.$view.getUint32(ByteOffset.buffer_slot, true);
  }

  public set buffer_slot(value: number) {
    this.$view.setUint32(ByteOffset.buffer_slot, value, true);
  }

  public get format() {
    return this.$view.getInt32(
      ByteOffset.format,
      true
    ) as GPUVertexElementFormat;
  }

  public set format(value: GPUVertexElementFormat) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }

  public get offset() {
    return this.$view.getUint32(ByteOffset.offset, true);
  }

  public set offset(value: number) {
    this.$view.setUint32(ByteOffset.offset, value, true);
  }
}
