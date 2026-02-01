import { BaseStruct } from '@basestruct';
import type { GPUBuffer } from '@/sdl/types/definition';
import { ByteOffset } from './constant';

export class GPUBufferRegion extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get buffer() {
    const addr = this.$view.getBigUint64(ByteOffset.buffer, true);

    return Number(addr) as GPUBuffer;
  }

  public set buffer(value: GPUBuffer) {
    this.$view.setBigUint64(ByteOffset.buffer, BigInt(value), true);
  }

  public get offset() {
    return this.$view.getUint32(ByteOffset.offset, true);
  }

  public set offset(value: number) {
    this.$view.setUint32(ByteOffset.offset, value, true);
  }

  public get size() {
    return this.$view.getUint32(ByteOffset.size, true);
  }

  public set size(value: number) {
    this.$view.setUint32(ByteOffset.size, value, true);
  }
}
