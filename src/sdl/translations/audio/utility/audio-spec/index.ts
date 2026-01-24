import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { AudioFormat } from '../../../../ffi/audio/constant';
import { ByteOffset } from './constant';

export class AudioSpec {
  public static readonly BYTE_SIZE = 12;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, AudioSpec.BYTE_SIZE);
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
