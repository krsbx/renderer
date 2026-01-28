import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Image } from '../image';
import { ByteOffset } from './constant';

export class GlyphInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public readonly image: Image;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.image = new Image(
      this.$memory.subarray(
        ByteOffset.image,
        ByteOffset.image + Image.BYTE_SIZE
      )
    );
  }

  public get value() {
    return this.$view.getInt32(ByteOffset.value, true);
  }

  public set value(value: number) {
    this.$view.setInt32(ByteOffset.value, value, true);
  }

  public get offsetX() {
    return this.$view.getInt32(ByteOffset.offsetX, true);
  }

  public set offsetX(value: number) {
    this.$view.setInt32(ByteOffset.offsetX, value, true);
  }

  public get offsetY() {
    return this.$view.getInt32(ByteOffset.offsetY, true);
  }

  public set offsetY(value: number) {
    this.$view.setInt32(ByteOffset.offsetY, value, true);
  }

  public get advanceX() {
    return this.$view.getInt32(ByteOffset.advanceX, true);
  }

  public set advanceX(value: number) {
    this.$view.setInt32(ByteOffset.advanceX, value, true);
  }
}
