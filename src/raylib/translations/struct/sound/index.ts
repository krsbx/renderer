import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { AudioStream } from '../audio-stream';
import { ByteOffset } from './constant';

export class Sound extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public readonly stream: AudioStream;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.stream = new AudioStream(
      this.$memory.subarray(
        ByteOffset.stream,
        ByteOffset.stream + AudioStream.BYTE_SIZE
      )
    );
  }

  public get frameCount() {
    return this.$view.getUint32(ByteOffset.frameCount, true);
  }

  public set frameCount(value: number) {
    this.$view.setUint32(ByteOffset.frameCount, value, true);
  }
}
