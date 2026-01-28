import { BaseStruct } from '@/utility/base-struct';
import type { Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUTextureSamplerBinding extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get texture() {
    const addr = this.$view.getBigUint64(ByteOffset.texture, true);

    return Number(addr) as Pointer;
  }

  public set texture(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.texture, BigInt(value), true);
  }

  public get sampler() {
    const addr = this.$view.getBigUint64(ByteOffset.sampler, true);

    return Number(addr) as Pointer;
  }

  public set sampler(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.sampler, BigInt(value), true);
  }
}
