import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import { ByteOffset } from './constant';

export class GPUIndirectDispatchCommand extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get groupCountX() {
    return this.$view.getUint32(ByteOffset.groupcount_x, true) as UInt32;
  }

  public set groupCountX(value: UInt32) {
    this.$view.setUint32(ByteOffset.groupcount_x, value, true);
  }

  public get groupCountY() {
    return this.$view.getUint32(ByteOffset.groupcount_y, true) as UInt32;
  }

  public set groupCountY(value: UInt32) {
    this.$view.setUint32(ByteOffset.groupcount_y, value, true);
  }

  public get groupCountZ() {
    return this.$view.getUint32(ByteOffset.groupcount_z, true) as UInt32;
  }

  public set groupCountZ(value: UInt32) {
    this.$view.setUint32(ByteOffset.groupcount_z, value, true);
  }
}
