import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUVertexInputRate } from '@sdl/ffi/constant/gpu';
import { ByteOffset } from './constant';

export class GPUVertexBufferDescription extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get slot() {
    return this.$view.getUint32(ByteOffset.slot, true) as UInt32;
  }

  public set slot(value: UInt32) {
    this.$view.setUint32(ByteOffset.slot, value, true);
  }

  public get pitch() {
    return this.$view.getUint32(ByteOffset.pitch, true) as UInt32;
  }

  public set pitch(value: UInt32) {
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
    return this.$view.getUint32(ByteOffset.instance_step_rate, true) as UInt32;
  }

  public set instanceStepRate(value: UInt32) {
    this.$view.setUint32(ByteOffset.instance_step_rate, value, true);
  }
}
