import type { MouseID, WindowID } from '@/sdl/types/definition';
import type { Float, UInt32, UInt8 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import type { MouseButton } from '@sdl/ffi/constant/mouse';
import { ByteOffset } from './constant';
import type { MouseButtonEventType } from './types';

export class MouseButtonEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as MouseButtonEventType;
  }

  public set type(value: MouseButtonEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true) as UInt32;
  }

  public set reserved(value: UInt32) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true) as WindowID;
  }

  public set windowID(value: WindowID) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true) as MouseID;
  }

  public set which(value: MouseID) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get button() {
    return this.$view.getUint8(ByteOffset.button) as MouseButton;
  }

  public set button(value: MouseButton) {
    this.$view.setUint8(ByteOffset.button, value);
  }

  public get down() {
    return this.$view.getUint8(ByteOffset.down) === 1;
  }

  public set down(value: boolean) {
    this.$view.setUint8(ByteOffset.down, value ? 1 : 0);
  }

  public get clicks() {
    return this.$view.getUint8(ByteOffset.clicks) as UInt8;
  }

  public set clicks(value: UInt8) {
    this.$view.setUint8(ByteOffset.clicks, value);
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
}
