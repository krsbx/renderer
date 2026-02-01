import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class FColor extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get r() {
    return this.$view.getFloat32(ByteOffset.r, true);
  }

  public set r(value: number) {
    this.$view.setFloat32(ByteOffset.r, value, true);
  }

  public get g() {
    return this.$view.getFloat32(ByteOffset.g, true);
  }

  public set g(value: number) {
    this.$view.setFloat32(ByteOffset.g, value, true);
  }

  public get b() {
    return this.$view.getFloat32(ByteOffset.b, true);
  }

  public set b(value: number) {
    this.$view.setFloat32(ByteOffset.b, value, true);
  }

  public get a() {
    return this.$view.getFloat32(ByteOffset.a, true);
  }

  public set a(value: number) {
    this.$view.setFloat32(ByteOffset.a, value, true);
  }
}
