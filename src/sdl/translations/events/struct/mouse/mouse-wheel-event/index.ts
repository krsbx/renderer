import { BaseStruct } from '@basestruct';
import type { MouseWheelDirection } from '@sdl/ffi/constant/mouse';
import { ByteOffset } from './constant';
import type { MouseWheelEventType } from './types';

export class MouseWheelEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 56;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as MouseWheelEventType;
  }

  public set type(value: MouseWheelEventType) {
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

  public get direction() {
    return this.$view.getInt32(
      ByteOffset.direction,
      true
    ) as MouseWheelDirection;
  }

  public set direction(value: MouseWheelDirection) {
    this.$view.setInt32(ByteOffset.direction, value, true);
  }

  public get mouseX() {
    return this.$view.getFloat32(ByteOffset.mouse_x, true);
  }

  public set mouseX(value: number) {
    this.$view.setFloat32(ByteOffset.mouse_x, value, true);
  }

  public get mouseY() {
    return this.$view.getFloat32(ByteOffset.mouse_y, true);
  }

  public set mouseY(value: number) {
    this.$view.setFloat32(ByteOffset.mouse_y, value, true);
  }

  public get integerX() {
    return this.$view.getInt32(ByteOffset.integer_x, true);
  }

  public set integerX(value: number) {
    this.$view.setInt32(ByteOffset.integer_x, value, true);
  }

  public get integerY() {
    return this.$view.getInt32(ByteOffset.integer_y, true);
  }

  public set integerY(value: number) {
    this.$view.setInt32(ByteOffset.integer_y, value, true);
  }
}
