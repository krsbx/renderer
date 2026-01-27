import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUCompareOp } from '../../../../../ffi/gpu/constant';
import { GPUStencilOpState } from '../gpu-stencil-op-state';
import { ByteOffset } from './constant';

export class GPUDepthStencilState {
  public static readonly BYTE_SIZE = 44;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly backStencilState: GPUStencilOpState;
  public readonly frontStencilState: GPUStencilOpState;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
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

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<GPUDepthStencilState>) {
    const instance = new GPUDepthStencilState(
      GPUDepthStencilState.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
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
