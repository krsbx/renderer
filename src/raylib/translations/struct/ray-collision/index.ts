import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Vector3 } from '../vector3';
import { ByteOffset } from './constant';

export class RayCollision extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public readonly point: Vector3;
  public readonly normal: Vector3;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.point = new Vector3(
      this.$memory.subarray(
        ByteOffset.point,
        ByteOffset.point + Vector3.BYTE_SIZE
      )
    );
    this.normal = new Vector3(
      this.$memory.subarray(
        ByteOffset.normal,
        ByteOffset.normal + Vector3.BYTE_SIZE
      )
    );
  }

  public get hit() {
    return this.$view.getUint8(ByteOffset.hit) !== 0;
  }

  public set hit(value: boolean) {
    this.$view.setUint8(ByteOffset.hit, value ? 1 : 0);
  }

  public get distance() {
    return this.$view.getFloat32(ByteOffset.distance, true);
  }

  public set distance(value: number) {
    this.$view.setFloat32(ByteOffset.distance, value, true);
  }
}
