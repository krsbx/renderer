import { BaseStruct } from '@basestruct';
import type { Int32, UInt32 } from '@/types/primitive';
import { ByteOffset } from './constant';

export class GPUMultisampleState extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get sampleCount() {
    return this.$view.getInt32(ByteOffset.sample_count, true) as Int32;
  }

  public set sampleCount(value: Int32) {
    this.$view.setInt32(ByteOffset.sample_count, value, true);
  }

  public get sampleMask() {
    return this.$view.getUint32(ByteOffset.sample_mask, true) as UInt32;
  }

  public set sampleMask(value: UInt32) {
    this.$view.setUint32(ByteOffset.sample_mask, value, true);
  }

  public get enableMask() {
    return this.$view.getUint8(ByteOffset.enable_mask) === 1;
  }

  public set enableMask(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_mask, value ? 1 : 0);
  }

  public get enableAlphaToCoverage() {
    return this.$view.getUint8(ByteOffset.enable_alpha_to_coverage) === 1;
  }

  public set enableAlphaToCoverage(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_alpha_to_coverage, value ? 1 : 0);
  }
}
