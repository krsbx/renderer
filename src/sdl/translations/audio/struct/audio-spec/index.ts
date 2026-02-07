import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import type { AudioFormat } from '@sdl/ffi/constant/audio';
import { ByteOffset } from './constant';

export class AudioSpec extends BaseStruct {
  public static override readonly BYTE_SIZE = 12;

  public get format() {
    return this.$view.getInt32(ByteOffset.format, true) as AudioFormat;
  }

  public set format(value: AudioFormat) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }

  public get channels() {
    return this.$view.getInt32(ByteOffset.channels, true) as Int32;
  }

  public set channels(value: Int32) {
    this.$view.setInt32(ByteOffset.channels, value, true);
  }

  public get freq() {
    return this.$view.getInt32(ByteOffset.freq, true) as Int32;
  }

  public set freq(value: Int32) {
    this.$view.setInt32(ByteOffset.freq, value, true);
  }
}
