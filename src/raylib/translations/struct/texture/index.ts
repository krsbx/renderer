import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class Texture extends BaseStruct {
  public static override readonly BYTE_SIZE = 20;

  public get id() {
    return this.$view.getUint32(ByteOffset.id, true);
  }

  public set id(value: number) {
    this.$view.setUint32(ByteOffset.id, value, true);
  }

  public get width() {
    return this.$view.getInt32(ByteOffset.width, true);
  }

  public set width(value: number) {
    this.$view.setInt32(ByteOffset.width, value, true);
  }

  public get height() {
    return this.$view.getInt32(ByteOffset.height, true);
  }

  public set height(value: number) {
    this.$view.setInt32(ByteOffset.height, value, true);
  }

  public get mipmaps() {
    return this.$view.getInt32(ByteOffset.mipmaps, true);
  }

  public set mipmaps(value: number) {
    this.$view.setInt32(ByteOffset.mipmaps, value, true);
  }

  public get format() {
    return this.$view.getInt32(ByteOffset.format, true);
  }

  public set format(value: number) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }
}

export { Texture as Texture2D, Texture as TextureCubemap };
