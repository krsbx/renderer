import { BaseStruct, type BaseStructOptions } from '@basestruct';
import { Color } from '../color';
import { ByteOffset } from './constant';

export class Palette extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public readonly colors: Color[];

  public constructor(data: BaseStructOptions) {
    super(data);

    this.colors = Array.from({ length: this.colorCount }, (_, i) => {
      const start = i * Color.BYTE_SIZE;
      const end = start + Color.BYTE_SIZE;

      return new Color(this.$memory.subarray(start, end));
    });
  }

  public get colorCount() {
    return this.$view.getInt32(ByteOffset.ncolors, true);
  }

  public set colorCount(value: number) {
    this.$view.setInt32(ByteOffset.ncolors, value, true);
  }

  public get version() {
    return this.$view.getUint32(ByteOffset.version, true);
  }

  public set version(value: number) {
    this.$view.setUint32(ByteOffset.version, value, true);
  }

  public get refcount() {
    return this.$view.getInt32(ByteOffset.refcount, true);
  }

  public set refcount(value: number) {
    this.$view.setInt32(ByteOffset.refcount, value, true);
  }
}
