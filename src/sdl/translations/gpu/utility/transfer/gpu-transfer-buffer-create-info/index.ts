import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUTransferBufferUsage } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUTransferBufferCreateInfo {
  public static readonly BYTE_SIZE = 12;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        GPUTransferBufferCreateInfo.BYTE_SIZE
      );
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

  public get usage() {
    return this.$view.getInt32(
      ByteOffset.usage,
      true
    ) as GPUTransferBufferUsage;
  }

  public set usage(value: GPUTransferBufferUsage) {
    this.$view.setInt32(ByteOffset.usage, value, true);
  }

  public get size() {
    return this.$view.getUint32(ByteOffset.size, true);
  }

  public set size(value: number) {
    this.$view.setUint32(ByteOffset.size, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
