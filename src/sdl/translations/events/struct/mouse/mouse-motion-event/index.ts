import { BaseStruct } from '@basestruct';
import type { MouseButtonFlags } from '@sdl/ffi/constant/mouse';
import { ByteOffset } from './constant';
import type { MouseMotionEventType } from './types';

export class MouseMotionEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as MouseMotionEventType;
  }

  public set type(value: MouseMotionEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true);
  }

  public set reserved(value: number) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true);
  }

  public set windowID(value: number) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true);
  }

  public set which(value: number) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get state() {
    return this.$view.getUint32(ByteOffset.state, true) as MouseButtonFlags;
  }

  public set state(value: MouseButtonFlags) {
    this.$view.setUint32(ByteOffset.state, value, true);
  }

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

  public get xRel() {
    return this.$view.getFloat32(ByteOffset.xrel, true);
  }

  public set xRel(value: number) {
    this.$view.setFloat32(ByteOffset.xrel, value, true);
  }

  public get yRel() {
    return this.$view.getFloat32(ByteOffset.yrel, true);
  }

  public set yRel(value: number) {
    this.$view.setFloat32(ByteOffset.yrel, value, true);
  }
}
