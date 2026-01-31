import { BaseStruct, type BaseStructOptions } from '@basestruct';
import { Surface } from '../../../surface/struct';
import { ByteOffset } from './constant';

export class CursorFrameInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public readonly surface: Surface;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.surface = new Surface(
      this.$memory.subarray(
        ByteOffset.surface,
        ByteOffset.surface + Surface.BYTE_SIZE
      )
    );
  }

  public get duration() {
    return this.$view.getUint32(ByteOffset.duration, true);
  }

  public set duration(value: number) {
    this.$view.setUint32(ByteOffset.duration, value, true);
  }
}
