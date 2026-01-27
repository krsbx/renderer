import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUTextureTransferInfo {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GPUTextureTransferInfo.BYTE_SIZE);
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

  public static create(data?: StructInit<GPUTextureTransferInfo>) {
    const instance = new GPUTextureTransferInfo(
      GPUTextureTransferInfo.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get transferBuffer() {
    const addr = this.$view.getBigUint64(ByteOffset.transfer_buffer, true);

    return Number(addr) as Pointer;
  }

  public set transferBuffer(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.transfer_buffer, BigInt(value), true);
  }

  public get offset() {
    return this.$view.getUint32(ByteOffset.offset, true);
  }

  public set offset(value: number) {
    this.$view.setUint32(ByteOffset.offset, value, true);
  }

  public get pixelsPerRow() {
    return this.$view.getUint32(ByteOffset.pixels_per_row, true);
  }

  public set pixelsPerRow(value: number) {
    this.$view.setUint32(ByteOffset.pixels_per_row, value, true);
  }

  public get rowsPerLayer() {
    return this.$view.getUint32(ByteOffset.rows_per_layer, true);
  }

  public set rowsPerLayer(value: number) {
    this.$view.setUint32(ByteOffset.rows_per_layer, value, true);
  }
}
