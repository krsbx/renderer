import { BaseStruct } from '@basestruct';
import type { Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUTextureTransferInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

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
