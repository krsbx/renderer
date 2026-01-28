import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import type { GPUTextureFormat } from '../../../../../ffi/gpu/constant';
import { GPUColorTargetBlendState } from '../gpu-color-target-blend-state';
import { ByteOffset } from './constant';

export class GPUColorTargetDescription extends BaseStruct {
  public static override readonly BYTE_SIZE = 36;

  public readonly blendState: GPUColorTargetBlendState;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.blendState = new GPUColorTargetBlendState(
      this.$memory.subarray(
        ByteOffset.blend_state,
        ByteOffset.blend_state + GPUColorTargetBlendState.BYTE_SIZE
      )
    );
  }

  public get format() {
    return this.$view.getInt32(0, true) as GPUTextureFormat;
  }

  public set format(value: GPUTextureFormat) {
    this.$view.setInt32(0, value, true);
  }
}
