import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Color extends BaseStruct {
  public static override readonly BYTE_SIZE = 4;

  public get r() {
    return this.$view.getUint8(ByteOffset.r);
  }

  public set r(value: number) {
    this.$view.setUint8(ByteOffset.r, value);
  }

  public get g() {
    return this.$view.getUint8(ByteOffset.g);
  }

  public set g(value: number) {
    this.$view.setUint8(ByteOffset.g, value);
  }

  public get b() {
    return this.$view.getUint8(ByteOffset.b);
  }

  public set b(value: number) {
    this.$view.setUint8(ByteOffset.b, value);
  }

  public get a() {
    return this.$view.getUint8(ByteOffset.a);
  }

  public set a(value: number) {
    this.$view.setUint8(ByteOffset.a, value);
  }
}
