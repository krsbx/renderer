import { BaseStruct } from '@/utility/base-struct';
import type { Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUTransferBufferLocation extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

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
}
