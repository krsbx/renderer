import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUTransferBuffer } from '@/sdl/types/definition';
import { ByteOffset } from './constant';

export class GPUTransferBufferLocation extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

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
}
