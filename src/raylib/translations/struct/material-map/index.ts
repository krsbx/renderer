import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Color } from '../color';
import { Texture } from '../texture';
import { ByteOffset } from './constant';

export class MaterialMap extends BaseStruct {
  public static override readonly BYTE_SIZE = 28;

  public readonly texture: Texture;
  public readonly color: Color;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.texture = new Texture(
      this.$memory.subarray(
        ByteOffset.texture,
        ByteOffset.texture + Texture.BYTE_SIZE
      )
    );
    this.color = new Color(
      this.$memory.subarray(
        ByteOffset.color,
        ByteOffset.color + Color.BYTE_SIZE
      )
    );
  }

  public get value() {
    return this.$view.getFloat32(ByteOffset.value, true);
  }

  public set value(v: number) {
    this.$view.setFloat32(ByteOffset.value, v, true);
  }
}
