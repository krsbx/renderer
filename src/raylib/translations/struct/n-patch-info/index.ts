import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Rectangle } from '../rectangle';
import { ByteOffset } from './constant';

export class NPatchInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 36;

  public readonly source: Rectangle;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.source = new Rectangle(
      this.$memory.subarray(
        ByteOffset.source,
        ByteOffset.source + Rectangle.BYTE_SIZE
      )
    );
  }

  public get left() {
    return this.$view.getInt32(ByteOffset.left, true);
  }

  public set left(value: number) {
    this.$view.setInt32(ByteOffset.left, value, true);
  }

  public get top() {
    return this.$view.getInt32(ByteOffset.top, true);
  }

  public set top(value: number) {
    this.$view.setInt32(ByteOffset.top, value, true);
  }

  public get right() {
    return this.$view.getInt32(ByteOffset.right, true);
  }

  public set right(value: number) {
    this.$view.setInt32(ByteOffset.right, value, true);
  }

  public get bottom() {
    return this.$view.getInt32(ByteOffset.bottom, true);
  }

  public set bottom(value: number) {
    this.$view.setInt32(ByteOffset.bottom, value, true);
  }

  public get layout() {
    return this.$view.getInt32(ByteOffset.layout, true);
  }

  public set layout(value: number) {
    this.$view.setInt32(ByteOffset.layout, value, true);
  }
}
