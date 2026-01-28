import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Texture } from '../texture';
import { ByteOffset } from './constant';

export class RenderTexture extends BaseStruct {
  public static override readonly BYTE_SIZE = 44;

  public readonly texture: Texture;
  public readonly depth: Texture;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.texture = new Texture(
      this.$memory.subarray(
        ByteOffset.texture,
        ByteOffset.texture + Texture.BYTE_SIZE
      )
    );
    this.depth = new Texture(
      this.$memory.subarray(
        ByteOffset.depth,
        ByteOffset.depth + Texture.BYTE_SIZE
      )
    );
  }

  public get id() {
    return this.$view.getUint32(ByteOffset.id, true);
  }

  public set id(value: number) {
    this.$view.setUint32(ByteOffset.id, value, true);
  }
}

export { RenderTexture as RenderTexture2D };
