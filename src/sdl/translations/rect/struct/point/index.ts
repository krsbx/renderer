import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Point extends BaseStruct {
  public static override readonly BYTE_SIZE = 8;

  public get x() {
    return this.$view.getInt32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setInt32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getInt32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setInt32(ByteOffset.y, value, true);
  }
}
