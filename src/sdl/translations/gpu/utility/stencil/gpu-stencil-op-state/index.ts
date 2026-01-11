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
