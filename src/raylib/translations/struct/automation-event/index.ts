import type { BuildTuple } from '@/types/shared';
import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class AutomationEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  // Cached params array
  private $params: BuildTuple<4, number> | null = null;

  public get frame() {
    return this.$view.getUint32(ByteOffset.frame, true);
  }

  public set frame(value: number) {
    this.$view.setUint32(ByteOffset.frame, value, true);
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true);
  }

  public set type(value: number) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get params() {
    if (this.$params) return this.$params;

    this.$params = new Int32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.params,
      4
    ) as never;

    return this.$params;
  }
}
