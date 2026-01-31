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
    return this.$view.getInt32(ByteOffset.channels, true);
  }

  public set channels(value: number) {
    this.$view.setInt32(ByteOffset.channels, value, true);
  }

  public get freq() {
    return this.$view.getInt32(ByteOffset.freq, true);
  }

  public set freq(value: number) {
    this.$view.setInt32(ByteOffset.freq, value, true);
  }
}
