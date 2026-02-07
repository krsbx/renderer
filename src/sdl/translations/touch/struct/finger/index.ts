import type { Float } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class Finger extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get id() {
    return this.$view.getBigUint64(ByteOffset.id, true);
  }

  public set id(value: bigint) {
    this.$view.setBigUint64(ByteOffset.id, value, true);
  }

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true) as Float;
  }

  public set x(value: Float) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true) as Float;
  }

  public set y(value: Float) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get pressure() {
    return this.$view.getFloat32(ByteOffset.pressure, true) as Float;
  }

  public set pressure(value: Float) {
    this.$view.setFloat32(ByteOffset.pressure, value, true);
  }
}
