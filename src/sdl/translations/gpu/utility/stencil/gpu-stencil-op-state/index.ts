import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUStencilOp } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUStencilOpState {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUStencilOpState.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get fail_op() {
    return this.$view.getInt32(ByteOffset.fail_op, true) as GPUStencilOp;
  }

  public set fail_op(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.fail_op, value, true);
  }

  public get pass_op() {
    return this.$view.getInt32(ByteOffset.pass_op, true) as GPUStencilOp;
  }

  public set pass_op(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.pass_op, value, true);
  }

  public get depth_fail_op() {
    return this.$view.getInt32(ByteOffset.depth_fail_op, true) as GPUStencilOp;
  }

  public set depth_fail_op(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.depth_fail_op, value, true);
  }

  public get compare_op() {
    return this.$view.getInt32(ByteOffset.compare_op, true) as GPUStencilOp;
  }

  public set compare_op(value: GPUStencilOp) {
    this.$view.setInt32(ByteOffset.compare_op, value, true);
  }
}
