import { BaseStruct } from '@basestruct';
import type { GPUSampler, GPUTexture } from '@/sdl/types/definition';
import { ByteOffset } from './constant';

export class GPUTextureSamplerBinding extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get texture() {
    const addr = this.$view.getBigUint64(ByteOffset.texture, true);

    return Number(addr) as GPUTexture;
  }

  public set texture(value: GPUTexture) {
    this.$view.setBigUint64(ByteOffset.texture, BigInt(value), true);
  }

  public get sampler() {
    const addr = this.$view.getBigUint64(ByteOffset.sampler, true);

    return Number(addr) as GPUSampler;
  }

  public set sampler(value: GPUSampler) {
    this.$view.setBigUint64(ByteOffset.sampler, BigInt(value), true);
  }
}
