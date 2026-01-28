import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Vector2 } from '../vector2';
import { ByteOffset } from './constant';

export class Camera2D extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public readonly offset: Vector2;
  public readonly target: Vector2;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.offset = new Vector2(
      this.$memory.subarray(
        ByteOffset.offset,
        ByteOffset.offset + Vector2.BYTE_SIZE
      )
    );
    this.target = new Vector2(
      this.$memory.subarray(
        ByteOffset.target,
        ByteOffset.target + Vector2.BYTE_SIZE
      )
    );
  }

  public get rotation() {
    return this.$view.getFloat32(ByteOffset.rotation, true);
  }

  public set rotation(value: number) {
    this.$view.setFloat32(ByteOffset.rotation, value, true);
  }

  public get zoom() {
    return this.$view.getFloat32(ByteOffset.zoom, true);
  }

  public set zoom(value: number) {
    this.$view.setFloat32(ByteOffset.zoom, value, true);
  }
}
