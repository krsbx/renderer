import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Vector3 } from '../vector3';
import { Quaternion } from '../vector4';
import { ByteOffset } from './constant';

export class Transform extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public readonly translation: Vector3;
  public readonly rotation: Quaternion;
  public readonly scale: Vector3;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.translation = new Vector3(
      this.$memory.subarray(
        ByteOffset.translation,
        ByteOffset.translation + Vector3.BYTE_SIZE
      )
    );
    this.rotation = new Quaternion(
      this.$memory.subarray(
        ByteOffset.rotation,
        ByteOffset.rotation + Quaternion.BYTE_SIZE
      )
    );
    this.scale = new Vector3(
      this.$memory.subarray(
        ByteOffset.scale,
        ByteOffset.scale + Vector3.BYTE_SIZE
      )
    );
  }
}
