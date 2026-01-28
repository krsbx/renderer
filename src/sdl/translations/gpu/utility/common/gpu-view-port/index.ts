import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class GPUViewport extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get w() {
    return this.$view.getFloat32(ByteOffset.w, true);
  }

  public set w(value: number) {
    this.$view.setFloat32(ByteOffset.w, value, true);
  }

  public get h() {
    return this.$view.getFloat32(ByteOffset.h, true);
  }

  public set h(value: number) {
    this.$view.setFloat32(ByteOffset.h, value, true);
  }

  public get minDepth() {
    return this.$view.getFloat32(ByteOffset.min_depth, true);
  }

  public set minDepth(value: number) {
    this.$view.setFloat32(ByteOffset.min_depth, value, true);
  }

  public get maxDepth() {
    return this.$view.getFloat32(ByteOffset.max_depth, true);
  }

  public set maxDepth(value: number) {
    this.$view.setFloat32(ByteOffset.max_depth, value, true);
  }
}
