import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUTransferBufferUsage } from '@sdl/ffi/constant/gpu';
import { ByteOffset } from './constant';

export class GPUTransferBufferCreateInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get usage() {
    return this.$view.getInt32(
      ByteOffset.usage,
      true
    ) as GPUTransferBufferUsage;
  }

  public set usage(value: GPUTransferBufferUsage) {
    this.$view.setInt32(ByteOffset.usage, value, true);
  }

  public get size() {
    return this.$view.getUint32(ByteOffset.size, true) as UInt32;
  }

  public set size(value: UInt32) {
    this.$view.setUint32(ByteOffset.size, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true) as UInt32;
  }

  public set props(value: UInt32) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
