import { BaseStruct } from '@basestruct';
import type { Float } from '@/types/primitive';
import { ByteOffset } from './constant';

export class GPUViewport extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

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

  public get w() {
    return this.$view.getFloat32(ByteOffset.w, true) as Float;
  }

  public set w(value: Float) {
    this.$view.setFloat32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getFloat32(ByteOffset.h, true) as Float;
  }

  public set h(value: Float) {
    this.$view.setFloat32(ByteOffset.h, value, true);
  }

  public get minDepth() {
    return this.$view.getFloat32(ByteOffset.min_depth, true) as Float;
  }

  public set minDepth(value: Float) {
    this.$view.setFloat32(ByteOffset.min_depth, value, true);
  }

  public get maxDepth() {
    return this.$view.getFloat32(ByteOffset.max_depth, true) as Float;
  }

  public set maxDepth(value: Float) {
    this.$view.setFloat32(ByteOffset.max_depth, value, true);
  }
}
