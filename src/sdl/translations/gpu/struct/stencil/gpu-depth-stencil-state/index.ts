import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { GPUCompareOp } from '@sdl/ffi/constant/gpu';
import { GPUStencilOpState } from '../gpu-stencil-op-state';
import { ByteOffset } from './constant';

export class GPUDepthStencilState extends BaseStruct {
  public static override readonly BYTE_SIZE = 44;

  public readonly backStencilState: GPUStencilOpState;
  public readonly frontStencilState: GPUStencilOpState;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.backStencilState = new GPUStencilOpState(
      this.$memory.subarray(
        ByteOffset.back_stencil_state,
        ByteOffset.back_stencil_state + GPUStencilOpState.BYTE_SIZE
      )
    );
    this.frontStencilState = new GPUStencilOpState(
      this.$memory.subarray(
        ByteOffset.front_stencil_state,
        ByteOffset.front_stencil_state + GPUStencilOpState.BYTE_SIZE
      )
    );
  }

  public get compareOp() {
    return this.$view.getInt32(ByteOffset.compare_op, true) as GPUCompareOp;
  }

  public set compareOp(value: GPUCompareOp) {
    this.$view.setInt32(ByteOffset.compare_op, value, true);
  }

  public get compareMask() {
    return this.$view.getUint8(ByteOffset.compare_mask);
  }

  public set compareMask(value: number) {
    this.$view.setUint8(ByteOffset.compare_mask, value);
  }

  public get writeMask() {
    return this.$view.getUint8(ByteOffset.write_mask);
  }

  public set writeMask(value: number) {
    this.$view.setUint8(ByteOffset.write_mask, value);
  }

  public get enableDepthTest() {
    return this.$view.getUint8(ByteOffset.enable_depth_test) === 1;
  }

  public set enableDepthTest(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_test, value ? 1 : 0);
  }

  public get enableDepthWrite() {
    return this.$view.getUint8(ByteOffset.enable_depth_write) === 1;
  }

  public set enableDepthWrite(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_write, value ? 1 : 0);
  }

  public get enableStencilTest() {
    return this.$view.getUint8(ByteOffset.enable_stencil_test) === 1;
  }

  public set enableStencilTest(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_stencil_test, value ? 1 : 0);
  }
}
