import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class GPUMultisampleState extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get sampleCount() {
    return this.$view.getInt32(ByteOffset.sample_count, true);
  }

  public set sampleCount(value: number) {
    this.$view.setInt32(ByteOffset.sample_count, value, true);
  }

  public get sampleMask() {
    return this.$view.getInt32(ByteOffset.sample_mask, true);
  }

  public set sampleMask(value: number) {
    this.$view.setInt32(ByteOffset.sample_mask, value, true);
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
