import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Vector3 } from '../vector3';
import { ByteOffset } from './constant';

export class Camera3D extends BaseStruct {
  public static override readonly BYTE_SIZE = 44;

  public readonly position: Vector3;
  public readonly target: Vector3;
  public readonly up: Vector3;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.position = new Vector3(
      this.$memory.subarray(
        ByteOffset.position,
        ByteOffset.position + Vector3.BYTE_SIZE
      )
    );
    this.target = new Vector3(
      this.$memory.subarray(
        ByteOffset.target,
        ByteOffset.target + Vector3.BYTE_SIZE
      )
    );
    this.up = new Vector3(
      this.$memory.subarray(ByteOffset.up, ByteOffset.up + Vector3.BYTE_SIZE)
    );
  }

  public get fovy() {
    return this.$view.getFloat32(ByteOffset.fovy, true);
  }

  public set fovy(value: number) {
    this.$view.setFloat32(ByteOffset.fovy, value, true);
  }

  public get projection() {
    return this.$view.getInt32(ByteOffset.projection, true);
  }

  public set projection(value: number) {
    this.$view.setInt32(ByteOffset.projection, value, true);
  }
}

export { Camera3D as Camera };
