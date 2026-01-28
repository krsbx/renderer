import { BaseStruct } from '@/utility/base-struct';
import type { GPUTransferBufferUsage } from '../../../../../ffi/gpu/constant';
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
    return this.$view.getUint32(ByteOffset.size, true);
  }

  public set size(value: number) {
    this.$view.setUint32(ByteOffset.size, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
