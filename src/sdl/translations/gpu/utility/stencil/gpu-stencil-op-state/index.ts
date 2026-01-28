import { BaseStruct } from '@/utility/base-struct';
import type { GPUStencilOp } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUStencilOpState extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get failOp() {
    return this.$view.getInt32(ByteOffset.fail_op, true) as GPUStencilOp;
  }

  public set failOp(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.fail_op, value, true);
  }

  public get passOp() {
    return this.$view.getInt32(ByteOffset.pass_op, true) as GPUStencilOp;
  }

  public set passOp(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.pass_op, value, true);
  }

  public get depthFailOp() {
    return this.$view.getInt32(ByteOffset.depth_fail_op, true) as GPUStencilOp;
  }

  public set depthFailOp(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.depth_fail_op, value, true);
  }

  public get compareOp() {
    return this.$view.getInt32(ByteOffset.compare_op, true) as GPUStencilOp;
  }

  public set compareOp(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.compare_op, value, true);
  }
}
