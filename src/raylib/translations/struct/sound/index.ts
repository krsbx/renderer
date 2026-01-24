import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { AudioStream } from '../audio-stream';
import { ByteOffset } from './constant';

export class Sound {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly stream: AudioStream;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Sound.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.stream = new AudioStream(
      this.$memory.subarray(
        ByteOffset.stream,
        ByteOffset.stream + AudioStream.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public get frameCount() {
    return this.$view.getUint32(ByteOffset.frameCount, true);
  }

  public set frameCount(value: number) {
    this.$view.setUint32(ByteOffset.frameCount, value, true);
  }
}
