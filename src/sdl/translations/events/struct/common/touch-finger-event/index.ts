import type { WindowID } from '@/sdl/types/definition';
import type { Float, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { TouchFingerEventType } from './types';

export class TouchFingerEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 56;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as TouchFingerEventType;
  }

  public set type(value: TouchFingerEventType) {
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

  public get touchId() {
    return this.$view.getBigUint64(ByteOffset.touchID, true);
  }

  public set touchID(value: bigint) {
    this.$view.setBigUint64(ByteOffset.touchID, value, true);
  }

  public get fingerId() {
    return this.$view.getBigUint64(ByteOffset.fingerID, true);
  }

  public set fingerID(value: bigint) {
    this.$view.setBigUint64(ByteOffset.fingerID, value, true);
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

  public get dx() {
    return this.$view.getFloat32(ByteOffset.dx, true) as Float;
  }

  public set dx(value: Float) {
    this.$view.setFloat32(ByteOffset.dx, value, true);
  }

  public get dy() {
    return this.$view.getFloat32(ByteOffset.dy, true) as Float;
  }

  public set dy(value: Float) {
    this.$view.setFloat32(ByteOffset.dy, value, true);
  }

  public get pressure() {
    return this.$view.getFloat32(ByteOffset.pressure, true) as Float;
  }

  public set pressure(value: Float) {
    this.$view.setFloat32(ByteOffset.pressure, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true) as WindowID;
  }

  public set windowID(value: WindowID) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }
}
