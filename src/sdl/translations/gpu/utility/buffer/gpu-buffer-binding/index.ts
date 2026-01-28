import { BaseStruct } from '@/utility/base-struct';
import type { Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUBufferBinding extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get buffer() {
    const addr = this.$view.getBigUint64(ByteOffset.buffer, true);

    return Number(addr) as Pointer;
  }

  public set buffer(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.buffer, BigInt(value), true);
  }

  public get offset() {
    return this.$view.getUint32(ByteOffset.offset, true);
  }

  public set offset(value: number) {
    this.$view.setUint32(ByteOffset.offset, value, true);
  }
}
