import { BaseStruct } from '@basestruct';
import type { GPUBufferUsageFlags } from '@sdl/ffi/constant/gpu';
import { ByteOffset } from './constant';

export class GPUBufferCreateInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get usage() {
    return this.$view.getUint32(ByteOffset.usage, true) as GPUBufferUsageFlags;
  }

  public set usage(value: GPUBufferUsageFlags) {
    this.$view.setUint32(ByteOffset.usage, value, true);
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
