import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUTransferBuffer } from '@/sdl/types/definition';
import { ByteOffset } from './constant';

export class GPUTextureTransferInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get transferBuffer() {
    const addr = this.$view.getBigUint64(ByteOffset.transfer_buffer, true);

    return Number(addr) as GPUTransferBuffer;
  }

  public set transferBuffer(value: GPUTransferBuffer) {
    this.$view.setBigUint64(ByteOffset.transfer_buffer, BigInt(value), true);
  }

  public get offset() {
    return this.$view.getUint32(ByteOffset.offset, true) as UInt32;
  }

  public set offset(value: UInt32) {
    this.$view.setUint32(ByteOffset.offset, value, true);
  }

  public get pixelsPerRow() {
    return this.$view.getUint32(ByteOffset.pixels_per_row, true) as UInt32;
  }

  public set pixelsPerRow(value: UInt32) {
    this.$view.setUint32(ByteOffset.pixels_per_row, value, true);
  }

  public get rowsPerLayer() {
    return this.$view.getUint32(ByteOffset.rows_per_layer, true) as UInt32;
  }

  public set rowsPerLayer(value: UInt32) {
    this.$view.setUint32(ByteOffset.rows_per_layer, value, true);
  }
}
