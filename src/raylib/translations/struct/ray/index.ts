import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Vector3 } from '../vector3';
import { ByteOffset } from './constant';

export class Ray extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public readonly position: Vector3;
  public readonly direction: Vector3;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.position = new Vector3(
      this.$memory.subarray(
        ByteOffset.position,
        ByteOffset.position + Vector3.BYTE_SIZE
      )
    );
    this.direction = new Vector3(
      this.$memory.subarray(
        ByteOffset.direction,
        ByteOffset.direction + Vector3.BYTE_SIZE
      )
    );
  }
}
