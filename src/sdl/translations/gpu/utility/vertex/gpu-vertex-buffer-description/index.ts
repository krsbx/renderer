import { BaseStruct } from '@/utility/base-struct';
import type { GPUVertexInputRate } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUVertexBufferDescription extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get slot() {
    return this.$view.getUint32(ByteOffset.slot, true);
  }

  public set slot(value: number) {
    this.$view.setUint32(ByteOffset.slot, value, true);
  }

  public get pitch() {
    return this.$view.getUint32(ByteOffset.pitch, true);
  }

  public set pitch(value: number) {
    this.$view.setUint32(ByteOffset.pitch, value, true);
  }

  public get inputRate() {
    return this.$view.getUint32(
      ByteOffset.input_rate,
      true
    ) as GPUVertexInputRate;
  }

  public set inputRate(value: GPUVertexInputRate) {
    this.$view.setUint32(ByteOffset.input_rate, value, true);
  }

  public get instanceStepRate() {
    return this.$view.getUint32(ByteOffset.instance_step_rate, true);
  }

  public set instanceStepRate(value: number) {
    this.$view.setUint32(ByteOffset.instance_step_rate, value, true);
  }
}
