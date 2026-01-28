import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class FColor extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get r() {
    return this.$view.getFloat32(ByteOffset.r);
  }

  public set r(value: number) {
    this.$view.setFloat32(ByteOffset.r, value);
  }

  public get g() {
    return this.$view.getFloat32(ByteOffset.g);
  }

  public set g(value: number) {
    this.$view.setFloat32(ByteOffset.g, value);
  }

  public get b() {
    return this.$view.getFloat32(ByteOffset.b);
  }

  public set b(value: number) {
    this.$view.setFloat32(ByteOffset.b, value);
  }

  public get a() {
    return this.$view.getFloat32(ByteOffset.a);
  }

  public set a(value: number) {
    this.$view.setFloat32(ByteOffset.a, value);
  }
}
