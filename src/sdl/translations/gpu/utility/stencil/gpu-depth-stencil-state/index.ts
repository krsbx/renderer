import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUCompareOp } from '../../../../../ffi/gpu/constant';
import { GPUStencilOpState } from '../gpu-stencil-op-state';
import { ByteOffset } from './constant';

export class GPUDepthStencilState {
  public static readonly BYTE_SIZE = 44;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly back_stencil_state: GPUStencilOpState;
  public readonly front_stencil_state: GPUStencilOpState;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUDepthStencilState.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.back_stencil_state = new GPUStencilOpState(
      this.$memory.subarray(
        ByteOffset.back_stencil_state,
        ByteOffset.back_stencil_state + GPUStencilOpState.BYTE_SIZE
      )
    );
    this.front_stencil_state = new GPUStencilOpState(
      this.$memory.subarray(
        ByteOffset.front_stencil_state,
        ByteOffset.front_stencil_state + GPUStencilOpState.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get compare_op() {
    return this.$view.getInt32(ByteOffset.compare_op, true) as GPUCompareOp;
  }

  public set compare_op(value: GPUCompareOp) {
    this.$view.setInt32(ByteOffset.compare_op, value, true);
  }

  public get compare_mask() {
    return this.$view.getUint8(ByteOffset.compare_mask);
  }

  public set compare_mask(value: number) {
    this.$view.setUint8(ByteOffset.compare_mask, value);
  }

  public get write_mask() {
    return this.$view.getUint8(ByteOffset.write_mask);
  }

  public set write_mask(value: number) {
    this.$view.setUint8(ByteOffset.write_mask, value);
  }

  public get enable_depth_test() {
    return this.$view.getUint8(ByteOffset.enable_depth_test) === 1;
  }

  public set enable_depth_test(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_test, value ? 1 : 0);
  }

  public get enable_depth_write() {
    return this.$view.getUint8(ByteOffset.enable_depth_write) === 1;
  }

  public set enable_depth_write(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_depth_write, value ? 1 : 0);
  }

  public get enable_stencil_test() {
    return this.$view.getUint8(ByteOffset.enable_stencil_test) === 1;
  }

  public set enable_stencil_test(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_stencil_test, value ? 1 : 0);
  }
}
