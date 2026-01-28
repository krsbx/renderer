import type { BuildTuple } from '@/types/shared';
import { BaseStruct } from '@/utility/base-struct';
import type { HapticDirectionType } from '../../../../ffi/haptic/constant';
import { ByteOffset } from './constant';

export class HapticDirection extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $dir: BuildTuple<3, number> | null = null;

  public get type() {
    return this.$view.getUint8(ByteOffset.type) as HapticDirectionType;
  }

  public set type(value: HapticDirectionType) {
    this.$view.setUint8(ByteOffset.type, value);
  }

  public get dir() {
    if (this.$dir) return this.$dir;

    this.$dir = new Int32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.dir1,
      3
    ) as never;

    return this.$dir;
  }
}
