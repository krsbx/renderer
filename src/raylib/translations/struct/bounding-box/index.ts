import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Vector3 } from '../vector3';
import { ByteOffset } from './constant';

export class BoundingBox extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public readonly min: Vector3;
  public readonly max: Vector3;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.min = new Vector3(
      this.$memory.subarray(ByteOffset.min, ByteOffset.min + Vector3.BYTE_SIZE)
    );
    this.max = new Vector3(
      this.$memory.subarray(ByteOffset.max, ByteOffset.max + Vector3.BYTE_SIZE)
    );
  }
}
