import { BaseStruct } from '@basestruct';
import type { Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUStorageBufferReadWriteBinding extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get buffer() {
    const addr = this.$view.getBigUint64(ByteOffset.buffer, true);

    return Number(addr) as Pointer;
  }

  public set buffer(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.buffer, BigInt(value), true);
  }

  public get cycle() {
    return this.$view.getUint8(ByteOffset.cycle) === 1;
  }

  public set cycle(value: boolean) {
    this.$view.setUint8(ByteOffset.cycle, value ? 1 : 0);
  }
}
