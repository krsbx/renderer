import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUTextureFormat } from '../../../../../ffi/gpu/constant';
import { GPUColorTargetBlendState } from '../gpu-color-target-blend-state';
import { ByteOffset } from './constant';

export class GPUColorTargetDescription {
  public static readonly BYTE_SIZE = 36;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly blendState: GPUColorTargetBlendState;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        GPUColorTargetDescription.BYTE_SIZE
      );
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.blendState = new GPUColorTargetBlendState(
      this.$memory.subarray(
        ByteOffset.blend_state,
        ByteOffset.blend_state + GPUColorTargetBlendState.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<GPUColorTargetDescription>) {
    const instance = new GPUColorTargetDescription(
      GPUColorTargetDescription.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get format() {
    return this.$view.getInt32(0, true) as GPUTextureFormat;
  }

  public set format(value: GPUTextureFormat) {
    this.$view.setInt32(0, value, true);
  }
}
