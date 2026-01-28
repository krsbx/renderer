import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class GPUIndirectDispatchCommand extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get groupCountX() {
    return this.$view.getUint32(ByteOffset.groupcount_x, true);
  }

  public set groupCountX(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_x, value, true);
  }

  public get groupCountY() {
    return this.$view.getUint32(ByteOffset.groupcount_y, true);
  }

  public set groupCountY(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_y, value, true);
  }

  public get groupCountZ() {
    return this.$view.getUint32(ByteOffset.groupcount_z, true);
  }

  public set groupCountZ(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_z, value, true);
  }
}
